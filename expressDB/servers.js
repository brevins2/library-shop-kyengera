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
    database: 'cmj_entertainment_db',
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

    let qr = `INSERT INTO accounts(Email, Password, ConfirmPassword, Allow)
                VALUES('${email}', '${password}', '${confirmPassword}', '${allow}')`;

    if(password === confirmPassword) {
        db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        else res.send({
            message: 'data sent successfully'
        });

        });
    }
    else {
        console.warn('password and confirm password must be the same');
    }
});

// put data/ update data
app.put('/Accounts/:id', (req, res) => {

    let gID = req.params.id;
    let email = req.body.Email;
    let password = req.body.Password;
    let confirmPassword = req.body.ConfirmPassword;
    let allow = req.body.Allow;

    let qr = `update accounts set Email = '${email}', Password = '${password}',
               ConfirmPassword = '${confirmPassword}', Allow = '${allow}' where ID = '${gID}'`;

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
    let file1 = req.body.File1;
    let file2 = req.body.File2;
    let file3 = req.body.File3;
    let brand = req.body.Brand;

    let qr = `INSERT INTO phones(Title, Storage, Battery, Price, File1, File2, File3, Brand)
                VALUES('${title}','${storage}','${battery}', '${price}', '${file1}', '${file2}', '${file3}', '${brand}')`;

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
    let file1 = req.body.File1;
    let file2 = req.body.File2;
    let file3 = req.body.File3;
    let brand = req.body.Brand;

    let qr = `update phones set Title = '${title}', Storage = '${storage}', Battery = '${battery}',
                Price = '${price}', File1 = '${file1}', File2 = '${file2}', File3 = '${file3}', Brand = '${brand}'  where id = ${gID}`;

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
    let file1 = req.body.File1;
    let file2 = req.body.File2;
    let file3 = req.body.File3;

    let qr = `INSERT INTO computers(Title, Category, Price, File1, File2, File3)
                VALUES('${title}', '${category}', '${price}', '${file1}', '${file2}', '${file3}')`;

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
    let file1 = req.body.File1;
    let file2 = req.body.File2;
    let file3 = req.body.File3;

    let qr = `update computers set Title = '${title}', Category = '${category}',
                Price = '${price}', File1 = '${file1}', File2 = '${file2}', File3 = '${file3}' where ID = ${gID}`;

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
    let message = req.body.Message;
    let storage = req.body.Storage;
    let battery = req.body.Battery;
    let price = req.body.Price;
    let file = req.body.File;
    let category = req.body.Category;
    let customerName = req.body.CustomerName;
    let email = req.body.Email;

    let qr = `INSERT INTO orders(Title, Message, Storage, Battery, Price, File, Category, CustomerName, Email)
                VALUES('${title}', '${message}', '${storage}', '${battery}', '${price}', '${file}', '${category}',
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

    let qr = `update orders set Title = '${title}', Message = '${messages}', Storage = '${storage}',
                Battery = '${battery}', Price = '${price}', File = '${file}', Category = '${category}',
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


// for images
// adding image
app.post('/add/Image', (req, res) => {

    console.log(req.body, 'data added');

    let name = req.body.Name;
    let url = req.body.URL;

    let qr = `INSERT INTO images(Name, URL)
                VALUES('${name}', '${url}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({
            message: 'data stored successfully',
            data: result
        });

    });
});

//get all the Image
app.get('/files', (req, res) => {

    let qr = `select * from images`;

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
app.get('/files/:id', (req, res) => {

    let gID = req.params.id;

    let qr = `select * from images where ID = '${gID}'`;

    db.query(qr, (err, result) => {

        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                Message: 'getting single data',
                data: result
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
});

// put data/ update data
app.put('/files/:id', (req, res) => {

    console.log(req.body, 'data updated');

    let gID = req.params.id;
    let name = req.body.Name;
    let url = req.body.URL;

    let qr = `update user set Name = '${name}', URL = '${url}' where ID = '${gID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});

// delete single data
app.delete('/files/:id', (req, res) => {

    let gID = req.params.id;

    let qr = `delete from user where ID = '${gID}'`

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