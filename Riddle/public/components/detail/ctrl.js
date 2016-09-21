(function () {
  angular
      .module('riddle.detail')
      .controller('detail.ctrl', detailCtrl);

      function detailCtrl($stateParams) {
        var detail = this;
        detail.serviceName = $stateParams.serviceName;
        detail.param1 = $stateParams.param1;
        detail.param2 = $stateParams.param2;
        console.log($stateParams.serviceName);
      }
})();
