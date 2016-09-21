(function () {
  angular
      .module('riddle.structure')
      .config(function ($stateProvider, stateHelperProvider) {

          $stateProvider

            .state('struct', {
              url: '/struct',
              templateUrl: 'components/structure/structure.html',
              views:{
                '': {
                  templateUrl: 'components/structure/structure.html'
                },
                'content@struct':{
                  templateUrl: 'components/content/content.html',
                  controller: 'cont.ctrl',
                  controllerAs: 'cont'
                }
              }
            }).state('detail', {
              url: '/detail?serviceName',
              templateUrl: 'components/detail/detail.html',
              controller: 'detail.ctrl',
              controllerAs:'detail'
            });

      });

})();
