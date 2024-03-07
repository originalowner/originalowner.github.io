<?php

// connect to the database
$db = mysqli_connect('localhost', 'root', 'Admin@123', 'registration');

// Check if the connection was successful
if (!$db) {
    // If connection failed, print an error message
    die("Connection failed: " . mysqli_connect_error());
} else {
    // If connection succeeded, print a success message or other relevant information
    echo "Connected successfully!";
}
