const db = require("../models");
const Accounts = db.accounts;
const Messages = db.messages;
const Orders = db.orders;
const Phones = db.phones;
const Computers = db.computers;
const Op = db.Sequelize.Op;

// for accounts
// create and Save a new Accounts
exports.create = (req, res) => {
  // validate request
  if(!req.body.email){
    res.status(400).send({message: "Content can not be empty!"});
    return;
  }
  // create a Account
  const account = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    file: req.body.file
  };

  // save Account in the database
  Accounts.create(account).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "some error occurred while creating the Account."
    });
  });
};

//Retrieve all Accounts from the database.
exports.findAll = (req, res) => {
      const email = req.query.email;
      var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;
      Accounts.findAll({ where: condition })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving account."
          });
        });
};

// Find a single Accounts with an id.
exports.findOne = (req, res) => {
    const id = req.params.id;
      Accounts.findByPk(id)
        .then(data => {
          if (data) {
            res.send(data);
          } else {
            res.status(404).send({
              message: `Cannot find Accounts with id=${id}.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving Accounts with id=" + id
        });
    });
};

// update a Accounts from the database.
exports.update = (req, res) => {
    const id = req.params.id;
      Accounts.update(req.body, {
        where: { id: id }
      })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Accounts was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Accounts with id=${id}. Maybe Accounts was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Accounts with id=" + id
      });
    });
};

// Delete Account from the database.
exports.delete = (req, res) => {
    const id = req.params.id;
      Accounts.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Account was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Accounts with id=${id}. Maybe Accounts was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Account with id=" + id
          });
        });
};

// Delete all Accounts from the database.
exports.deleteAll = (req, res) => {
  Accounts.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Accounts were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all accounts."
      });
    });
};

// Find all published Accounts
exports.findAllPublished = (req, res) => {
    Accounts.findAll({ where: { published: true } })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving accounts."
          });
    });
};


// for phones
// create and Save a new Phones
exports.create = (req, res) => {
  // validate request
  if(!req.body.Title){
    res.status(400).send({message: "Content can not be empty!"});
    return;
  }
  // create a Phone
  const phone = {
    Title: req.body.Title,
    Storage: req.body.Storage,
    Battery: req.body.Battery,
    Price: req.body.Price,
    Brand: req.body.Brand,
    File: req.body.File
  };

  // save Phone in the database
  Phones.create(phone).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "some error occurred while creating the Phone."
    });
  });
};

//Retrieve all Phones from the database.
exports.findAll = (req, res) => {
      const Title = req.query.Title;
      var condition = Title ? { Title: { [Op.like]: `%${Title}%` } } : null;
      Phones.findAll({ where: condition })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving phones."
          });
        });
};

// Find a single Phones with an id.
exports.findOne = (req, res) => {
    const id = req.params.id;
      Phones.findByPk(id)
        .then(data => {
          if (data) {
            res.send(data);
          } else {
            res.status(404).send({
              message: `Cannot find Accounts with id=${id}.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving Accounts with id=" + id
        });
    });
};

// update a Phones from the database.
exports.update = (req, res) => {
    const id = req.params.id;
      Phones.update(req.body, {
        where: { id: id }
      })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Phones was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Phones with id=${id}. Maybe Phones was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Phones with id=" + id
      });
    });
};

// Delete Phone from the database.
exports.delete = (req, res) => {
    const id = req.params.id;
      Phones.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Phone was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Phones with id=${id}. Maybe Phone was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Phone with id=" + id
          });
        });
};

// Delete all Phones from the database.
exports.deleteAll = (req, res) => {
  Phones.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Phones were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all phones."
      });
    });
};

// Find all published Phones
exports.findAllPublished = (req, res) => {
    Phones.findAll({ where: { published: true } })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving phones."
          });
    });
};


// for computer accessories
// create and Save a new Computer
exports.create = (req, res) => {
  // validate request
  if(!req.body.Title){
    res.status(400).send({message: "Content can not be empty!"});
    return;
  }
  // create a Computer
  const computer = {
    Title: req.body.Title,
    Category: req.body.Category,
    Price: req.body.Price,
    File: req.body.File
  };

  // save Computer in the database
  Computers.create(computer).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "some error occurred while creating the Computer."
    });
  });
};

//Retrieve all Computers from the database.
exports.findAll = (req, res) => {
      const Title = req.query.Title;
      var condition = Title ? { Title: { [Op.like]: `%${Title}%` } } : null;
      Computers.findAll({ where: condition })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving computers."
          });
        });
};

