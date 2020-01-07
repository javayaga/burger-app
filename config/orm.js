// require connection
const connection = require("../config/connection");

// SQL statement functions
const orm = {
    // selectAll()
    selectAll: function(tableInput) {
        const queryString = "SELECT * FROM burgers";

        connection.query(queryString, [tableInput], function(err, result) {
        if (err) throw err;

        callback(result);
        });
    },

    // insertOne()
    insertOne: function(burger_name, devoured) {
        const queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";

        connection.query(queryString, [burger_name, devoured], function(err, results) {
        if (err) throw err;

        callback(result);
        });
    }

    // updateOne()
    

};


// export orm object
module.exports = orm;

