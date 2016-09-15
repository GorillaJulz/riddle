 (function () {
   angular
       .module('riddle.content')
       .controller('cont.ctrl', contCtrl);

       function contCtrl() {
         var cont = this;
         cont.categories = [
         {
           items: [
             { name: "Omnibus" ,
               order:1},
             { name: "Filter" ,
               order:2},
             { name: "Blub" ,
               order:3},
             { name: "blub",
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

    cont.onHover = function(item) {
      return function(dragItem, mouseEvent) {
        if(item != dragItem)
          dragItem.order = item.order + ((mouseEvent.movementY || -1) > 0 ? 0.5 : -0.5);
      }
    }

    cont.reorder = function() {
			var _orderedItems = $filter('orderBy')(cont.orderedItems, 'order');
			for(var i = 0; i < _orderedItems.length; i++) {
				_orderedItems[i].number = _orderedItems[i].order = i + 1;
			}
		}

		cont.reset = function(droppedItem) {
			droppedItem.order = droppedItem.number;
		}


    cont.getDropHandler = function(category) {
      return function(dragOb) {
        if(category.items.indexOf(dragOb.item) < 0) {
          dragOb.category.items.splice(dragOb.category.items.indexOf(dragOb.item), 1);
          category.items.push(dragOb.item);
          return true;  // Returning truthy value since we're modifying the view model
        }
      }
    }


    //set svg line
    $(window).resize(function() {

      var line1 = $('#line1');
      var el1 = element = document.getElementById('gate');
      var el2= element = document.getElementById('wsk');
      var pos1 = el1.getBoundingClientRect();
      var pos2 = el2.getBoundingClientRect();

      line1.attr('x1',pos1.left).attr('y1',0).attr('x2',pos2.left).attr('y2',0);

    }).resize();





  }
})();
