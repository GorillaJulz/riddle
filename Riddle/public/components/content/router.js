(function () {
  angular
      .module('riddle.content')
      .config(function ($stateProvider) {

          $stateProvider

          .state('cont', {
              url: '/struct',
              views: {
                  'content': {template: 'components/content/content.html'}
                },
              templateUrl: 'components/content/content.html',
              controller: 'cont.ctrl',
              controllerAs: 'cont'
          });
      });
})();
