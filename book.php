<?php include("header.php"); ?>
<link rel="stylesheet" type="text/css" href="./overview_style.css" >


<div class="col-md-3">
	<div class="well" style="height=100%">
	
	</div>

	<div class="book-column well">
		
	</div>
</div>

<div class="col-md-9">

	<div class="well">
		 
	</div>
	
	<div class="well">
			
		<table id="myTable" class="table table-striped">
			<thead>
				<tr>
					<th>Information</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Title</td>
					<td id="title"></td>
				</tr>
				<tr>
					<td>Author</td>
					<td id="author"></td>
				</tr>
				<tr>
					<td>ISBN</td>
					<td id="isbn"></td>
				</tr>
				<tr>
					<td>Language</td>
					<td id="language"></td>
				</tr>
				<tr>
					<td>Pages</td>
					<td id="pages"></td>
				</tr>
				<tr>
					<td>Publication Date</td>
					<td id="pubDate"></td>
				</tr>
				<tr>
					<td>Publisher</td>
					<td id="publisher"></td>
				</tr>
				<tr>
					<td># Rated</td>
					<td id="rateCount"></td>
				</tr>
				<tr>
					<td>Rating</td>
					<td id="rating"></td>
				</tr>
				<tr>
					<td>Description</td>
					<td id="description"></td>
				</tr>

			</tbody>
		</table>
	</div>
	
	
</div>

<div class="col-md-3">
	
</div>

<div class="col-md-9">
	<div class="well">
		<table id="reviewTable" class="table table-striped">
			<thead>
				<tr>
					<th>Reviews</th>
					<th><button type="button" class="btn btn-success btn-block" data-toggle="modal" data-target="#addReviewModal">Write review</button></th>
					
					
				</tr>
			</thead>
			
			<tbody id="reviewTableBody">
				
			</tbody>
			
		</table>
	</div>
	
</div>

<script>
$.get( "http://37.97.227.173:5000/books/isbn/<?php print($_GET["isbn"]) ?>", function( data ) {
			var book = data.results;
			
			$( ".book-column" ).append("<div class=\"book-image\" id =\"foto\"><img src=\""+book.photoPath+"\" class=\"book-image\"></div>")
			$("#myTable #title").append(book.title);
			$("#myTable #author").append(book.author);
			$("#myTable #ISBN").append(book.isbn);
			$("#myTable #language").append(book.language);
			$("#myTable #pages").append(book.pages);
			$("#myTable #pubDate").append(book.pubDate);
			$("#myTable #publisher").append(book.publisher);
			$("#myTable #rateCount").append(book.rateCount);
			$("#myTable #rating").append(book.rating);
			$("#myTable #description").append(book.description);
		});
		
$.get("http://37.97.227.173:5000/review/by_user/samikroon", function( data ){
	console.log(data);
})
		
$.get( "http://37.97.227.173:5000/review/by_isbn/<?php print($_GET["isbn"]) ?>", function( data ) {
						
			for (var x in data)
				console.log(x)
		});
</script>

</body>
</html>




