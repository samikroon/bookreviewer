var cookieExpireDate = new Date();
var minutes = 180;
cookieExpireDate.setTime(cookieExpireDate.getTime()+(minutes*60*1000));



$(window).on('load', function(){
	console.log("check login");
	loggedIn();
	if (window.location.pathname.indexOf('/index.php') !== -1) {
		loadCarouselOne();
		loadCarouselTwo();
	}
	if (window.location.pathname=='/profile_page.php') {
		profileDetails();
		profileReviews();
	}
	if (window.location.pathname=='/public_profile.php') {
		publicDetails();
		publicReviews();
	}
	if (window.location.pathname.indexOf('/review.php') !== -1) {
		reviewPage();
	}
	if (window.location.pathname.indexOf('/book.php') !== -1) {
		bookPage();
	}
	if (window.location.pathname.indexOf('/books.php') !== -1) {
		bookCount();
		bookCollection();
	}
	if (window.location.pathname.indexOf('/book_search.php') !== -1) {
		bookSearch();
	}

});



$("#searchButton").click(function() {
	query = $("#query").val();
	if (query.length == 0) {
		alert("You did not write a search query.");
	} else {
		window.location.href = "book_search.php?search="+query;
	}
})




$("#login").click(function(){
	username = $("#username").val();
	password = $("#password").val();


	if (username.length == 0 || password.length == 0) {
		alert("You did not fill in one or both fields, please try again.");
	} else {
		details = JSON.stringify({ "username":username, 
								"password":password 
							});
		$.ajax({
			type: "POST",
			url: "http://37.97.227.173:5000/login",
			data: details,
			contentType: "application/json; charset=utf-8",
			dataType: "text",
			success: function(data) {
				$.cookie("unBookreviewer", username, {expires : cookieExpireDate});
				$.cookie("tokenBookreviewer", data, {expires: cookieExpireDate});
				$('#loginModal').modal('hide');
				location.reload();
			},
			failure: function() {
				alert("Login failed, try again");
			}
		});
	}
});



$("#register").click(function(){
	usernameReg = $("#usernameReg").val();
	emailReg = $("#emailReg").val();
	fnameReg = $("#fnameReg").val();
	lnameReg = $("#lnameReg").val();
	ageReg = $("#ageReg").val();
	genderReg = $("#ageReg").val();
	passwordReg = $("#passwordReg").val();
	passwordReg2 = $("#passwordReg2").val();

	alert("hier kom ik");
	if (usernameReg.length == 0 || emailReg.length == 0 || fnameReg.length == 0 || lnameReg.length == 0 || passwordReg.length == 0 || passwordReg2.length == 0 || !ageReg || passwordReg != passwordReg2) {
		alert("You did not fill in one or both fields, please try again.");
	} else {
		alert("alles is ingevuld");
		
		$.getJSON("http://37.97.227.173:5000/users/username/"+usernameReg, function(data){
			if (data.results[0] == undefined) {
				alert("gaat registratie versturen");
				details = JSON.stringify({ "username":usernameReg, 
									"email":emailReg, 
									"fname":fnameReg,
									"lname":lnameReg,
									"age":ageReg,
									"gender":genderReg,
									"password":passwordReg 
								});
				$.ajax({
					type: "POST",
					url: "http://37.97.227.173:5000/users",
					data: details,
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					success: function(data2) {
						alert(JSON.stringify(data2));
						alert("account for "+data2['username']+" has been successfully created, you can login now.");
						$('#registerModal').modal('hide');
						
					},
					failure: function() {
						alert("Registration failed, try again");
					}
				});
				
			} else {
				alert("username already token");
			}
			
		})

	}
});

function logout(){
	$.removeCookie('unBookreviewer', { path: '/' });
	$.removeCookie('tokenBookreviewer', { path: '/' });
	if (!!$.cookie('adminBookreviewer')) {
		$.removeCookie('adminBookreviewer', { path: '/' });
	}
	location.reload();
};

