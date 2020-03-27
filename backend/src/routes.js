const express = require('express');
const OngController = require('./controllers/OngControllers')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

/**
 * Métodos HTTP
 * 
 * GET: Buscar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 * 
 * 
 * Tipos de Parâmetros
 * 
 * Querry Params : Parametros nomeados enviados na rota após o '?', serve para filtros, paginação, etc...
 * Route Params : Parametro utilizados para identificar recursos
 * Request Body : Corpo da requisição, utilizado para criar ou alterar recursos
 */
routes.post('/session',SessionController.create);

routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

routes.post('/incidents',IncidentController.create);
routes.get('/incidents',IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);

routes.get('/profile',ProfileController.index);


module.exports = routes;