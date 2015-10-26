'use strict';

/**
 * @ngdoc service
 * @name testProjectApp.Users
 * @description
 * # Users
 * Factory in the testProjectApp.
 */
angular.module('testProjectApp')
  .factory('Users', function () {
    var users = [
      {
        name: 'Guillermo Xocotzin Martinez Martinez',
        phone: '444173318',
        address: 'Independencia #2035'
      },
      {
        name: 'Guillermo Martinez',
        phone: '444173318',
        address: 'Independencia #2035'},
      {
        name: 'Xocotzin Martinez',
        phone: '444173318',
        address: 'Independencia #2035'
      }
    ];
    // Public API here
    return {
      getUsers: function() {
        return users;
      },
      getUsersCount: function () {
        return users.length;
      },
      addUser: function(value){
        users.push(value);
      }
    };
  });
