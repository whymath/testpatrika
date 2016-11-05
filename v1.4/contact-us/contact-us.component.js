'use strict';

angular.
  module('contactUs').
  component('contactUs', {
    templateUrl: 'contact-us/contact-us.template.html',
    controller: ['Phone',
      function ContactUsController() {
        this.user = {
          title: 'Developer',
          email: 'ipsum@lorem.com',
          firstName: '',
          lastName: '',
          company: 'Google',
          address: '1600 Amphitheatre Pkwy',
          city: 'Mountain View',
          state: 'CA',
          biography: null,
          postalCode: '94043'
        };

        this.states = ('GA GX GO').split(' ').map(function(state) {
          return {abbrev: state};
        });
      }
    ]
  });
