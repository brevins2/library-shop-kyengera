<?php
    $host = "localhost";
    $user = "root";
    $password = "";
    $dbName = "cmj_entertainment";

    $conn = Mysqli_connect($host, $user, $password, $dbName);

    if($conn){
        $table = "SELECT * FROM accounts";
        $query_Table = Mysqli_query($conn, $table);

        if($query_Table){
            echo "well done";
        }
        else {
            echo "error occurred";
        }

        $loginForm = $_POST['loginForm'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirmpassword = $_POST['confirmpassword'];
        $file = $_POST['file'];

        $query = "INSERT INTO accounts VALUES ('emil')";
    }

    else{
        echo"error occurred";
    }
?>