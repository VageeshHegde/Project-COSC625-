<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>News</title>
    <link rel="stylesheet" type="text/css" href="news.css">
</head>
<body>
    <?php include 'logout.php'; ?>
    <h1>News <?php if (isset($_SESSION['email'])) {echo " {$_SESSION['email']} "; } ?></h1>
    <div class="newsframe">
        <iframe
        src="https://rss.app/embed/v1/wall/tywNsW1rmFujWEJD"
        frameborder="0"
        ></iframe>
    </div>
    <?php include 'footer.php'; ?>
</body>
</html>