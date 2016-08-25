"use strict";

// TODO: Controller not always attach to "ngapp". See phonecat project.
angular.module("ngapp")
  .controller("PhoneListController",
    function PhoneListController($state, $scope, Phone) {
      this.phones = Phone.query()
      this.orderProp = "age"
    }
  );