function loggedIn() {
	if (!!$.cookie('unBookreviewer') && !!$.cookie('tokenBookreviewer')) {
		un = $.cookie('unBookreviewer');
		token = $.cookie('tokenBookreviewer');
		console.log(un + " = un token = " + token);
		$.ajax({
			type: "get",
			url: "http://37.97.227.173:5000/check/login",
			headers: {
				'username' : un,
				'token' : token
			},
			dataType: "text",
			success: function(data) {
				if (String(data) === "is_admin") {
					$.cookie("adminBookreviewer", 1, {expires : cookieExpireDate});
					navLoggedInAdmin();
				} else if (String(data) === "is_regular") {
					navLoggedInRegular();
				} else {
					navNotLoggedIn();
				}
			}
		});
	} else {
		console.log("cookies are f***ed");
		navNotLoggedIn();
	}
	//alert(window.location.pathname);
}



function navLoggedInRegular() {
	$("#logoutListing").append("<a class=\"navA\" href=\"#\" onClick=\"logout();\">Logout</a>");
	$("#profileListing").append("<a class=\"navA\" href=\"profile_page.php\">"+$.cookie('unBookreviewer')+"</a>");
	$("#publicProfilesListing").append("<a class=\"navA\" href=\"#\" data-toggle=\"modal\" data-target=\"#searchUsersModal\">Profiles</a>");
}

function navLoggedInAdmin() {
	$("#logoutListing").append("<a class=\"navA\" href=\"#\" onClick=\"logout();\">Logout</a>");
	$("#adminListing").append("<a class=\"navA\" href=\"admin_panel.php\">Admin panel</a>");
	$("#profileListing").append("<a class=\"navA\" href=\"profile_page.php\">"+$.cookie('unBookreviewer')+"</a>");
	$("#publicProfilesListing").append("<a class=\"navA\" href=\"#\" data-toggle=\"modal\" data-target=\"#searchUsersModal\">Profiles</a>");
}

function navNotLoggedIn() {
	$("#loginListing").append("<a class=\"navA\" href=\"#\" data-toggle=\"modal\" data-target=\"#loginModal\">Login</a>");
	$("#registerListing").append("<a class=\"navA\" href=\"#\" data-toggle=\"modal\" data-target=\"#registerModal\">Register</a>");
}


function profileDetails() {
	if (!!$.cookie('unBookreviewer') && !!$.cookie('tokenBookreviewer')) {
		un = $.cookie('unBookreviewer');
		token = $.cookie('tokenBookreviewer');
		$.ajax({
			type: "get",
			url: "http://37.97.227.173:5000/check/login",
			headers: {
				'username' : un,
				'token' : token
			},
			dataType: "text",
			success: function(data) {
				if (String(data) === "is_admin" || String(data) === "is_regular" ) {
					$.getJSON("http://37.97.227.173:5000/users/username/"+un, function(data2){
						$('#usernamepf').attr('value', data2.results[0].username);
						$('#emailpf').attr('value', data2.results[0].email);
						$('#fnamepf').attr('value', data2.results[0].fname);
						$('#lnamepf').attr('value', data2.results[0].lname);
						$('#agepf').attr('value', data2.results[0].age);
						if (data2.results[0].gender == 'male') {
							$("input[name='gender'][value='male']").prop('checked', true);
						} else {
							$("input[name='gender'][value='female']").prop('checked', true);
						}
						
					});
				} else {
					location.href='http://37.97.227.173/';
				}
			}
		});
	} else {
		location.href='http://37.97.227.173/';
	}
	$.getJSON("http://37.97.227.173:5000/users/username/"+un, function(data3){
		if ("profilePicture" in data3.results[0]) {
			$('#profilePicture').attr('src', data3.results[0].profilePicture);
		} else {
			$('#profilePicture').attr('src', '/profile-pictures/empty-profile-picture.gif');
		}
	});
		//alert(window.location.pathname);
}

