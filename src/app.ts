import express, { NextFunction, Response, Request } from 'express';
import path from 'path';

import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import { router as userRouter } from './resources/users/user.router';
import { router as boardRouter } from './resources/boards/board.router';
import { router as taskRouter } from './resources/tasks/task.router';
import * as logData from './common/logData';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(logData.logReqInfo);
app.use(logData.logResError);

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);

process.on('uncaughtException', logData.processErrorListener);
process.on('unhandledRejection', logData.processErrorListener);

//Promise.reject(new Error('Oops!'));

export { app };