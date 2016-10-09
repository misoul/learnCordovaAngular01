'use strict';

require('paint-console');

var express = require('express'),
    path = require('path'),
    companyDAO = require('./server/routes/companyInMemory'),
    employeeDAO = require('./server/routes/employeeInMemory'),
    phoneDAO = require('./server/routes/phonesInMemory');


var app = express();

app.use(function(req, res, next) {
  console.log("Resource: " + req.url)

  // Additional middleware which will set headers that we need on each request.
  // Set permissive CORS header - this allows this server to be used only as
  // an API server in conjunction with something like webpack-dev-server.
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Disable caching so we'll always get the latest comments.
  res.setHeader('Cache-Control', 'no-cache');

  next();
});

employeeDAO.initConnection(registerRouteEmployees); // Passing callbacks twice just to register routes. Is this 'Callback Hell'?
companyDAO.initConnection(registerRouteCompanies);

app.get('/phones/phones.json', phoneDAO.findAll);
app.get('/phones/:phoneId', phoneDAO.get);
app.use('/', express.static(__dirname + '/www'));
// app.use('/assets', express.static(__dirname + '/server/assets'))
app.use('/img/phones', express.static(__dirname + '/server/assets/img/phones'));
// app.use('/app', express.static(__dirname + '/app'));

var serverPort = 8080
app.listen(serverPort);

var startingNote = ('['+(new Date()).getMinutes())+']' + ': listening on port ' + serverPort;
console.info(startingNote);

function registerRouteEmployees(employees) {
  app.get('/employees/:id/reports', employees.findByManager);
  app.get('/employees/:id', employees.findById);
  app.get('/employees', employees.findAll);
}

function registerRouteCompanies(companies) {
  app.get('/companies/:id', companies.findById);
  app.get('/companies', companies.findByKeywords);
  app.post('/companies', companies.create)
}
