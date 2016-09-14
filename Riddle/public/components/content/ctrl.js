 (function () {
   angular
       .module('riddle.content')
       .controller('cont.ctrl').run(run);

       function run() {
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
             { name: "Pimmelluf" ,
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

    cont.reorder = function reorder() {
			var _orderedItems = $filter('orderBy')($rootScope.orderedItems, 'order');
			for(var i = 0; i < _orderedItems.length; i++) {
				_orderedItems[i].number = _orderedItems[i].order = i + 1;
			}
		}

		cont.reset = function reset(droppedItem) {
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
  }
})();
