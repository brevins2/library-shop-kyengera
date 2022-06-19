<?php
    $host = "localhost";
    $user = "root";
    $password = "";
    $dbName = "cmj_entertainment";

    $conn = Mysqli_connect($host, $user, $password, $dbName);

    if($conn){

        
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