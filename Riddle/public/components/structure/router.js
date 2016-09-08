(function () {
  angular
      .module('riddle.structure')
      .config(function ($stateProvider) {

          $stateProvider

          .state('struct', {
              url: '/struct',
              templateUrl: 'components/structure/structure.html',
              controller: 'struct.ctrl',
              controllerAs: 'struct'
          });
      });
})();
