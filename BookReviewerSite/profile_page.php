
<?php include("header.php"); ?>
<link rel="stylesheet" type="text/css" href="./admin_panel_style.css" >


<h1 style="font-family:Comic Sans Ms;text-align="center";font-size:20pt;
color:#00FF00;>
</h1>

<div class="row">
	<div class="col-md-8">
		<form enctype="multipart/form-data" class="form-horizontal" id="profileForm">
			
			<div class="form-group">
				<label class="control-label col-sm-2" for="usernamepf">Username:</label>
				<div class="col-sm-5">
					<input type="text" class="form-control" id="usernamepf" disabled>
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="emailpf">Email:</label>
				<div class="col-sm-5">
					<input type="text" class="form-control" id="emailpf" name="email">
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="fnamepf">First name:</label>
				<div class="col-sm-5">
					<input type="text" class="form-control" id="fnamepf" name="fname">
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="lnamepf">Last name:</label>
				<div class="col-sm-5">
					<input type="text" class="form-control" id="lnamepf" name="lname">
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="agepf">Age::</label>
				<div class="col-sm-5">
					<input type="text" class="form-control" id="agepf" name="age">
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="genderpf">Gender:</label>
				<div class="col-sm-5">
					<input type="radio" id = "genderpf" value="male" name="gender"> Male
	  				<input type="radio" id = "genderpf" value="female" name="gender"> Female
				</div>
			</div>
			<div class="form-group">
				<label class="control-label col-sm-2" for="submitChanges"></label>
				<div class="col-sm-5">
					<a href="#" class="btn btn-default" id="submitThings" onclick="submitChanges();" for="changePF"> Submit changes </a>
					<a href="#" class="btn btn-default" id="changePF" data-toggle="modal" data-target="#uploadpp"> Change profile picture </a>
					<a href="#" class="btn btn-default" id="changePswd" onclick="changePassword();"> Change password </a>
				</div>
			</div>
		</form>
	</div>
	<div class="col-md-4">
		<img id="profilePicture" height="300" width="200">
	</div>
</div>

<div class="row" style="height: 300px;">
	<div class="col-sm-8">
		<h1>Reviews</h1>
		<table class="table table-hover">
			<thead>
				<th>Title</th>
				<th>Book</th>
				<th>ISBN</th>
			</thead>
			<tbody id="profileReviews">
				
			</tbody>
		</table>		
	</div>
</div>




<script>
	
</script>


</body>
</html>