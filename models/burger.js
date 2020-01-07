// import ORM
const orm = require("../config/orm");

// call orm functions 
const burger = {
// select all
    selectAll: function(cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
// create bruger 
    insertOne: function(cb) {
        orm.insertOne("burgers", burger_name, devoured, (res) => {
            cb(res);
        });
    }

// update burger 
};

// export 
module.exports = burger;