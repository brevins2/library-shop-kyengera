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
      if(err){ console.log('err'); }
        console.log('database connected....');
})


//for Messages
//get all the data

app.get('/Message', (req, res) =>{

    let qr = `select * from messages`;

    db.query(qr, (err, result) =>{
        if(err)
        {
            console.log(err, 'errs');
        }
        if(result.length > 0)
        {
            res.send({
                message: 'all data available',
                data: result
            });
        }
    });
});

// get single data

app.get('/Message/:id', (req, res) =>{

    let gID = req.params.id;

    let qr =`select * from messages where id = ${gID}`;

    db.query(qr, (err, results) =>{

        if(err)
        {
            console.log(err);
        }
        if(results.length > 0)
        {
            res.send({
                Message: 'getting single data',
                data: results
            });
        }
        else{
            res.send({
                message: 'data not found'
            });
        }
    });
});

// adding data

app.post('/add/Message', (req, res) =>{

    console.log(req.body ,'data added');

    let email = req.body.email;
    let name = req.body.name;
    let message = req.body.message;

    let qr = `INSERT INTO messages(email, name, message) VALUES('${email}','${name}','${message}')`;

    db.query(qr, (err, result) =>{

        if(err){ console.log(err); }

           res.send({
               message: 'data sent successfully'
           });

    });
});

// put data/ update data

app.put('/update/Message/:id', (req, res) =>{

    console.log(req.body ,'data updated');

    let gID = req.params.id;
    let email = req.body.email;
    let name = req.body.name;
    let message = req.body.message;

    let qr = `update messages set email = '${email}', name = '${name}', message = '${message}' where id = ${gID}`;

    db.query(qr, (err, result) =>{
        if(err) { console.log(err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});


// delete single data

app.delete('/delete/Message/:id', (req, res) =>{

    let qID = req.params.id;

    let qr = `delete from messages where id = '${qID}'`;

    db.query(qr, (err, result) =>{
        if(err) { console.log(err); }

        res.send({
            message: 'data delete successful'
        });
    });

});



// for phones
//get all the data

app.get('/Phones', (req, res) =>{

    let qr = `select * from phones`;

    db.query(qr, (err, result) =>{
        if(err)
        {
            console.log(err, 'errs');
        }
        if(result.length > 0)
        {
            res.send({
                message: 'all data available',
                data: result
            });
        }
    });
});

// get single data

app.get('/Phones/:id', (req, res) =>{

    let gID = req.params.id;

    let qr =`select * from phones where id = ${gID}`;

    db.query(qr, (err, results) =>{

        if(err)
        {
            console.log(err);
        }
        if(results.length > 0)
        {
            res.send({
                Message: 'getting single data',
                data: results
            });
        }
        else{
            res.send({
                message: 'data not found'
            });
        }
    });
});

// adding data

app.post('/add/Phone', (req, res) =>{

    console.log(req.body ,'data added');

    let email = req.body.email;
    let name = req.body.name;
    let message = req.body.message;

    let qr = `INSERT INTO phones(email, name, message) VALUES('${email}','${name}','${message}')`;

    db.query(qr, (err, result) =>{

        if(err){ console.log(err); }

           res.send({
               message: 'data sent successfully'
           });

    });
});

// put data/ update data

app.put('/update/Phones/:id', (req, res) =>{

    console.log(req.body ,'data updated');

    let gID = req.params.id;
    let email = req.body.email;
    let name = req.body.name;
    let message = req.body.message;

    let qr = `update phones set email = '${email}', name = '${name}', message = '${message}' where id = ${gID}`;

    db.query(qr, (err, result) =>{
        if(err) { console.log(err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});


// delete single data

app.delete('/delete/Phones/:id', (req, res) =>{

    let qID = req.params.id;

    let qr = `delete from phones where id = '${qID}'`;

    db.query(qr, (err, result) =>{
        if(err) { console.log(err); }

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
