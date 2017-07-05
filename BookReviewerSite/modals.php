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
  					  <input type="radio" id = "genderReg" value="female"> Female
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



<!-- addBookModal MODAL -->
<div id="addBookModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

  <!-- Modal content-->
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h4 class="modal-title">ADD BOOK</h4>
    </div>
    <div class="modal-body">
      <form enctype="multipart/form-data" id="addBookForm">
        <p>Please fill in the following fields</p>
        <table>
          <tr>
            <td><p>isbn:</p></td>
            <td><p><input type="text" id="isbn" name="isbn" class="addBookISBN"></p></td>
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



<!-- addReviewModal MODAL -->
<div id="addReviewModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

  <!-- Modal content-->
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h4 class="modal-title">Write Review</h4>
    </div>
    <div class="modal-body">
      <form enctype="multipart/form-data", id="submitNewReview">
        <p>Please fill in the following fields</p>
        <table>
      <tr>
        <td><p>Title:</p></td>
        <td><p><input type="text" id="reviewTitle" name="reviewTitle"></p></td>
      </tr>
      <tr>
        <td><p>Review:</p></td>
        <td><p><textarea id="reviewContent" name="reviewContent" rows="8" cols="50" style="white-space: pre-wrap;"></textarea></p></td>
      </tr>
        </table>
    
      <input type='hidden' name='reviewOnBook' id="addRevISBN">
      <input type='hidden' name='bookTitle' id='addRevBookTitle'>
    </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-default" id="addReview">Submit Review</button>
    </div>
  </div>

  </div>
</div>


<!-- admin view users MODAL -->
<div id="viewUsersModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

  <!-- Modal content-->
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h4 class="modal-title">DELETE USERS</h4>
    </div>
    <div class="well well-sm"> 
      <input type="text" id="searchUser" name="" placeholder="search on username">
      <button type="submit" class="btn btn-default" id="searchUserButton">SEARCH</button>
    </div>
    <div class="modal-body view-user-body">

      <table id="userTable" class="table table-striped">
        
      </table>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
    </div>
  </div>

  </div>
</div>



<!-- admin view users MODAL -->
<div id="searchUsersModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

  <!-- Modal content-->
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h4 class="modal-title">Search Users</h4>
    </div>
    <div class="well well-sm"> 
      <input type="text" id="searchPublicUser" name="" placeholder="search on username">
      <button type="submit" class="btn btn-default" id="searchPublicUserButton">SEARCH</button>
    </div>
    <div class="modal-body search-user-body">

      <table id="searchUserTable" class="table table-striped">
        
      </table>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
    </div>
  </div>

  </div>
</div>



<div id="uploadpp" class="modal fade" role="dialog">
  <div class="modal-dialog">

  <!-- Modal content-->
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h4 class="modal-title">UPLOAD PROFILE PICTURE</h4>
    </div>
    <div class="modal-body">
      <form enctype="multipart/form-data", id="submitNewPP">
        <input type="file" name="profilePicture" id="ppFile">
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-default" id="changePPButton">Change</button>
    </div>
  </div>

  </div>
</div>


