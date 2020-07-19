const express = require('express');
const routes = express.Router();

const SessionController = require('./controllers/SessionController');
const EstablishmentsController = require('./controllers/EstablishmentsController');
const CustomerController = require('./controllers/CustomerController');
const AttendancesController = require('./controllers/AttendancesController');
const ProceduresController = require('./controllers/ProceduresController');

routes.post('/session', SessionController.create);

routes.get('/establishment', EstablishmentsController.index);
routes.post('/establishment', EstablishmentsController.create);
routes.put('/establishment', EstablishmentsController.update);
routes.delete('/establishment', EstablishmentsController.delete);


routes.get('/customer', CustomerController.index);
routes.post('/customer', CustomerController.create);
routes.put('/customer', CustomerController.update);
routes.delete('/customer', CustomerController.delete);

routes.get('/attendance', AttendancesController.index);
routes.post('/attendence', AttendancesController.create);
routes.put('/attendence', AttendancesController.update);
routes.delete('/attendence', AttendancesController.delete);

routes.get('/procedure',ProceduresController.index);
routes.post('/procedure', ProceduresController.create);
routes.put('/procedure', ProceduresController.update);
routes.delete('/procedure', ProceduresController.delete);


module.exports = routes;