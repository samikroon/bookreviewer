<html>
	<head>
		<?php
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
		header("Access-Control-Allow-Headers: X-Requested-With"); 
		?>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="./header_style.css" >
		
		
		<title>
		</title>
	</head>
		<body>
			<header>
			</header>
			<?php include("modals.php"); ?>
			

			<nav>
				<ul>
					<li><a class="navA" href="index.php">Home</a></li>
					<li><a class="navA" href="books.php">Books</a></li>
					
					<li id="logoutListing" style="float:right">
					<li id="adminListing" style="float:right">
					<li id="loginListing" style="float:right"></li>
					<li id="registerListing" style="float:right"></li>
					<li id="profileListing" style="float:right"></li>
					<li id="addBookListing" style="float:right"></li>
				</ul>
			</nav>
			<script src="/scripts.js"></script>
			
	
			

