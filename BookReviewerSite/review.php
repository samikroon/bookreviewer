<?php include("header.php"); ?>

<link rel="stylesheet" type="text/css" href="./overview_style.css" >



<div class="row">

	<div class="col-md-3">

		<div class="book-column well" style="margin-top: 50px; height: 100%;">
			
		</div>
	</div>

	<div class="col-md-9">
		
		<div class="well" style="margin-top: 50px;">
			<table id="review_content" class="table table-striped">
				<thead>
					<tr>
						<th><b>Review</b></th>
						<th> </th>
					</tr>
					
				</thead>
				<tbody>
					<tr>
						<td><i>Title:</i></td>
						<td id="title"></td>
					</tr>
					<tr>
						<td><i>Author:</i></td>
						<td id="author"></td>
					</tr>
					<tr>
						<td><i>Rating:</i></td>
						<td>
							<input id="ratingScore" name="ratingScore" class="rating-loading">
						</td>
					</tr>
					<tr>
						<td><i>Content:</i></td>
						<td id="reviewContent" style="white-space: pre-wrap;"></td>
					</tr>
					<tr>
						
					</tr>
				</tbody>
			</table>
			
		</div>



		<div class="well rating-well">
			<form>
				<label for="ratingreview" class="control-label">Rate Review</label>
				<input id="ratingreview" name="ratingbook" value="3" class="rating-loading">
				
			</form>
			<button class="btn btn-primary" onclick="sendRatingReview();">Submit</button>
		</div>
		
		<div class="well comment-well">
			<div class="modal-body">
				<form enctype="multipart/form-data", id="submitNewComment">
					<table>
						<tr>
							<th>
								Comment:
							</th>
						</tr>
						<tr>
							<td><p><textarea id="commentContent" name="content" rows="8" cols="50"></textarea></p></td>
							
						</tr>
					</table>
					<input id ="commentAdder" type='hidden' name='commentOnReview' value='<?php print($_GET["reviewid"]) ?>'>
					<button type="button" class="btn btn-default" onclick='addComment();'>Submit Comment</button>
				</form>
			</div>
		</div>

		<table class="table table-striped well" id="commentTable">
			<tr>
				<th>
					Author:
				</th>
				<th>
					Comment:
				</th>
				<th>
					Posted:
				</th>
			</tr>

		</table>
		
	</div>
	
</div>







<script>

var reviewISBN = "<?php print($_GET["isbn"]) ?>";
var reviewID = "<?php print($_GET["reviewid"]) ?>";

	

</script>

</body>
</html>
