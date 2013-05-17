angular.module('notifications', [])
  .controller 'NotificationCtrl', ($scope, Notifications) ->
    $scope.notifications = Notifications

    $scope.remove = (index) ->
      $scope.notifications.splice(index, 1)

  .directive 'notifications', ->
    restrict: 'EA'
    controller: 'NotificationCtrl'
    templateUrl: 'notifications/notifications.tpl.html'

  .factory 'Notifications', ->
    []
