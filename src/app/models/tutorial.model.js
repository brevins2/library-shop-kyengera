//module.exports = (sequelize, Sequelize) => {
//  const Tutorial = sequelize.define("tutorial", {
//    title: {
//      type: Sequelize.STRING
//    },
//    description: {
//      type: Sequelize.STRING
//    },
//    published: {
//      type: Sequelize.BOOLEAN
//    }
//  });
//
//  return Tutorial;
//};

module.exports = (sequelize, Sequelize) => {
  const Accounts = sequelize.define("accounts", {
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    confirmPassword: {
      type: Sequelize.STRING
    },
    file: {
      type: Sequelize.STRING
    }
  });

  return Accounts;
};

module.exports = (sequelize, Sequelize) => {
  const Computers = sequelize.define("computers", {
    Title: {
      type: Sequelize.STRING
    },
    Category: {
      type: Sequelize.STRING
    },
    Price: {
      type: Sequelize.STRING
    },
    File: {
      type: Sequelize.STRING
    }
  });

  return Computers;
};

module.exports = (sequelize, Sequelize) => {
  const Phones = sequelize.define("phones", {
    Title: {
      type: Sequelize.STRING
    },
    Storage: {
      type: Sequelize.STRING
    },
    Battery: {
      type: Sequelize.STRING
    },
    Price: {
      type: Sequelize.STRING
    },
    Brand: {
      type: Sequelize.STRING
    },
    File: {
      type: Sequelize.STRING
    }
  });

  return Phones;
};

module.exports = (sequelize, Sequelize) => {
  const Orders = sequelize.define("orders", {
    Message: {
      type: Sequelize.STRING
    },
    Title: {
      type: Sequelize.STRING
    },
    Battery: {
      type: Sequelize.STRING
    },
    Price: {
      type: Sequelize.STRING
    },
    Brand: {
      type: Sequelize.STRING
    },
    Storage: {
          type: Sequelize.STRING
        },
    delivered: {
      type: Sequelize.STRING
    }
  });

  return Orders;
};

module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define("messages", {
    email: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    message: {
      type: Sequelize.STRING
    }
  });

  return Message;
};