function profileReviews() {
	if (!!$.cookie('unBookreviewer') && !!$.cookie('tokenBookreviewer')) {
		un = $.cookie('unBookreviewer');
		token = $.cookie('tokenBookreviewer');
		$.ajax({
			type: "get",
			url: "http://37.97.227.173:5000/review/by_user/" + un,
			dataType: "json",
			success: function(data) {
				for (var x in data.results){
					console.log(data.results[x].reviewTitle);
					$( "#profileReviews" ).append("<tr onclick=\"window.location.href = 'review.php?reviewid="+data.results[x]._id+"&isbn="+ data.results[x].reviewOnBook +"';\"><td>"+data.results[x].reviewTitle+"</td><td>"+data.results[x].bookTitle+"</td><td>"+data.results[x].reviewOnBook+"</td></tr>");
				}
			}
		});
	} else {
		location.href='http://37.97.227.173/';
	}
}



$("#addBook").click(function(){
	var form = $('#addBookForm')[0];
	var data = new FormData(form);
	
	for (var value of data.values()) {
		console.log(value);
	}
	if ($.isNumeric($(".addBookISBN").val())) {
		un = $.cookie('unBookreviewer');
		console.log(un);
		token = $.cookie('tokenBookreviewer');
		$.ajax({
			type: "post",
			url: "http://37.97.227.173:5000/books",
			headers: {
				'username' : un,
				'token' : token
			},
			data: data,
			enctype: 'multipart/form-data',
			contentType: false,
			processData: false,
			cache: false,
			dataType: 'json',
			success: function(data2) {
				alert(JSON.stringify(data2));
				
				$('#addBookModal').modal('hide');
				
			},
			failure: function() {
				alert("Adding book failed, try again");
			}
		});
	}
	

});



$("#addReview").click(function(){
	var form = $('#submitNewReview')[0];
	var data = new FormData(form);
	
	for (var value of data.values()) {
		console.log(value);
	}
	
	un = $.cookie('unBookreviewer');
	token = $.cookie('tokenBookreviewer');
	
		$.ajax({
		type: "post",
		url: "http://37.97.227.173:5000/reviews",
		headers: {
			'username' : un,
			'token' : token
		},
		data: data,
		enctype: 'multipart/form-data',
		contentType: false,
		processData: false,
		cache: false,
		dataType: 'json',
		success: function(data2) {
			alert(JSON.stringify(data2));
			location.reload(true);
			$('#addReviewModal').modal('hide');
			
		},
		failure: function() {
			alert("Adding review failed, try again");
		}
	});
});

function sendRating(){
	var check = 0;
	if (!!$.cookie('unBookreviewer') && !!$.cookie('tokenBookreviewer')) {
		un = $.cookie('unBookreviewer');
		token = $.cookie('tokenBookreviewer');
		$.get("http://37.97.227.173:5000/users/username/"+un, function(data) {
			booksRatedArray = String(data.results[0].booksRated);
			booksRatedArray = booksRatedArray.split(',');
			if (booksRatedArray) {
				for (var x in booksRatedArray) {
					if (booksRatedArray[x] === bookISBN) {
						alert("you already rated this book");
						check = 1;
						break;
					}
				}
				if (check == 0) {
					var rating = ($('#ratingbook').val());
					var url = "http://37.97.227.173:5000/books/update_rating_by_isbn/"+bookISBN+"/"+rating
					$.ajax({
						type: "PUT",
						url: url,
						dataType: 'text',
						headers: {
							'username' : un,
							'token' : token
						},
						success: function(data){
							alert(data);
							window.location.href = "book.php?isbn="+bookISBN;
						}
					});
				}
			}
			
		});
		
		
	}

}


function addComment(){
	var form = $('#submitNewComment')[0];
	var data = new FormData(form);
	var reviewID = ($('#commentAdder').attr("value"));;
	
	
	un = $.cookie('unBookreviewer');
	token = $.cookie('tokenBookreviewer');
	
		$.ajax({
		type: "POST",
		url: "http://37.97.227.173:5000/reviews/updatecomments/"+reviewID,
		headers: {
			'username' : un,
			'token' : token
		},
		data: data,
		enctype: 'multipart/form-data',
		contentType: false,
		processData: false,
		cache: false,
		dataType: 'text',
		success: function(data2) {
			location.reload(true);			
		},
		failure: function() {
			alert("Adding review failed, try again");
		}
	});
}

