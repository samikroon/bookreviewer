
<?php include("header.php"); ?>
<link rel="stylesheet" type="text/css" href="./admin_panel_style.css" >


<h1 style="font-family:Comic Sans Ms;text-align="center";font-size:20pt;
color:#00FF00;>
</h1>

<script>
	if (!!$.cookie('unBookreviewer') && !!$.cookie('tokenBookreviewer') && !!$.cookie('adminBookreviewer')) {
	
	} else{
		window.location.href = "index.php";
	}
</script>

<table class="admin_panel" cellpadding="20">
	<tr>
		<td class="admin_p_td">
			<a href="#" class="btn btn-sq-lg btn-primary" id="fillUserModal" onclick="fillUserModal();" data-toggle="modal" data-target="#viewUsersModal">
				<i class="fa fa-user fa-5x"></i><br/>
				User Management
			</a>
		</td>
		<td class="admin_p_td">
			<a href="#" class="btn btn-sq-lg btn-primary" data-toggle="modal" data-target="#addBookModal">
				<i class="fa fa-book fa-5x"></i><br/>
				Add Book
			</a>
		</td>
	</tr>
	
</table>

</body>
</html>