 (function () {
   angular
       .module('riddle.content')
       .controller('cont.ctrl', contCtrl);

       function contCtrl() {

         localStorage.clear();

         var cont = this;


         // on init fill the ul
         var result = JSON.parse(localStorage.getItem("services"));
         var result2 = JSON.parse(localStorage.getItem("bus"));
         if(result !== null) {


                 cont.categories = result;
                 cont.categories2 = result2;



             }else{
               cont.categories = [
               {
                 items: [
                   { name: "Omnibus" ,
                     order:1},
                   { name: "Filter" ,
                     order:2},
                   { name: "ModuleA" ,
                     order:3},
                   { name: "ModuleB",
                     order:4
                    },
                 ]
               }
             ];
              cont.categories2 = [
               {
                 items: [

                 ]
               }
             ];

             }




    cont.checkSvg= function() {
      angular.forEach(cont.categories2, function(categorie2, key) {
        if(categorie2.items.length==0){
            cont.svgStyle = {
              'display':'none',
            };
        }else {
            cont.svgStyle = {
            'display':'block',
            };
        };
      });
    }

    cont.checkSvg();
    cont.getDropHandler = function(category) {


      return function(dragOb) {
        if(category.items.indexOf(dragOb.item) < 0) {

          dragOb.category.items.splice(dragOb.category.items.indexOf(dragOb.item), 1);
          category.items.push(dragOb.item);


          cont.checkSvg();


                    // update the result array
                    var result = JSON.parse(localStorage.getItem("services"));
                    var result2 = JSON.parse(localStorage.getItem("bus"));

                    if(result == null)
                        result = null;

                    if(result2 == null)
                        result2 = null;

                    result = cont.categories;
                    result2 = cont.categories2;
                    // save the new result array
                    localStorage.setItem("services", JSON.stringify(result));
                    localStorage.setItem("bus", JSON.stringify(result2));

          return true;  // Returning truthy value since we're modifying the view model
        }
      }
    }


    //set svg line
    $(window).resize(function() {

      var line1 = $('#line1');
      var el1 = element = document.getElementById('gate');
      var el2= element = document.getElementById('wsk');
      var d = document.getElementById('line1').getAttribute('d')
      var pos1 = el1.getBoundingClientRect();
      var pos2 = el2.getBoundingClientRect();

    //  line1.attr('x1',pos1.left).attr('y1',0).attr('x2',pos2.left).attr('y2',0);
      line1.attr('d',"M"+pos1.left+",0 H"+pos2.left+",0");

    }).resize();

  }
})();
