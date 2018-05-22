const express = require('express'); 
const bodyParser = require('body-parser');


let PORT = process.env.PORT || 8080; 
let app = express(); 

// app.use(express.static("public")); 

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 
// require("./app/routes/api-routes.js")(app);

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller"); 

app.use(routes); 

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  