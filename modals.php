<!-- LOGIN MODAL -->
<div id="loginModal" class="modal fade" role="dialog">
<div class="modal-dialog">

<!-- Modal content-->
<div class="modal-content">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal">&times;</button>
    <h4 class="modal-title">LOGIN</h4>
  </div>
  <div class="modal-body">
    <form>
		<p>Fill in your username and password</p>
		<input type="text" id = "username" placeholder="username">
		<input type="password" id = "password" placeholder="********">
	</form>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-default" id="login"> Login</button>
  </div>
</div>

</div>
</div>

<!-- Register MODAL -->
<div id="registerModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

  <!-- Modal content-->
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h4 class="modal-title">REGISTER</h4>
    </div>
    <div class="modal-body">
      <form>
      	<p>Please fill in the following fields</p>
      	<table>
      		<tr>
      			<td><p>username:</p></td>
      			<td><p><input type="text" id = "usernameReg"></p></td>
      		</tr>
      		<tr>
      			<td><p>email:</p></td>
      			<td><p><input type="text" id = "emailReg"></p></td>
      		</tr>
      		<tr>
      			<td><p>first name:</p></td>
      			<td><p><input type="text" id = "fnameReg"></p></td>
      		</tr>
      		<tr>
      			<td><p>last name:</p></td>
      			<td><p><input type="text" id = "lnameReg"></p></td>
      		</tr>
      		<tr>
      			<td><p>age:</p></td>
      			<td><p><input type="date" id = "ageReg"></p></td>
      		</tr>
      		<tr>
      			<td><p>gender:</p></td>
      			<td>
      				<input type="radio" id = "genderReg" value="male"> Male
  					<input type="radio" id = "genderReg" value="male"> Female
      			</td>
      		</tr>
      		<tr>
      			<td><p>password:</p></td>
      			<td><p><input type="password" id = "passwordReg"></p></td>
      		</tr>
      		<tr>
      			<td><p>password again:</p></td>
      			<td><p><input type="password" id = "passwordReg2"></p></td>
      		</tr>
      	</table>
  	</form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-default" id="register"> Register</button>
    </div>
  </div>

  </div>
</div>



<!-- Register MODAL -->
<div id="addBookModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

  <!-- Modal content-->
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h4 class="modal-title">ADD BOOK</h4>
    </div>
    <div class="modal-body">
      <form enctype="multipart/form-data", id="addBookForm">
        <p>Please fill in the following fields</p>
        <table>
          <tr>
            <td><p>isbn:</p></td>
            <td><p><input type="text" id="isbn" name="isbn"></p></td>
          </tr>
          <tr>
            <td><p>title:</p></td>
            <td><p><input type="text" id = "title" name="title"></p></td>
          </tr>
          <tr>
            <td><p>author:</p></td>
            <td><p><input type="text" id = "author" name="author"></p></td>
          </tr>
          <tr>
            <td><p>description:</p></td>
            <td><textarea id="description" rows="7" cols="30" name="description"></textarea></td>
          </tr>
          <tr>
            <td><p>publisher</p></td>
            <td><p><input type="text" id = "publisher" name="publisher"></p></td>
          </tr>
          <tr>
            <td><p>publication date:</p></td>
            <td><p><input type="date" id = "pubDate" name="pubDate"></p></td>
          </tr>
          <tr>
            <td><p>language:</p></td>
            <td><p><input type="text" id = "language" name="language"></p></td>
          </tr>
          <tr>
            <td><p>pages:</p></td>
            <td><p><input type="text" id = "pages" name="pages"></p></td>
          </tr>
          <tr>
            <td><p>image (gif, png, jpg):</p></td>
            <td><p><input type="file" name="bookPhoto" id="bookPhoto"></p></td>
          </tr>
        </table>
    </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-default" id="addBook"> Add book</button>
    </div>
  </div>

  </div>
</div>