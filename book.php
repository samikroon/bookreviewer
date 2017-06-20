<?php include("header.php"); ?>
<link rel="stylesheet" type="text/css" href="./overview_style.css" >

<?php
$isbn = ($_GET["isbn"])
?>
<script>
$.get( "http://37.97.227.173:5000/books/isbn/<?php print($_GET["isbn"]) ?>", function( data ) {
			console.log(data)
		});
</script>

</body>
</html>