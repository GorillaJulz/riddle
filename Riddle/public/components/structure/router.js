(function () {
  angular
      .module('riddle.structure')
      .config(function ($stateProvider, stateHelperProvider) {

          $stateProvider

            .state('struct', {
              url: '/struct',
              templateUrl: 'components/structure/structure.html'
            })

            .state('struct.content', {
              views:{
                "content":{
                  templateUrl: 'components/content/content.html'
                }
              }
            });

            // stateHelperProvider.setNestedState({
            //   name: 'struct',
            //   templateUrl: 'components/structure/structure.html',
            //   children:[
            //     {
            //       name:'content',
            //       templateUrl: 'components/content/content.html',
            //     }
            //   ]
            // });
      });

})();
