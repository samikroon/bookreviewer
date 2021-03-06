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
		<script src="star-rating/star-rating.js"></script>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></script>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="./header_style.css" >
		<link href="./star-rating/star-rating.css" media="all" rel="stylesheet" type="text/css" />
		
		
		<title>
		</title>
	</head>
		<body>
			<header>
					<a href="index.php" style="height:100%;width:100%"><div style="height:100%;width:100%"></div></a>
			</header>
			<?php include("modals.php"); ?>
			

			<nav>
				<ul>
					<li><a class="navA" href="index.php">Home</a></li>
					<li><a class="navA" href="books.php">Books</a></li>
					<li id="publicProfilesListing"></li>
					<li>
						<div class="search">
							<input type="text" placeholder="Search book" id="query">
						<button class="btn btn-default" type="submit" id="searchButton"><i class="glyphicon glyphicon-search"></i></button>
						</div>
						
						
					</li>
					
					<li id="logoutListing" style="float:right"></li>
					<li id="adminListing" style="float:right"></li>
					<li id="loginListing" style="float:right"></li>
					<li id="registerListing" style="float:right"></li>
					<li id="profileListing" style="float:right"></li>
					<li id="addBookListing" style="float:right"></li>
				</ul>
			</nav>
			<script src="/scripts.js"></script>
			
	
			

