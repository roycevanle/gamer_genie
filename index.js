var sql = require( "seriate" );  
var schema = require( "./schema" );

// Change the config settings to match your SQL database
var config = {  
    "server": "IS-HAY04.ischool.uw.edu",
    "user": "INFO445",
    "password": "GoHuskies!",
    "database": "GamerGenie"
};

sql.setDefaultConfig( config );

schema.getAllTables()  
    .then( function( results ) {
        console.log( results );
    }, function( err ) {
            console.log( "Something bad happened:", err );
        } );

// Change to match the name of a table
var tableName = "Console";

schema.getTable( tableName )  
    .then( function( results ) {
        console.log( results );
    }, function( err ) {
            console.log( "Something bad happened:", err );
        } );

schema.getColumns( tableName )  
    .then( function( results ) {
        console.log( results );
    }, function( err ) {
            console.log( "Something bad happened:", err );
        } );