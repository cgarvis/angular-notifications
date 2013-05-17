angular.module('notifications', []).controller('NotificationCtrl', function($scope, Notifications) {
  $scope.notifications = Notifications;
  return $scope.remove = function(index) {
    return $scope.notifications.splice(index, 1);
  };
}).directive('notifications', function() {
  return {
    restrict: 'EA',
    controller: 'NotificationCtrl',
    templateUrl: 'notifications.tpl.html'
  };
}).factory('Notifications', function() {
  return [];
});
