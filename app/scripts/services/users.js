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
        index:0,
        name: 'Guillermo Xocotzin Martinez Martinez',
        phone: '1',
        address: 'Independencia #2035'
      },
      {
        index:1,
        name: 'Guillermo Martinez',
        phone: '2',
        address: 'Independencia #2035'},
      {
        index:2,
        name: 'Xocotzin Martinez',
        phone: '3',
        address: 'Independencia #2035'
      }
    ];

    var currentUser={};
    // Public API here
    return {
      getUsers: function() {
        return users;
      },
      getUsersCount: function () {
        return users.length;
      },
      addUser: function(value){
        value.index=users.length;
        users.push(value);
      },
      setCurrentUser: function(index){
        currentUser=users[index];
      },
      getCurrentUser: function(){
        return currentUser;
      },
      updateUser: function(index){
        users[currentUser[index]]=currentUser;
      }
    };
  });
