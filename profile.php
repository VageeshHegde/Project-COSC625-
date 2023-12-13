<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="profile.css">
    <title>Sports Statistics - Profile</title>
</head>
<body>
    <?php include 'logout.php'; ?>
    <div class="container">
        <h1>Profile Page</h1>
        <form id="profileForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required>

            <label for="favoriteTeam">Favorite Team:</label>
            <input type="text" id="favoriteTeam" name="favoriteTeam" required>

            <label for="photo">Upload Photo:</label>
            <input type="file" id="photo" name="photo" accept="image/*">
            <div class="click">
            <button type="button" onclick="submitProfile()">Submit</button>
            </div>
        </form>

        <div id="displayProfile">
            <!-- Profile information will be displayed here -->
        </div>
    </div>
     
    <script src="profile.js"></script>
</body>
</html>
