<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <link rel="stylesheet" type="text/css" href="home.css">
    <link rel="stylesheet" type="text/css" href="Squiz.css">
    <style>
        .popup {
            display: none;
            position: fixed;
            width: 100%;
            max-width: 850px;
            height: 500px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 15px;
            background-color: #fff;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
            animation-name: modalSlideUp;
            animation-duration: 1s;
        }


        .quiz-popUp{
            display: none;
            position: fixed;
            width: 100%;
            max-width: 850px;
            height: 300px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 15px;
            background-color: #fff;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

        }

        .container{
            display: flex;
        }

.login{
    width: 400px;
    margin: 20px;
}

.contactUS form{
    width: 250px;
    margin: 20px auto;
}

.container h2{
    margin: 20px;
    text-align: center;
    align: center;
    font-weight: bolder;
    text-transform: uppercase;
}

hr{
    border-top: 2px solid rgba(236, 166, 30, 1);
}

.pic img{
    width: 450px;
    height: 400px;
    border-radius: 15px;
    margin: 20px;
    margin-bottom: 20px;
}

.contactUS label{
    display: block;
    font-size: 16px;
    font-weight: 600;
    padding: 5px;
    margin-left: 20px;
}

.contactUS input, textarea{
    width: 100%;
    margin: 2px;
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid gray;
}

.send button:hover{
    background: rgba(236, 166, 30, 1);
}

.close {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 30px;
    cursor: pointer;
}

#quiz-container {
    max-width: 600px;
    margin: auto;
    text-align: center;
    padding: 20px;
}

#question-container {
    margin-bottom: 20px;
}

#options-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}

.option-btn {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

@keyframes modalSlideUp {
    0% {
        transform: translateY(50%);
        transform: translateX(50%);
    }
    100% {
        transform: translateY(0);
    }
}

    </style>
</head>
<body>
    <?php include 'logout.php'; ?>
    <?//php print_r($_SESSION['email']); ?>
    <video width="100%" height="540" loop autoplay muted controls>
        <source src="video1.mp4" type="video/mp4">
    </video>

<div class="container">
<div class="content-area">
    <div class="main-area" style="float:left;">
    <h2>Welcome <?php if (isset($_SESSION['email'])) {echo " {$_SESSION['email']} "; } ?> to Our Website</h2>
    <p>Get ready to dive into the exciting world of basketball statistics! Whether you're a die-hard fan or just getting started, our website is the perfect place to enhance your basketball knowledge. We are here to provide you with all the information you need. 
        From player statistics to game analysis, we've got you covered. Don't worry if you're not a pro at understanding complex stats – we break it down in a way that anyone can understand. We're all about making basketball analytics accessible to everyone!
        Feel free to explore our website and discover the fascinating world of basketball statistics. With our user-friendly interface and comprehensive data, you'll become a basketball stats guru in no time!</p>
    <br>
        <p>Get all the latest basketball stats and information on your favorite NBA teams, players, and games. Stay up to date with the NBA standings, 
        individual player stats, team stats, game results, and upcoming schedules. Join us and explore the exciting world of basketball!</p>

          <!-- Button to open the contact form -->
    <button id="openContactFormBtn" style="border: none;
    outline: none;
    padding: 8px;
    width: 270px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;
    background: rgba(53, 12, 12, 1)">Contact Us</button>
    <br>
    <button id="openSquiz" style="border: none;
    outline: none;
    padding: 8px;
    width: 270px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;
    background: rgba(53, 12, 12, 1)">Would you like to take the NBA quiz?</button>
    </div>
        <div class="sidebar">
        <img style="float:right; height: 480px; width: 380px;" src="bballPlayer.jpg" alt="call">
        </div>
</div>
</div>
<br>
    
    <!-- The contact form popup -->
    <div id="contactFormPopup" class="popup">
        <div class="container">
        <div class="login">
        <h2>Get in Touch</h2>
        <span class="close" id="closeContactFormBtn">&times;</span>
            <form class="contactUS" action="contactus.php" method="post">
                <hr>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
                <label>Email</label>
                <input type="text" placeholder="abc@exampl.com" name="mail" required>
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                <br>
                <button class="send" style="border: none;
    outline: none;
    padding: 8px;
    width: 270px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;
    background: rgba(236, 166, 30, 1);">Send</button>
            </form>
        </div>
        <div class="pic">
            <img src="logo.png" alt="some image">
        </div>
        </div>
    </div>

<div id="quiz-popUp" class="quiz-popUp">
    <div id="quiz-container">
        <span class="close" id="closeSquiz">&times;</span>
        <div id="question-container">
        <!-- Question and options will be dynamically added here -->
        </div>
        <div id="options-container">
        <!-- Options will be dynamically added here -->
        </div>
        <br>
        <button id="next-btn" onclick="nextQuestion()">Next</button>
    </div>
</div>

    <script src="contactUS.js"></script>
    <script src="Squiz.js"></script>
    <div>
    <?php include 'footer.php'; ?>
</div>
</body>
</html>