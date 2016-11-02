(function() {
  angular.module('portfolio', ['ui.router'])
    .config(MainRouter);

    AuthRouter.$inject = ['$stateProvider', '$urlRouterProvider']

    function MainRouter($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '../partials/_home.html'
        })
        .state('projects', {
          url: '/projects',
          templateUrl: '../partials/_projects.html'
        })
        .state('resume', {
          url: '/resume',
          templateUrl: '../partials/_resume.html'
        })

        $urlRouterProvider.otherwise('/');

      }

})()