function fillUserModal(){
	if (!!$.cookie('unBookreviewer') && !!$.cookie('tokenBookreviewer')) {
		un = $.cookie('unBookreviewer');
		token = $.cookie('tokenBookreviewer');
		$.ajax({
			type: "get",
			url: "http://37.97.227.173:5000/users",
			headers: {
				'username' : un,
				'token' : token
			},
			success: function(data) {
			$('#userTable').empty();
			$("#userTable").append("<tr><th>Username</th><th>User Type</th><th>Delete</th><th>Make Admin</th></tr>");
				for (var x in data.results){
					if (data.results[x].admin) {
						admin = "Administrator";
					} else {
						admin = "Regular user";
					}
					$( "#userTable" ).append("<tr><td>"+data.results[x].username+"</td><td>"+admin+"</td><td><button type=\"submit\" class=\"btn btn-primary btn-sm\" onclick=\"removeUser(\'"+(data.results[x].username)+"\')\">delete user</button></td><td><button type=\"submit\" class=\"btn btn-primary btn-sm\" onclick=\"makeAdmin(\'"+(data.results[x].username)+"\')\">make admin</button></td></tr>");
				}
			}
		});
	}

};


$("#searchUserButton").click(function() {
	if (!!$.cookie('unBookreviewer') && !!$.cookie('tokenBookreviewer')) {
		query = $("#searchUser").val();
		$.get("http://37.97.227.173:5000/search/users/"+query, function(data) {
			$('#userTable').empty();
			$("#userTable").append("<tr><th>Username</th><th>User Type</th><th>Delete</th><th>Make Admin</th></tr>");
			for (var x in data.results) {
				if (data.results[0].admin) {
					admin = "Administrator";
				} else {
					admin = "Regular user";
				}
				$( "#userTable" ).append("<tr><td>"+data.results[x].username+"</td><td>"+admin+"</td><td><button type=\"submit\" class=\"btn btn-primary btn-sm\" onclick=\"removeUser(\'"+(data.results[x].username)+"\')\">delete user</button></td><td><button type=\"submit\" class=\"btn btn-primary btn-sm\" onclick=\"makeAdmin(\'"+(data.results[x].username)+"\')\">make admin</button></td></tr>");
			}
		})
	}
})




$("#searchPublicUserButton").click(function() {
	if (!!$.cookie('unBookreviewer') && !!$.cookie('tokenBookreviewer')) {
		query = $("#searchPublicUser").val();
		$.get("http://37.97.227.173:5000/search/users/"+query, function(data) {
			$('#searchUserTable').empty();
			$("#searchUserTable").append("<tr><th>Username</th><th>First name</th><th>Last name</th></tr>");
			for (var x in data.results) {
				$( "#searchUserTable" ).append("<tr><td><a href=\"public_profile.php?un="+data.results[x].username+"\">"+data.results[x].username+"</a></td><td>"+data.results[x].fname+"</td><td>"+data.results[x].lname+"</td></tr>");
			}
		});

	}
})


function removeUser(username){
	if (!!$.cookie('unBookreviewer') && !!$.cookie('tokenBookreviewer')) {
		un = $.cookie('unBookreviewer');
		token = $.cookie('tokenBookreviewer');
		$.ajax({
			type: "delete",
			url: "http://37.97.227.173:5000/users/delete/"+username,
			headers: {
				'username' : un,
				'token' : token
			},
			success: function(data) {
				$('#userTable').empty();
				fillUserModal();
				
			}
		});
	}
}


function makeAdmin(username){
	if (!!$.cookie('unBookreviewer') && !!$.cookie('tokenBookreviewer')) {
		un = $.cookie('unBookreviewer');
		token = $.cookie('tokenBookreviewer');
		$.ajax({
			type: "put",
			url: "http://37.97.227.173:5000/users/makeadmin/"+username,
			headers: {
				'username' : un,
				'token' : token
			},
			success: function(data) {
				$('#userTable').empty();
				fillUserModal();
				
			}
		});
	}
}

