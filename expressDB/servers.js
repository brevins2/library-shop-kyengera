const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyParser.json());


// database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cmj_entertainment_database',
    port: 3306
});

// check database connection
db.connect(err => {
    if (err) { console.log('err'); }
    console.log('database connected....');
})


// for Accounts/registration
//get all the data
app.get('/Accounts', (req, res) => {

    let qr = `select * from accounts`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all data available',
                data: result
            });
        }
    });
});

// get single data

app.get('/Accounts/:id', (req, res) => {

    let gID = req.params.id;

    let qr = `select * from accounts where ID = ${gID}`;

    db.query(qr, (err, results) => {

        if (err) {
            console.log(err);
        }
        if (results.length > 0) {
            res.send({
                Message: 'getting single data',
                data: results
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
});

// adding data
app.post('/add/Account', (req, res) => {

    let email = req.body.Email;
    let password = req.body.Password;
    let confirmPassword = req.body.ConfirmPassword;
    let allow = req.body.Allow;
    //    let file = req.body.File;

    let qr = `INSERT INTO accounts(Email, Password, ConfirmPassword, Allow)
                VALUES('${email}', '${password}', '${confirmPassword}', '${allow}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({
            message: 'data sent successfully'
        });

    });
});

// put data/ update data
app.put('/Accounts/:id', (req, res) => {

    let gID = req.params.id;
    let email = req.body.Email;
    let password = req.body.Password;
    let confirmPassword = req.body.ConfirmPassword;
    let allow = req.body.Allow;
    // let file = req.body.File;

    let qr = `update accounts set Email = '${email}', Password = '${password}',
               ConfirmPassword = '${confirmPassword}', Allow = '${Allow}', where ID = ${gID}`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});

// delete single data
app.delete('/Accounts/:id', (req, res) => {

    let qID = req.params.id;

    let qr = `delete from accounts where ID = '${qID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data delete successful'
        });
    });

});


//for Messages
//get all the data
app.get('/Message', (req, res) => {

    let qr = `select * from messages`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                data: result
            });
        }
    });
});

// get single data
app.get('/Message/:id', (req, res) => {

    let gID = req.params.id;

    let qr = `select * from messages where ID = ${gID}`;

    db.query(qr, (err, results) => {

        if (err) {
            console.log(err);
        }
        if (results.length > 0) {
            res.send({
                Message: 'getting single data',
                data: results
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
});

// adding data
app.post('/add/Message', (req, res) => {

    let email = req.body.Email;
    let name = req.body.Name;
    let message = req.body.Message;

    let qr = `INSERT INTO messages(Email, Name, Message) VALUES('${email}','${name}','${message}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({
            message: 'data sent successfully'
        });

    });
});

// put data/ update data
app.put('/Message/:id', (req, res) => {

    let gID = req.params.id;
    let email = req.body.Email;
    let name = req.body.Name;
    let message = req.body.Message;

    let qr = `update messages set Email = '${email}', Name = '${name}', Message = '${message}' where ID = ${gID}`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});


// delete single data
app.delete('/Message/:id', (req, res) => {

    let qID = req.params.id;

    let qr = `delete from messages where ID = '${qID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data delete successful'
        });
    });

});



// for phones
//get all the data
app.get('/Phones', (req, res) => {

    let qr = `select * from phones`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all data available',
                data: result
            });
        }
    });
});

// get single data
app.get('/Phones/:id', (req, res) => {

    let gID = req.params.id;

    let qr = `select * from phones where ID = ${gID}`;

    db.query(qr, (err, results) => {

        if (err) {
            console.log(err);
        }
        if (results.length > 0) {
            res.send({
                Message: 'getting single data',
                data: results
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
});

// adding data
app.post('/add/Phone', (req, res) => {

    let title = req.body.Title;
    let storage = req.body.Storage;
    let battery = req.body.Battery;
    let price = req.body.Price;
    let file = req.body.File;
    let brand = req.body.Brand;

    let qr = `INSERT INTO phones(Title, Storage, Battery, Price, File, Brand)
                VALUES('${title}','${storage}','${battery}', '${price}', '${file}', '${brand}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({
            message: 'data sent successfully'
        });

    });
});

// put data/ update data
app.put('/Phones/:id', (req, res) => {

    let gID = req.params.id;
    let title = req.body.Title;
    let storage = req.body.Storage;
    let battery = req.body.Battery;
    let price = req.body.Price;
    let file = req.body.File;
    let brand = req.body.Brand;

    let qr = `update phones set Title = '${title}', Storage = '${storage}', Battery = '${battery}',
                Price = '${Price}', File = '${file}', Brand = '${brand}'  where id = ${gID}`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});

// delete single data
app.delete('/Phones/:id', (req, res) => {

    let qID = req.params.id;

    let qr = `delete from phones where ID = '${qID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data delete successful'
        });
    });

});


// for computers
//get all the data

app.get('/Computers', (req, res) => {

    let qr = `select * from computers`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all data available',
                data: result
            });
        }
    });
});

