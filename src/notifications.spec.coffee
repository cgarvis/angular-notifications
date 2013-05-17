describe 'Notifications: Factory', ->
  notifications = []

  beforeEach module('notifications')

  beforeEach inject (Notifications) ->
    notifications = Notifications

  it 'is an array', ->
    expect(typeof notifications).toBe('array')

describe 'Notifications: Directive', ->
  $scope = {}

  elm = {}
  template = '''
  <notifications></notifications>
  '''

  beforeEach module('notifications')

  beforeEach inject ($rootScope, $compile) ->
    $scope = $rootScope.$new()

    elm = angular.element(template)
    $compile(elm)($scope)
    $scope.$digest()

  it 'displays an alert', ->
    $scope.$appy ->
      Notifications.push {message: 'testing notification'}

      expect(elm).toContain('testing notification')
