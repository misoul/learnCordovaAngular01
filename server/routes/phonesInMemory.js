'use strict';

//TODO: mongodb, instead of loading from disk
//TODO: unit and e2e tests

var fs = require('fs');

const EMPLOYEE_1 = {"id": 1, "firstName": "James", "lastName": "King", "fullName": "James King", "managerId": 0, managerName: "", "title": "President and CEO", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "james_king.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"};
const PHONE_DIR = "server/assets/phones/";

var phonelist;
phonelist = loadJsonFromDisk(PHONE_DIR + "phones.json");

exports.get = function(req, res) {
  var id = req.params.phoneId;
  console.log('get: ' + id);
  res.jsonp(loadJsonFromDisk(PHONE_DIR + id));
};

exports.getImage = function(req, res) { // Currently unused
  var id = req.params.imageId;
  console.log('getImage: ' + id);
  res.jsonp(EMPLOYEE_1);
};

exports.findAll = function(req, res) { // Currently unused
  console.log(req.params);
  res.jsonp(phonelist);
};

function loadJsonFromDisk(fileName) {
  // It's ok to readFileSync for this scenario, files are small enough
  return JSON.parse(fs.readFileSync(fileName, 'utf8')); //TODO: propagate err up properly upon FileNotFound
}
