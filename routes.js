const express = require('express');
const routes = express.Router();

const FriendController = require('./src/controllers/FriendController');
const PublicationController = require('./src/controllers/PublicationController');

// Routes from users

routes.get('/users', FriendController.index);

routes.get('/login/:nickname/:password', FriendController.login);

routes.post('/users', FriendController.create);

routes.delete('/users/:id', FriendController.delete);

// Routes from publications

routes.get('/publications', PublicationController.index);

routes.post('/publications', PublicationController.create);

routes.delete('/publications/:id', PublicationController.delete);

module.exports = routes;