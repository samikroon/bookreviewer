<?php include("header.php"); ?>
<link rel="stylesheet" type="text/css" href="./overview_style.css" >

<div class="col-md-3">
	<div class="well" style="height=100%">
	
	</div>

	<div class="book-column well">
		
	</div>
</div>

<div class="col-md-9">

	<div class="well"></div>
	
	<div class="well">
		<table id="review_content" class="table table-striped">
			<thead>
				<tr>
					<th>Review</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td id="title"></td>
				</tr>
				<tr>
					<td id="author"></td>
				</tr>
				<tr>
					<td> </td>
					<td> </td>
				</tr>
				<tr>
					<td id="reviewContent"></td>
				</tr>


			</tbody>
		</table>
		
	</div>
	
	
</div>

<div class="col-md-3">
	
</div>

<script>
$.get( "http://37.97.227.173:5000/books/isbn/<?php print($_GET["isbn"]) ?>", function( data ) {
			var book = data.results;
			
			$( ".book-column" ).append("<div class=\"book-image\" id =\"foto\"><img src=\""+book.photoPath+"\" class=\"book-image\"></div>")

		});
		
		
$.get( "http://37.97.227.173:5000/review/by_id/<?php print($_GET["reviewid"]) ?>", function( data ) {
			
			for (var x in data.results){
				$( "#review_content #title" ).append(data.results[x].reviewTitle)
				$( "#review_content #author" ).append(data.results[x].reviewBy)
				$( "#review_content #reviewContent" ).append(data.results[x].content)
			}
		});
</script>

</body>
</html>
