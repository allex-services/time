(function (module, lib) {
  var inherit = lib.inherit;
  module
  .factory ('AllexTime', ['angular.lib.BasicController', function (BasicController) {
    function AllexTime ($scope) {
      BasicController.call(this, $scope);
    }
    inherit(AllexTime, BasicController);
    AllexTime.prototype.__cleanUp = function () {
      BasicController.prototype.__cleanUp.call(this);
    };
    return AllexTime;
  }])
  .controller('AllexTimeController', ['$scope', 'AllexTime', function ($scope, AllexTime) {
    new AllexTime($scope);
  }])
  .directive('allexTime', [function () {
    return  {
      replace : true,
      restrict: 'E',
      controller : 'AllexTimeController',
      scope : {
        sink : '@',
        format:'@'
      },
      templateUrl:'components/time/partials/time.html',
      link: function ($scope, $el, attrs) {
      }
    };
  }]);
})(angular.module('allex.time'), ALLEX.lib);