// get single data
app.get('/Computers/:id', (req, res) => {

    let gID = req.params.id;

    let qr = `select * from computers where ID = ${gID}`;

    db.query(qr, (err, results) => {

        if (err) {
            console.log(err);
        }
        if (results.length > 0) {
            res.send({
                Message: 'getting single data',
                data: results
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
});

// adding data
app.post('/add/Computer', (req, res) => {

    let title = req.body.Title;
    let category = req.body.Category;
    let price = req.body.Price;
    let file = req.body.File;

    let qr = `INSERT INTO computers(Title, Category, Price, File)
                VALUES('${title}', '${category}', '${price}', '${file}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({
            message: 'data sent successfully'
        });

    });
});

// put data/ update data
app.put('/Computers/:id', (req, res) => {

    let gID = req.params.id;
    let title = req.body.Title;
    let category = req.body.Category;
    let price = req.body.Price;
    let file = req.body.File;

    let qr = `update phones set Title = '${title}', Category = '${category}',
                Price = '${Price}', File = '${file}' where ID = ${gID}`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});

// delete single data
app.delete('/Computers/:id', (req, res) => {

    let qID = req.params.id;

    let qr = `delete from computers where ID = '${qID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data delete successful'
        });
    });

});


// for orders
//get all the data
app.get('/Orders', (req, res) => {

    let qr = `select * from orders`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all data available',
                data: result
            });
        }
    });
});

// get single data
app.get('/Orders/:id', (req, res) => {

    let gID = req.params.id;

    let qr = `select * from orders where ID = ${gID}`;

    db.query(qr, (err, results) => {

        if (err) {
            console.log(err);
        }
        if (results.length > 0) {
            res.send({
                Message: 'getting single data',
                data: results
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
});

// adding data
app.post('/add/Orders', (req, res) => {

    let title = req.body.Title;
    let messages = req.body.Message;
    let storage = req.body.Storage;
    let battery = req.body.Battery;
    let price = req.body.Price;
    let file = req.body.File;
    let category = req.body.Category;
    let customerName = req.body.CustomerName;
    let email = req.body.Email;

    let qr = `INSERT INTO orders(Title, Message, Storage, Battery, Price, File, Category, CustomerName, email)
                VALUES('${title}', '${messages}','${storage}','${battery}', '${price}', '${file}', '${brand}',
                '${customerName}', '${email}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({
            message: 'data sent successfully'
        });

    });
});

// put data/ update data
app.put('/Orders/:id', (req, res) => {

    let gID = req.params.id;
    let title = req.body.Title;
    let messages = req.body.Message;
    let storage = req.body.Storage;
    let battery = req.body.Battery;
    let price = req.body.Price;
    let file = req.body.File;
    let category = req.body.Category;
    let customerName = req.body.CustomerName;
    let email = req.body.Email;

    let qr = `update phones set Title = '${title}', Message = '${messages}', Storage = '${storage}',
                Battery = '${battery}', Price = '${Price}', File = '${file}', Category = '${category}',
                CustomerName = '${customerName}', Email = '${email}' where ID = ${gID}`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});

// delete single data
app.delete('/Orders/:id', (req, res) => {

    let qID = req.params.id;

    let qr = `delete from orders where ID = '${qID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data delete successful'
        });
    });

});


// for Uploaded images
//get all the data
app.get('/Upload', (req, res) => {

    let qr = `select * from uploads`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all data available',
                data: result
            });
        }
    });
});

// get single data
app.get('/Upload/:id', (req, res) => {

    let gID = req.params.id;

    let qr = `select * from uploads where ID = ${gID}`;

    db.query(qr, (err, results) => {

        if (err) {
            console.log(err);
        }
        if (results.length > 0) {
            res.send({
                Message: 'getting single data',
                data: results
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
});

// adding data
app.post('/add/files', (req, res) => {

    console.log(req.body, 'data added');

    let title = req.body.Title;
    let file = req.body.File;

    let qr = `INSERT INTO uploads(Title, File)
                VALUES('${title}', '${file}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({
            message: 'data sent successfully'
        });

    });
});

// put data/ update data
app.put('/Upload/:id', (req, res) => {

    let gID = req.params.id;
    let title = req.body.Title;
    let file = req.body.File;

    let qr = `update phones set Title = '${title}', File = '${file}' where ID = ${gID}`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});

// delete single data
app.delete('/Upload/:id', (req, res) => {

    let qID = req.params.id;

    let qr = `delete from uploads where ID = '${qID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data delete successful'
        });
    });

});



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});