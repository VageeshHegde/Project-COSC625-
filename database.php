<?php

$servername = "localhost";
$username = "root";
$password = "Hegde@123456";
$dbname = "COSC625";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Uncomment the following line if you want to see a success message
echo "Connected successfully";

// Don't forget to close the connection when you are done
 $conn->close();

?>
