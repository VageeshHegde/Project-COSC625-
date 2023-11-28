<html>
<head>
<title>Stored Names</title>
</head>
<body>
<h1>Sports Statistics.php</h1>
<h2>Accepted data from input page and stored into DB.</h2>
<?php
if(empty($_POST['name'])||empty($_POST['email'])||empty($_POST['password']))
		print"You must enter all of the information";
	else
	{
		//WE DO NOT inlcude our DBD connection information in the file like this
		//establish a commenction to the database
		$DBConnect = mysqli_connect("127.0.0.1","root","Hegde@123456","cosc625");
		
		if($DBConnect === false)
			print"Unable to connection to the database, error number:".mysqli_errno();
			else{
				
			
				//you could and should make sure that there is a DBName called your name
				//create the code to say what table we are going to use
				$TableName = "loginpro";
				//now it is time to get the information from the $_POST array
				
				$name = stripslashes($_POST['name']);
				$email = stripslashes($_POST['email']);
				$password = stripslashes($_POST['password']);
				
				//now it is time to crate the SQL statement
				$SQLstring = "insert into $TableName(Name, Email, Password) values ('$name','$email','$password')";
				
				//this is the line of code that executes our SQL statement
				//$QueryResult =mysqli_query($SQLstring,$DBConnect);
				if(mysqli_query($DBConnect,$SQLstring))
					print"New Record Created";
				else
					print"Error: " . $$SQLstring . "<br>" . mysqli_error($DBConnect);
				
			}//end inner else DB connect
			mysqli_close($DBConnect);
		
	}//end outter have everything

?>
<div><a href="login.html">login Page</a></div>
</body>
</html>