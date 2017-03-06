var sql = require( ["seriate"] );  
var schema = require( "./schema" );
var myApp = angular.module('myApp', [])

// Change the config settings to match your SQL database
var config = {  
    "server": "IS-HAY04.ischool.uw.edu",
    "user": "INFO445",
    "password": "GoHuskies!",
    "database": "GamerGenie"
};

sql.setDefaultConfig( config );

//Bind controller, passing in $scope, $http
var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.audioObject = {}


  // Gets all the tables in our system
  $scope.getAllTables = function() {
    schema.getAllTables()  
    .then( function( results ) {
        console.log( results );
    }, function( err ) {
            console.log( "Something bad happened:", err );
        } );
    $('#search').val("");
  }
}) 
