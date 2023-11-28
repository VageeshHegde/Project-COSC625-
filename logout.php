<?php

// Start the session
session_start();

// Logout logic
if (isset($_GET['logout'])) {
    // Unset all session variables
    $_SESSION = array();

    // Destroy the session
    session_destroy();

    // Redirect to login page
    header("Location: login.html");
    exit();
}

?>

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="sportsStat.css">
</head>
<body>
<header>
    <div class="navbar1">
        <a href="">Help</a>
        <?php if (isset($_SESSION['email'])) : ?>
            <a href="logout.php?logout"><?php if (isset($_SESSION['email'])) {echo " {$_SESSION['email']}  "; } ?> -Logout</a>
        <?php else : ?>
            <a href="login.html">Login</a>
            <a href="login.html">Create Account</a>
        <?php endif; ?>
    </div>
    <div class="navbar2">
        <p>ScoreInsights.com</p>
        <form>
            <input type="text" placeholder="Search">
            <button type="submit">Search</button>
        </form>
    </div>
    <div class="navbar3">
        <a href="Home.php">NBA</a>
        <a href="Home.php">Home</a>
        <a href="#home">About Us</a>
        <a href="#leaders">Leaders</a>
        <a href="#seasons">Seasons</a>
        <a href="#games">Games</a>
        <a href="#teams">Teams</a>
        <a href="#players">Players</a>
        <a href="News.php">News</a>
    </div>
</header>
</body>
</html>
