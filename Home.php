<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <link rel="stylesheet" href="home.css" />
</head>
<body>
    <?php include 'logout.php'; ?>
    <?//php print_r($_SESSION['email']); ?>
    <div class="heading"><img src="logo.png" alt="Logo" width="90" height="90"><h1>Welcome <?php if (isset($_SESSION['email'])) {echo " {$_SESSION['email']} "; } ?>to our Sports Statistics Website</h1></div>
    <video width="100%" height="540" loop autoplay muted controls>
        <source src="video1.mp4" type="video/mp4">
    </video>
    <p>Get all the latest basketball stats and information on your favorite NBA teams, players, and games. Stay up to date with the NBA standings, 
        individual player stats, team stats, game results, and upcoming schedules. Join us and explore the exciting world of basketball!</p>
    <?php include 'footer.php'; ?>
</body>
</html>