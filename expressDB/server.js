const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");

const app = express();

var corsOptions ={
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parser requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();
//{ force: false }).then(() => {
//  console.log("~Drop and re-sync db.");
//}

// parse requests of content-type-application/json
app.use(express.json());

// parse requests of content-type-application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// simple route use
app.get("/api/messages", (req, res) => {
  res.json({ message: "Welcome to bezkoder application."});
  console.log(req);
  console.log(res);
});
app.get("/api/accounts", (req, res) => {
  res.json({ message: "Welcome to bezkoder application."});
  console.log(res);
});
app.get("/api/computers", (req, res) => {
  res.json({ message: "Welcome to bezkoder application."});
  console.log(res);
});
app.get("/api/phones", (req, res) => {
  res.json({ message: "Welcome to bezkoder application."});
  console.log(res);
});
app.get("/api/orders", (req, res) => {
  res.json({ message: "Welcome to bezkoder application."});
  console.log(res);
});

app.get("/api/images", (req, res) => {
  res.json({ message: "Welcome to bezkoder application."});
  console.log(res);
});

require("./app/routes/object.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
