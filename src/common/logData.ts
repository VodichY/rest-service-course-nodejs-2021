import morgan from 'morgan';
import {Request, Response} from 'express';
import fs from 'fs';

morgan.token('reqInfo', (req:Request) => {
  const noPassword = ({ password, ...rest }: {password: string, rest: [x: string]}) => rest;
  return `${req.protocol}://${req.get('host')}${
    req.originalUrl
  } ${JSON.stringify(req.query)} ${JSON.stringify(req.params)} ${JSON.stringify(noPassword(req.body))}`;
});

morgan.token('resError', (_req: Request, res: Response) => `${res.statusCode} ${res.statusMessage} ${res.req?.method} ${res.req?.url} `);

const logReqInfo = morgan(':reqInfo', {
  stream: fs.createWriteStream('reqInfo.log', { flags: 'a', encoding: 'utf8' })
});

const logResError = morgan(':resError', {
  stream: fs.createWriteStream('resError.log', {
    flags: 'a',
    encoding: 'utf8'
  }),
  skip(_req: Request, res: Response) {
    return res.statusCode < 500;
  }
});

const processErrorListener = (error: Error) => {
  fs.writeFileSync('resError.log', `${error.message}\n`, {
    flag: 'a',
    encoding: 'utf8'
  });
  process.exit(1);
};

export  { logReqInfo, logResError, processErrorListener };