// Find a single Computers with an id.
exports.findOne = (req, res) => {
    const id = req.params.id;
      Computers.findByPk(id)
        .then(data => {
          if (data) {
            res.send(data);
          } else {
            res.status(404).send({
              message: `Cannot find Computers with id=${id}.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving Computers with id=" + id
        });
    });
};

// update a Computers from the database.
exports.update = (req, res) => {
    const id = req.params.id;
      Computers.update(req.body, {
        where: { id: id }
      })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Computers was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Computers with id=${id}. Maybe Computers was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Computers with id=" + id
      });
    });
};

// Delete Computer from the database.
exports.delete = (req, res) => {
    const id = req.params.id;
      Computers.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Computer was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Computers with id=${id}. Maybe Computers was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Computer with id=" + id
          });
        });
};

// Delete all Computer from the database.
exports.deleteAll = (req, res) => {
  Computers.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Computers were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all computers."
      });
    });
};

// Find all published Computers
exports.findAllPublished = (req, res) => {
    Computers.findAll({ where: { published: true } })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving computer."
          });
    });
};


// for messages
// create and Save a new Messages
exports.create = (req, res) => {
  // validate request
  if(!req.body.email){
    res.status(400).send({message: "Content can not be empty!"});
    return;
  }
  // create a Computer
  const message = {
    email: req.body.email,
    name: req.body.name,
    message: req.body.message
  };

  // save Account in the database
  Messages.create(message).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "some error occurred while creating the Message."
    });
  });
};

//Retrieve all Message from the database.
exports.findAll = (req, res) => {
      const email = req.query.email;
      var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;
      Messages.findAll({ where: condition })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving messages."
          });
        });
};

// Find a single Messages with an id.
exports.findOne = (req, res) => {
    const id = req.params.id;
      Accounts.findByPk(id)
        .then(data => {
          if (data) {
            res.send(data);
          } else {
            res.status(404).send({
              message: `Cannot find Messages with id=${id}.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving Messages with id=" + id
        });
    });
};

// update a Messages from the database.
exports.update = (req, res) => {
    const id = req.params.id;
      Messages.update(req.body, {
        where: { id: id }
      })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Messages was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Messages with id=${id}. Maybe Messages was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Messages with id=" + id
      });
    });
};

// Delete Messages from the database.
exports.delete = (req, res) => {
    const id = req.params.id;
      Messages.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Messages was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Messages with id=${id}. Maybe Messages was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Messages with id=" + id
          });
        });
};

// Delete all Messages from the database.
exports.deleteAll = (req, res) => {
  Messages.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Messages were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Messages."
      });
    });
};

// Find all published Messages
exports.findAllPublished = (req, res) => {
    Messages.findAll({ where: { published: true } })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Messages."
          });
    });
};


// for Order
// create and Save a new Order
exports.create = (req, res) => {
  // validate request
  if(!req.body.email){
    res.status(400).send({message: "Content can not be empty!"});
    return;
  }
  // create a Order
  const order = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    file: req.body.file
  };

  // save Account in the database
  Accounts.create(account).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "some error occurred while creating the Tutorial."
    });
  });
};

//Retrieve all Accounts from the database.
exports.findAll = (req, res) => {
      const email = req.query.email;
      var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;
      Accounts.findAll({ where: condition })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving tutorials."
          });
        });
};

// Find a single Accounts with an id.
exports.findOne = (req, res) => {
    const id = req.params.id;
      Accounts.findByPk(id)
        .then(data => {
          if (data) {
            res.send(data);
          } else {
            res.status(404).send({
              message: `Cannot find Accounts with id=${id}.`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving Accounts with id=" + id
        });
    });
};

// update a Accounts from the database.
exports.update = (req, res) => {
    const id = req.params.id;
      Accounts.update(req.body, {
        where: { id: id }
      })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Accounts was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Accounts with id=${id}. Maybe Accounts was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Accounts with id=" + id
      });
    });
};

// Delete Account from the database.
exports.delete = (req, res) => {
    const id = req.params.id;
      Accounts.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "Account was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete Accounts with id=${id}. Maybe Tutorial was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Tutorial with id=" + id
          });
        });
};

// Delete all Accounts from the database.
exports.deleteAll = (req, res) => {
  Accounts.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Accounts were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all accounts."
      });
    });
};

// Find all published Accounts
exports.findAllPublished = (req, res) => {
    Accounts.findAll({ where: { published: true } })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving accounts."
          });
    });
};
