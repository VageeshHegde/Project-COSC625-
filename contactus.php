<?php
$servername = "localhost";
$username = "root";
$password = "Hegde@123456";
$dbname = "cosc625";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Assuming $name, $email, and $message are your variables
$name = $_POST['name'];  // Update with your form field names
$email = $_POST['mail'];  // Update with your form field names
$message = $_POST['message'];  // Update with your form field names

// Retrieve Login_id based on the email
$sqlSelect = "SELECT customerId FROM loginpro WHERE email = ?";
$stmtSelect = $conn->prepare($sqlSelect);
$stmtSelect->bind_param("s", $email);
$stmtSelect->execute();
$stmtSelect->bind_result($loginId);
$stmtSelect->fetch();
$stmtSelect->close();

// Insert data into contactUS table
$sqlInsert = "INSERT INTO contactUS (Name, Email, Message, Login_id) VALUES (?, ?, ?, ?)";
$stmtInsert = $conn->prepare($sqlInsert);
$stmtInsert->bind_param("sssi", $name, $email, $message, $loginId);

if ($stmtInsert->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmtInsert->error;
}

$stmtInsert->close();
$conn->close();
?>