function submitChanges(){
	var form = $('#profileForm')[0];
	var data = new FormData(form);
	alert("onclicking");
	for (var value of data.values()) {
		console.log(value);
	}
	un = $.cookie('unBookreviewer');
	console.log(un);
	token = $.cookie('tokenBookreviewer');
	$.ajax({
		type: "put",
		url: "http://37.97.227.173:5000/users/update_user",
		headers: {
			'username' : un,
			'token' : token
		},
		data: data,
		enctype: 'multipart/form-data',
		contentType: false,
		processData: false,
		cache: false,
		dataType: 'json',
		success: function(data2) {
			alert(JSON.stringify(data2));
			
			location.reload(true);
			
		},
		failure: function() {
			alert("Changing profile failed, try again");
		}
	});

}


$("#changePPButton").click(function(){
	alert("kom in change functie");
	var form = $('#submitNewPP')[0];
	var data = new FormData(form);
	
	un = $.cookie('unBookreviewer');
	token = $.cookie('tokenBookreviewer');
	$.ajax({
		type: "post",
		url: "http://37.97.227.173:5000/users/profile_picture",
		headers: {
			'username' : un,
			'token' : token
		},
		data: data,
		enctype: 'multipart/form-data',
		contentType: false,
		processData: false,
		cache: false,
		dataType: 'text',
		success: function(data2) {
			alert(data2);
			
			$('#uploadpp').modal('hide');

			location.reload(true);
			
		},
		failure: function() {
			alert("Adding profile picture failed, try again");
		}
	});

});



function publicDetails() {

	
	$.getJSON("http://37.97.227.173:5000/users/username/"+publicProfile, function(data2){
		$('#usernamepf').attr('value', data2.results[0].username);
		$('#emailpf').attr('value', data2.results[0].email);
		$('#fnamepf').attr('value', data2.results[0].fname);
		$('#lnamepf').attr('value', data2.results[0].lname);
		$('#agepf').attr('value', data2.results[0].age);
		if (data2.results[0].gender == 'male') {
			$("input[name='gender'][value='male']").prop('checked', true);
		} else {
			$("input[name='gender'][value='female']").prop('checked', true);
		}
		
	});
				
	$.getJSON("http://37.97.227.173:5000/users/username/"+publicProfile, function(data3){
		if ("profilePicture" in data3.results[0]) {
			$('#profilePicture').attr('src', data3.results[0].profilePicture);
		} else {
			$('#profilePicture').attr('src', '/profile-pictures/empty-profile-picture.gif');
		}
	});
		//alert(window.location.pathname);
}

function publicReviews() {
	$.ajax({
		type: "get",
		url: "http://37.97.227.173:5000/review/by_user/" + publicProfile,
		dataType: "json",
		success: function(data) {
			for (var x in data.results){
				console.log(data.results[x].reviewTitle);
				$( "#profileReviews" ).append("<tr onclick=\"window.location.href = 'review.php?reviewid="+data.results[x]._id+"&isbn="+ data.results[x].reviewOnBook +"';\"><td>"+data.results[x].reviewTitle+"</td><td>"+data.results[x].bookTitle+"</td><td>"+data.results[x].reviewOnBook+"</td></tr>");
			}
		}
	});
}


