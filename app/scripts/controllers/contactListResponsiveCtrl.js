'use strict';
/**
 * @name contactListResponsive
 *
 * @controller contactListResponsive
 *
 * @requires $scope
 * */

angular.module('testProjectApp')
    .controller('contactListResponsiveCtrl', ['$scope', '$log', 'listEntries', function ($scope, $log, listEntries){

     $scope.selected = [];

     $scope.query = {
      filter: '',
      order: 'name',
      limit: 5,
      page: 1
     };

      listEntries.getData().then(function(data)
      {
        $scope.query.total = data.length;
        data = _.slice(data, 0, $scope.query.limit);
        $scope.listEntries = data;
      });

       $scope.onOrderChange = function (order) {

       };

       $scope.onPaginationChange = function (page, limit) {
         return listEntries.getDatas(page, limit).then(
          function(data){
            $scope.listEntries = data;
          }
         );
       };


      this.colorTiles = (function() {
        var tiles = [];

        tiles.push({color: '#ef5350', colspan: 1, rowspan: 1, title: 'Name', image: 'fa-gear'},
        {color: '#d32f2f', colspan: 1, rowspan: 1, title: 'Address', image: 'fa-gear'},
        {color: '#f44336', colspan: 1, rowspan: 1, title: 'Phone', image: 'fa-gear'});

        return tiles;
      })();

      $scope.colorTiles = this.colorTiles;
}]);
