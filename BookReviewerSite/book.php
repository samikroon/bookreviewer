<?php include("header.php"); ?>
<link rel="stylesheet" type="text/css" href="./overview_style.css" >


<div class="col-md-3">


	<div class="book-column well" style="margin-top: 50px;">
		
	</div>
</div>

<div class="col-md-9">

	
	<div class="well" style="margin-top: 50px;">
			
		<table id="myTable" class="table table-striped">
			<thead>
				<tr>
					<th>Information</th>
					<th id="removeBookButton"></th>
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
					<td id="description" style="white-space: pre-wrap;"></td>
				</tr>

			</tbody>
		</table>
	</div>
	
	
</div>

<div class="col-md-3">
	
</div>





<div class="col-md-9">

	<div class="well">
		<form>
			<label for="ratingbook" class="control-label">Rate Book</label>
			<input id="ratingbook" name="ratingbook" value="3" class="rating-loading">
			
		</form>
		<button class="btn btn-primary" onclick="sendRating();">Submit</button>
	</div>
	


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

var bookISBN = "<?php print($_GET["isbn"]) ?>";


</script>



</body>

</html>