function reviewPage() {
	$.get( "http://37.97.227.173:5000/books/isbn/" + reviewISBN, function( data ) {
		var book = data.results;
		
		$( ".book-column" ).append("<div class=\"book-image\" id =\"foto\"><img src=\""+book.photoPath+"\" class=\"book-image\"></div>")

	});
		
		
	$.get( "http://37.97.227.173:5000/review/by_id/" + reviewID, function( data ) {
				
		$( "#review_content #title" ).append(data.results[0].reviewTitle);
		$( "#review_content #author" ).append("<a href=\"public_profile.php?un="+data.results[0].reviewBy+"\">"+data.results[0].reviewBy+"</a>");
		$( "#review_content #reviewContent" ).append(data.results[0].content);
		if (!!$.cookie('unBookreviewer') && !!$.cookie('tokenBookreviewer') && !!$.cookie('adminBookreviewer')) {
			count = 0;
			for(var x in data.results[0].comments){
				if (data.results[0].comments[x].content ===  'Deleted comment') {
					//$( "#commentTable" ).append("<tr><td><a href=\"public_profile.php?un="+data.results[0].comments[x].author+"\">"+data.results[0].comments[x].author+"</a></td><td>"+data.results[0].comments[x].content+"</td><td>"+data.results[0].comments[x].posted+"</td></tr>");
				} else {
					$( "#commentTable" ).append("<tr><td><a href=\"public_profile.php?un="+data.results[0].comments[x].author+"\">"+data.results[0].comments[x].author+"</a>    <button type=\"submit\" class=\"btn btn-primary btn-sm\" onclick=\"removeComment(\'"+reviewID+"\', \'"+String(count)+"\')\"><i class=\"glyphicon glyphicon-trash\"></i></button></td><td>"+data.results[0].comments[x].content+"</td><td>"+data.results[0].comments[x].posted+"</td></tr>");
				}
				count++;
			}
		} else {
			for(var x in data.results[0].comments){
				if (data.results[0].comments[x].content === 'Deleted comment') {
					continue;
				} else {
					$( "#commentTable" ).append("<tr><td><a href=\"public_profile.php?un="+data.results[0].comments[x].author+"\">"+data.results[0].comments[x].author+"</a></td><td>"+data.results[0].comments[x].content+"</td><td>"+data.results[0].comments[x].posted+"</td></tr>");
				}
			}
		}
					
	});
}


function bookPage() {
	$('#ratingbook').rating({});
	$.get( "http://37.97.227.173:5000/books/isbn/" + bookISBN, function( data ) {
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

		bookTitle = book.title;

		$("#addRevISBN").attr("value", bookISBN)
		$("#addRevBookTitle").attr("value", bookTitle)
	});
		
		
	$.get( "http://37.97.227.173:5000/review/by_isbn/" + bookISBN, function( data ) {	
		if (!!$.cookie('unBookreviewer') && !!$.cookie('tokenBookreviewer') && !!$.cookie('adminBookreviewer')) {
			$("#removeBookButton").append("<button type=\"submit\" class=\"btn btn-primary btn-sm\" onclick=\"removeBook(\'"+bookISBN+"\')\"><i class=\"glyphicon glyphicon-trash\"></i> remove book</button>");
			for (var x in data.results) {
				$( "#reviewTable #reviewTableBody" ).append("<tr><td><a href=\"review.php?reviewid="+data.results[x]._id+"&isbn="+bookISBN+"\">"+data.results[x].reviewTitle+"</a></td><td>written by: 		<a href=\"public_profile.php?un="+data.results[x].reviewBy+"\">"+data.results[x].reviewBy+"</a></td><td><button type=\"submit\" class=\"btn btn-primary btn-sm\" onclick=\"removeReview(\'"+data.results[x]._id+"\')\"><i class=\"glyphicon glyphicon-trash\"></i></button></td></tr>");
			}

		} else {
			for (var x in data.results) {
				$( "#reviewTable #reviewTableBody" ).append("<tr><td><a href=\"review.php?reviewid="+data.results[x]._id+"&isbn="+bookISBN+"\">"+data.results[x].reviewTitle+"</a></td><td>written by: 		<a href=\"public_profile.php?un="+data.results[x].reviewBy+"\">"+data.results[x].reviewBy+"</a></td></tr>");
			}
		}
	});

}


function bookCount() {
	$.get( "http://37.97.227.173:5000/books/count", function( data ) {
		numberOfPages = parseInt(parseInt(data)/24);
	});
}


function bookCollection() {
	$.get( "http://37.97.227.173:5000/books/page/"+pageCount, function( data ) {
		$(".container").empty();
		$(".container").append("<div class=\"well well-sm book-bar\"><strong>All Books</strong></div>");
		$(".container").append("<div class=\"row\"></div>");
		for (var x in data.results){
			$( ".row").append("<div class=\"book-column col-md-2\" id =\"foto\"><a href=\"book.php?isbn="+data.results[x].isbn+"\"><img src=\""+data.results[x].photoPath+"\" class=\"book-image\"></div>");
		}
		if((pageCount < numberOfPages)) {
			$(".book-bar").append("<button type=\"submit\" class=\"btn btn-primary btn-sm\" onclick=\"iteratePage(\'next\')\" style=\"float:right\">page forward<i class=\"glyphicon glyphicon-menu-right\"></i></button>");	
		}
		if(pageCount > 0) {
			$(".book-bar").append("<button type=\"submit\" class=\"btn btn-primary btn-sm\" onclick=\"iteratePage(\'back\')\" style=\"float:right\">page backward<i class=\"glyphicon glyphicon-menu-left\"></i></button>");
		}
		
		

	});
	
}

