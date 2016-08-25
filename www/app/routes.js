"use strict";

angular.module("ngapp")
  .config(["$stateProvider", "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/main");

      $stateProvider.state("main", {
        url: "/main",
        templateUrl: "app/components/main/main.html",
        title: "Misoul Cordova Angular-Material",
        controller: "MainController",
        controllerAs: "main"
      }).state("phoneList", {
        url: "/phoneList",
        templateUrl: "app/components/phone-list/phone-list.html",
        title: "Phone List",
        controller: "PhoneListController",
        controllerAs: "phoneList"
      }).state("example", {
        url: "/example",
        template: 'Hello from exampleStateProvider! <br>' +
                  '<a ui-sref="main">Main</a>',
        title: "exampleStateProvider",
        controller: "MainController",
        controllerAs: "exampleStateProvider"
      })
}]);
