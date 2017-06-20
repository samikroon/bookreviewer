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
		<div class="book-column col-md-4" id="foto">
			
		</div>
		<div class="book-column col-md-4">test</div>
		<div class="book-column col-md-4">test</div>
		<div class="book-column col-md-4">test</div>
		<div class="book-column col-md-4">test</div>
		<div class="book-column col-md-4">test</div>
		<div class="book-column col-md-4">test</div>
	</div>

	
</div>
<script>
	$(window).on('load', function loadFoto() {
		var img = new Image();
		alert("jemoeder");
		$.ajax({
				type: "get",
				url: "http://37.97.227.173:5000/download",
				headers: {
					'path' : '/home/samikroon/photoLibrary/hermanKoch.jpg'
				},
				dataType: "file",
				success: function(data) {
					$('#foto').prepend('<img id=\"defoto\" src=\"'+data+'\" />"');

				}
			});
	});
</script>

</body>
</html>