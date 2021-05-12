const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(User.toResponse)); 
});

router.route('/:userId').get(async (req, res) => {
  const user = await usersService.getUserById(req.params.userId);
  res.status(200).json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.postUser(req.body);
  res.status(201).json(User.toResponse(user));
});

module.exports = router;
