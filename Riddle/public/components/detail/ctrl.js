(function () {
  angular
      .module('riddle.detail')
      .controller('detail.ctrl', detailCtrl);

      function detailCtrl($stateParams, $http) {
        var detail = this;
        $http.get('https://gist.githubusercontent.com/border/775526/raw/b921df18ba00262ab5bba8cadb3c178e1f7748f7/config.json').
               then(function(response) {
                   detail.greeting = response.data;
                   console.log(detail.greeting);
               });


        detail.serviceName = $stateParams.serviceName;
        detail.param1 = $stateParams.param1;
        detail.param2 = $stateParams.param2;
        console.log($stateParams.serviceName);
      }
})();
