 (function () {
   angular
       .module('riddle.content')
       .controller('cont.ctrl').run(run);

       function run($rootScope) {
         $rootScope.categories = [
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
        $rootScope.categories2 = [
         {
           items: [

           ]
         }
       ];

    $rootScope.onHover = function(item) {
      return function(dragItem, mouseEvent) {
        if(item != dragItem)
          dragItem.order = item.order + ((mouseEvent.movementY || -1) > 0 ? 0.5 : -0.5);
      }
    }

    $rootScope.reorder = function reorder() {
			var _orderedItems = $filter('orderBy')($rootScope.orderedItems, 'order');
			for(var i = 0; i < _orderedItems.length; i++) {
				_orderedItems[i].number = _orderedItems[i].order = i + 1;
			}
		}

		$rootScope.reset = function reset(droppedItem) {
			droppedItem.order = droppedItem.number;
		}


    $rootScope.getDropHandler = function(category) {
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
