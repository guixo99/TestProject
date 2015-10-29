'use strict';

/**
 * @ngdoc service
 * @name testProjectApp.Users
 * @description
 * # Users
 * Factory in the testProjectApp.
 */
angular.module('testProjectApp')
  .factory('Users', function ($q) {
  var deferred = $q.defer();
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
      },
      {
       index:3,
       name: 'Faviola Narváez C',
       phone: '1234567890',
       address: 'Samuel Ramos #20'
      }
    ];
/*
    var currentUser={};

    var getUsers = function() {
      deferred.resolve(users);
      return deferred.promise;
    };
    var getUsersCount = function() {
      deferred.resolve(users.length);
      return deferred.promise;
    };

    var setCurrentUser = function(index){
     deferred.resolve(users[index]);
     return deferred.promise;
    };

    var getCurrentUser: function(){
     deferred.resolve(currentUser);
     return deferred.promise;
    };

     var updateUser: function(index){
     deferred.resolve(users[currentUser[index]]=currentUser);
     return deferred.promise;
    };

    return {
      getUsers: getUsers,
      getUsersCount: getUsersCount,
      setCurrentUser: setCurrentUser,
      getCurrentUser: getCurrentUser
    };
*/
      var currentUser={};
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
