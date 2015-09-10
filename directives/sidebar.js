var app = angular.module('excCrit');

app.directive('sidebar', function() {
	return {
		templateUrl: 'directives/sidebar.html'
	}
});


app.filter('sidebarFilter', function () {
   return function (items) {
    var filtered = [];
    var pillar = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (/p/i.test(item.hierarchy.substring(0, 1))) {
        filtered.push(item);
        pillar.push(item);
      }
      else if(/e/i.test(item.hierarchy.substring(0, 1))) {
        filtered.push(item);
      }
    }
    return filtered;
  };
});
