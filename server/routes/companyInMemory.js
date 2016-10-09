'use strict';

/*
  Schema:
    id, name, description, headquarters/offices, logo picture
    industries, websites, code,
    public/private, stock quote, foundingDate

  Activities: history (founded..), funding rounds, hiring, layoffs, news
  Members: employees/founders, investors, boardmembers/advisors
  Offices: headquarters, regular offices, mailbox-only etc. (this is for future)

  Methods: CRUD & find
 */

exports.initConnection = function(registerFunc) {
  var findById = function(req, res) {
    var id = parseInt(req.params.id)
    console.log('findById: ' + id + ", params: " + req.params.id);
    res.jsonp(companies.find(function(company){return company.id == id}));
  };

  var findByKeywords = function(req, res) {
    console.log(req.params);
    var keywords = req.query["keywords"];
    if (keywords) {
      res.jsonp(companies.filter(function(company){return company.desc.toLowerCase().indexOf(keywords.toLowerCase()) > -1}));
    } else {
      res.jsonp(companies);
    };
  };

  var create = function(req, res) {
    console.log(req.body);
    companies.push(company1);
    res.jsonp(company1);
  }

  var update = function(req, res) {

  }

  registerFunc( {findById, findByKeywords, create} )
}


/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var company1 = {"id": 4, "firstName": "James", "lastName": "King", "fullName": "James King", "managerId": 0, managerName: "", "title": "President and CEO", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "james_king.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"};
var companies = [
    {"id": 1, "name": "Google Inc.", "desc": "Search, Ads and Beyond", "industries": "IT", "website": "google.com", "photo": "google.jpg", "stockCode": "NASDQA:GOOGL", "foundDate": "1995-01-01"},
    {"id": 2, "name": "Tribeco", "desc": "Nước giải khát", "industries": "Food & Beverages", "website": "Tribeco.com", "photo": "tribeco.jpg", "stockCode": "HCMX:TRIB", "foundDate": "1985-01-01"},
    {"id": 3, "name": "Bitis", "desc": "Giày", "industries": "Clothing", "website": "bitis.com", "photo": "bitis.jpg","stockCode": "HCMX:BITI", "foundDate": "1990-01-01"},

    {"id": 0, "name": "0", "desc": "0", "industries": "0", "website": "0.com", "photo": "0.jpg", "stockCode": "HCMX:0", "foundDate": "1990-01-01"}
];
