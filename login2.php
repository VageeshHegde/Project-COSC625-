<?php
session_start(); // Start the session

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $DBConnect = mysqli_connect("127.0.0.1", "root", "Hegde@123456", "COSC625");

    if ($DBConnect === false) {
        die("Unable to connect to the database, error number: " . mysqli_errno());
    } else {
        $TableName = "loginpro";
        $email = mysqli_real_escape_string($DBConnect, $_POST['email']);
        $password = mysqli_real_escape_string($DBConnect, $_POST['password']);

        $SQLString = "SELECT * FROM $TableName WHERE Email = '$email' AND Password = '$password'";
        $QueryResult = mysqli_query($DBConnect, $SQLString);

        if ($QueryResult === false) {
            die("Error executing query: " . mysqli_error($DBConnect));
        } else {
            if (mysqli_num_rows($QueryResult) > 0) {
                // Record found, set session variable
                $_SESSION['email'] = $email;

                header("Location: Home.php");
                exit();

                // Display user data
                print "Here is a list of your data";
                print "<table width ='100%' border='1'>";
                print "<tr><th>ID</th><th>Name</th><th>Email</th>";

                while ($Row = mysqli_fetch_assoc($QueryResult)) {
                    print "<tr><td>{$Row['customerId']}</td><td>{$Row['Name']}</td><td>{$Row['Email']}</td>";
                }

                print "</table>";
            } else {
                print "Invalid Email or Password!";
            }

            mysqli_free_result($QueryResult);
        }

        mysqli_close($DBConnect);
    }
}
?>

<html>
<head>
    <title>Record Removed</title>
    <meta http-equiv="content-type" content="text/html; charset=iso-8859-1"/>
</head>
<body>

<h1>Shakti Gym Town</h1>
<h2>Your Record</h2>

<br>
<h2>Give your Feedback</h2>
<textarea rows=6 cols=90>Hi there!</textarea>

</body>
</html>
