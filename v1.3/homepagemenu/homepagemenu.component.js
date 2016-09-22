'use strict';

angular.
  module('newsletterApp').
  component('homePageMenu',{
    templateUrl: 'homepagemenu/homepagemenu.template.html',
    controller: function HomePageMenuController() {
      this.menuItems = [
        {name: 'Home', link:'Home', index:'1'},
        {name: 'Archives', link:'Archives', index:'2'},
        {name: 'Team', link:'Team', index:'3'},
        {name: 'Contact Us', link:'Contact', index:'4'},
        {name: 'Uploads', link:'UploadArticles', index:'5'},
        {name: 'Sign In', link:'SignIn', index:'6'}];
    }
  });
