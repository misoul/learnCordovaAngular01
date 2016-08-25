"use strict";

angular.module("ngapp")
  .controller("MainController",
    function(shared, $state, $scope, $mdSidenav, $mdComponentRegistry, $resource, Phone){

      var ctrl = this;

      this.auth = shared.info.auth;

      this.toggle = angular.noop;

      this.title = $state.current.title;

      this.isOpen = function() { return false };
      $mdComponentRegistry
      .when("left")
      .then( function(sideNav){
        ctrl.isOpen = angular.bind( sideNav, sideNav.isOpen );
        ctrl.toggle = angular.bind( sideNav, sideNav.toggle );
      });

      this.toggleRight = function() {
      $mdSidenav("left").toggle()
          .then(function(){
          });
      };

      this.close = function() {
      $mdSidenav("right").close()
          .then(function(){
          });
      };

      this.getPhoneList = function() {
        var phones = Phone.query({},
          function(result) {
            console.info(result);
          });
      };
    });
