// dependencies 
const express = require("express");

// PORT
const PORT = process.env.PORT || 8080;

// express
const app = express();

// serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars 
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes 
const routes = require("./controllers/burgers_controller");

app.use(routes);

// start server 
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  


