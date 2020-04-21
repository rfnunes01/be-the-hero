const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/* WELCOME */
routes.get('/', (request, response) => {
    return response.send('WELCOME IN MY API - STARTED SUCCESSFULLY! :v)');
});

/* ROTAS DE LOGIN */
routes.post('/sessions', SessionController.create);

/* ROTAS DAS ONGS */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/profile', ProfileController.index);

/* ROTAS INCIDENTS */
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.store);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;