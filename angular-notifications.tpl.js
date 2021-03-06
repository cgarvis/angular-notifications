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

angular.module("module").run(["$templateCache", function($templateCache) {

  $templateCache.put("notifications/notifications.tpl.html",
    "<div class=\"notifications\">\n" +
    "    <div class=\"alert\" ng-class=\"notification.type && 'alert-' + notification.type\" ng-repeat=\"notification in notifications\">\n" +
    "        <a href=\"#\" class=\"close\" ng-click=\"remove($index)\">&times;</a>\n" +
    "        <h4 ng-show=\"notification.title\">{{notification.title}}</h4>\n" +
    "        {{notification.message}}\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);
