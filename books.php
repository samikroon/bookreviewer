<?php include("header.php"); ?>
<link rel="stylesheet" type="text/css" href="./overview_style.css" >

<h1 style="font-family:Comic Sans Ms;text-align="center";font-size:20pt;
color:#00FF00;>
</h1>
<div class="container">
	<div class="well well-sm">
		<strong>BookListing</strong>
		
	</div>
	<div class="row">


	</div>

	
</div>

<script>
	$(window).on('load', function loadFoto() {
		$.get( "http://37.97.227.173:5000/books", function( data ) {
	
		for (var x in data.results){
			console.log(data)
			$( ".row" ).append("<div class=\"book-column col-md-4\" id =\"foto\"><a href=\"book.php?isbn="+data.results[x].isbn+"\"><img src=\""+data.results[x].photoPath+"\" class=\"book-image\"></div>")
			
			
			
			console.log(data.results[x]);
		}

		});
	});
</script>



</body>
</html>