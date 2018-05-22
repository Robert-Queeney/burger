const connection = require("./connection.js"); 

let orm = {
    selectAll: (tableInput, callback) => {
        let queryString = `SELECT * FROM ${tableInput};`
        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            callback(res);
        })
    },

    
};

module.exports = orm;

// {} object = order doesn't matter (obj.name)
// [] array = order matters (indexes ie. 0,1,2,3)