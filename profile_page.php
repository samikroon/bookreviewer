
<?php include("header.php"); ?>
<link rel="stylesheet" type="text/css" href="./admin_panel_style.css" >


<h1 style="font-family:Comic Sans Ms;text-align="center";font-size:20pt;
color:#00FF00;>
</h1>

<div class="row">
	
</div>
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
				<a href="#" class="btn btn-default" id="submitThings" onclick="submitChanges();"> Submit changes </a>
			</div>
		</div>
	</form>
</div>
<div class="col-md-4">
	<canvas id="profilePicure" width="200" height="300"></canvas>
</div>

<script>
	
</script>


</body>
</html>