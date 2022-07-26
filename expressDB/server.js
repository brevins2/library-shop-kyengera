const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions ={
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
const db = require("./app/models");
db.sequelize.sync({ force: false }).then(() => {
  console.log("~Drop and re-sync db.");
});

app.use(cors(corsOptions));

// parse requests of content-type-application/json
app.use(express.json());

// parse requests of content-type-application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// simple route use
app.get("/api/messages", (req, res) => {
  res.json({ message: "Welcome to bezkoder application."});
  res.json({ message: res});
  console.log(res);
});

require("./app/routes/object.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
