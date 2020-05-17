<?php

if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $message=$_POST['message'];

    $to='dhiru199706@gmail.com';
    $subject='Form Submission';
    $message="Name: ".$name."\n". "Wrote the message: "."\n\n".$message;
    $headers="From: ".$email;

    if(mail($to, $subject, $message, $headers)){
        echo "<h1>sent Succesfully"." ".$name."</h1>";
    }
    else{
        echo "<h1>something went wrong</h1>";
    }

}

?>