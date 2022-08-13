module.exports = Phons => {
  const phones = require("../controllers/tutorial.controller.js");
  var router = require("express").Router();

  // for phones
  // Create a new Phone
  router.post("/add/phones", phones.create);
  // Retrieve all phones
  router.get("/show/phones", phones.findAll);
  // Retrieve all published phones
  router.get("/find/published/phones", phones.findAllPublished);
  // Retrieve a single phone with id
  router.get("/show-phone/:id", phones.findOne);
  // Update a phone with id
  router.put("/edit-phone/:id", phones.update);
  // Delete a phone with id
  router.delete("/delete-phone/:id", phones.delete);
  // Delete all phone
  router.delete("/delete/phones", phones.deleteAll);

  Phons.use('/api/phones', router);
};

module.exports = Mess => {
  const messages = require("../controllers/tutorial.controller.js");
  var router = require("express").Router();

  // for messages
  // Create a new Message
  router.post("/add/messages", messages.create);
  // Retrieve all Messages
  router.get("/show/messages", messages.findAll);
  // Retrieve all published messages
  router.get("/find/published/messages", messages.findAllPublished);
  // Retrieve a single messages with id
  router.get("/show-messages/:id", messages.findOne);
  // Update a phone with id
  router.put("/edit-message/:id", messages.update);
  // Delete a messages with id
  router.delete("/delete-message/:id", messages.delete);
  // Delete all messages
  router.delete("/delete/messages", messages.deleteAll);

  Mess.use('/api/messages', router);
};

module.exports = Comp => {
  const computers = require("../controllers/tutorial.controller.js");
  var router = require("express").Router();

  // for computers
  // Create a new Computers
  router.post("/add/computers", computers.create);
  // Retrieve all computer
  router.get("/show/computers", computers.findAll);
  // Retrieve all published computers
  router.get("/find/published/computers", computers.findAllPublished);
  // Retrieve a single computer with id
  router.get("/show-computer/:id", computers.findOne);
  // Update a computer with id
  router.put("/edit-computer/:id", computers.update);
  // Delete a computer with id
  router.delete("/delete-computer/:id", computers.delete);
  // Delete all computer
  router.delete("/delete/computers", computers.deleteAll);

  Comp.use('/api/computers', router);
};


module.exports = orda => {
  const orders = require("../controllers/tutorial.controller.js");
  var router = require("express").Router();

  // for orders
  // Create a new orders
  router.post("/add/orders", orders.create);
  // Retrieve all orders
  router.get("/show/orders", orders.findAll);
  // Retrieve all published orders
  router.get("/find/published/orders", orders.findAllPublished);
  // Retrieve a single orders with id
  router.get("/show-order/:id", orders.findOne);
  // Update a order with id
  router.put("/edit-order/:id", orders.update);
  // Delete a order with id
  router.delete("/delete-order/:id", orders.delete);
  // Delete all order
  router.delete("/delete/orders", orders.deleteAll);

  orda.use('/api/orders', router);
};

module.exports = acct => {
  const accounts = require("../controllers/tutorial.controller.js");
  var router = require("express").Router();

  // for accounts
  // Create a new account
  router.post("/add/accounts", accounts.create);
  // Retrieve all accounts
  router.get("/show/accounts", accounts.findAll);
  // Retrieve all published accounts
  router.get("/find/published/accounts", accounts.findAllPublished);
  // Retrieve a single account with id
  router.get("/show-account/:id", accounts.findOne);
  // Update a account with id
  router.put("/edit-account/:id", accounts.update);
  // Delete a account with id
  router.delete("/delete-account/:id", accounts.delete);
  // Delete all account
  router.delete("/delete/accounts", accounts.deleteAll);

  acct.use('/api/orders', router);
};

module.exports = img => {
  const images = require("../controllers/tutorial.controller.js");
  var router = require("express").Router();

  // for images
  // Create a new image
  router.post("/add/image", images.create);
  // Retrieve all images
  router.get("/show/images", images.findAll);
  // Retrieve all published images
  router.get("/find/published/images", images.findAllPublished);
  // Retrieve a single image with id
  router.get("/show-image/:id", images.findOne);
  // Update a image with id
  router.put("/edit-image/:id", images.update);
  // Delete a image with id
  router.delete("/delete-image/:id", images.delete);
  // Delete all image
  router.delete("/delete/images", images.deleteAll);

  img.use('/upload', router);
};
