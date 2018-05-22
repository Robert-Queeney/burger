const orm = require("../config/orm.js"); 

let burger = {
    allBurgers: (callback) => {
        orm.selectAll("burgers", (res) => {
            callback(res); 
        })
    }, 

    createBurgers: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
          callback(res);
        });
      },
}

module.exports = burger; 