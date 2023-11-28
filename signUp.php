<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();
session_regenerate_id();

// Database connection
$servername = "localhost";
$username = "root";
$password = "Hegde@123456";
$dbname = "COSC625";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $enteredUsername = $_POST['email'];
    $enteredPassword = $_POST['password'];

    // Additional debugging - Output entered credentials
    echo "Entered Username: $enteredUsername<br>";
    echo "Entered Password: $enteredPassword<br>";

    // SQL query to retrieve user from the database
    $stmt = $conn->prepare("SELECT * FROM login WHERE Email = ?");
    $stmt->bind_param("s", $enteredUsername);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    // Additional debugging - Output retrieved user data
    echo "Retrieved User: " . print_r($user, true) . "<br>";

    // // Check if the user exists and the password is correct
    // if ($user && password_verify($enteredPassword, $user['Password'])) {
    //     $_SESSION['user_id'] = $user['customerId']; // Assuming you have an 'id' column
    //     header("Location: Home.php");
    //     exit();
    // } else {
    //     $error = "Invalid username or password";
    // }

    if ($user && password_verify(trim($enteredPassword), $user['Password'])) {
        // Login successful
        // Set session variables or perform any other necessary actions
        $_SESSION['user_id'] = $user['customerId']; // Assuming you have an 'id' column
        header("Location: Home.php");
        exit(); // Make sure to exit after a header redirect
    } else {
        $error = "Invalid username or password";
    }
    

 
    
}