function iteratePage(direction) {
	if (direction === 'next') {
		pageCount++;
		bookCollection();
	}
	if (direction === 'back') {
		pageCount--;
		bookCollection();
	}
}

function bookSearch() {
	$(".bookSearchTitle").html("You searched for: " + searchQuery);
	$.get( "http://37.97.227.173:5000/search/books/"+searchQuery, function( data ) {
		for (var x in data.results){
			console.log(data)
			$( ".row" ).append("<div class=\"book-column col-md-2\" id =\"foto\"><a href=\"book.php?isbn="+data.results[x].isbn+"\"><img src=\""+data.results[x].photoPath+"\" class=\"book-image\"></div>")
			
			
			
			console.log(data.results[x]);
		}

	});
}


function removeComment(rid, nr) {
	un = $.cookie('unBookreviewer');
	token = $.cookie('tokenBookreviewer');
	$.ajax({
		type: "put",
		url: "http://37.97.227.173:5000/comments/delete/"+rid+"/"+nr,
		headers: {
			'username' : un,
			'token' : token
		},
		dataType: 'text',
		success: function(data2) {
			location.reload(true);	
		},
		failure: function() {
			alert("Deleting comment failed.");
		}
	});
}


function removeReview(rid) {
	un = $.cookie('unBookreviewer');
	token = $.cookie('tokenBookreviewer');
	$.ajax({
		type: "delete",
		url: "http://37.97.227.173:5000/reviews/delete/"+rid,
		headers: {
			'username' : un,
			'token' : token
		},
		dataType: 'text',
		success: function(data2) {
			location.reload(true);	
		},
		failure: function() {
			alert("Deleting review failed.");
		}
	});
}

function removeBook(isbn) {
	un = $.cookie('unBookreviewer');
	token = $.cookie('tokenBookreviewer');
	$.ajax({
		type: "delete",
		url: "http://37.97.227.173:5000/books/delete/"+isbn,
		headers: {
			'username' : un,
			'token' : token
		},
		dataType: 'text',
		success: function(data2) {
			window.location.href = "books.php";	
		},
		failure: function() {
			alert("Deleting review failed.");
		}
	});
}


function loadCarouselOne() {
	$.get( "http://37.97.227.173:5000/topbooks", function( data ) {
		for (var x in data.results){
			if (x == 0) {
				$(".cone").append("<div class=\"item active\" style=\"height:450px; width:300px; margin-left:auto; margin-right:auto;\"><a href=\"book.php?isbn="+data.results[x].isbn+"\"><img src=\""+data.results[x].photoPath+"\" class=\"book-image\"></div>");
			} else {
				$(".cone").append("<div class=\"item\" style=\"height:450px; width:300px; margin-left:auto; margin-right:auto;\"><a href=\"book.php?isbn="+data.results[x].isbn+"\"><img src=\""+data.results[x].photoPath+"\" class=\"book-image\"></div>");
			}
		}

	});

}

function loadCarouselTwo() {
	$.get( "http://37.97.227.173:5000/lastAdded/books", function( data ) {
		for (var x in data.results){
			if (x == 0) {
				$(".ctwo").append("<div class=\"item active\" style=\"height:450px; width:300px; margin-left:auto; margin-right:auto;\"><a href=\"book.php?isbn="+data.results[x].isbn+"\"><img src=\""+data.results[x].photoPath+"\" class=\"book-image\"></div>");
			} else {
				$(".ctwo").append("<div class=\"item\" style=\"height:450px; width:300px; margin-left:auto; margin-right:auto;\"><a href=\"book.php?isbn="+data.results[x].isbn+"\"><img src=\""+data.results[x].photoPath+"\" class=\"book-image\"></div>");
			}
		}

	});
}