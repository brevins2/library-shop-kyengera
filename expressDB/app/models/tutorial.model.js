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

   const Delivered = sequelize.define("delivered", {
          deliver: {
            type: Sequelize.BOOLEAN
          }
   });

  return Delivered;
  return Message;
  return Orders;
  return Computers;
  return Accounts;
  return Phones;
};
