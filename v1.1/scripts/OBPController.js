var OBPControllerApp = angular.module("OBPController",[]);

OBPControllerApp.controller('listController',function(){
  this.menus = menuItems;
  this.tab = 1;
  this.selectTab = function(setTab) {
    this.tab = setTab;
  };

  this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};
});

var menuItems= [
  {name: 'Home', index:'1', file:"'home.html'"},
  {name: 'Article', index:'2', file:"'article.html'"},
  {name: 'Team', index:'3', file:"'team.html'"}
];
