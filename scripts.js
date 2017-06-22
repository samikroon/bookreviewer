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
				$.cookie("unBookreviewer", username, {expires : 1});
				$.cookie("tokenBookreviewer", data, {expires: 1});
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
	location.reload();
};

$(window).on('load', function loggedIn() {
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
				if (String(data) === "is_admin") {
					navLoggedInAdmin();
				} else if (String(data) === "is_regular") {
					navLoggedInRegular();
				} else {
					navNotLoggedIn();
				}
			}
		});
	} else {
		navNotLoggedIn();
	}
	//alert(window.location.pathname);
});



function navLoggedInRegular() {
	$("#logoutListing").append("<a class=\"navA\" href=\"#\" onClick=\"logout();\">Logout</a>");
	$("#profileListing").append("<a class=\"navA\" href=\"\">"+$.cookie('unBookreviewer')+"</a>");
}

function navLoggedInAdmin() {
	$("#logoutListing").append("<a class=\"navA\" href=\"#\" onClick=\"logout();\">Logout</a>");
	$("#adminListing").append("<a class=\"navA\" href=\"\">Admin panel</a>");
	$("#profileListing").append("<a class=\"navA\" href=\"\">"+$.cookie('unBookreviewer')+"</a>");
	$("#addBookListing").append("<a class=\"navA\" href=\"#\" data-toggle=\"modal\" data-target=\"#addBookModal\">Add Book</a>");
}

function navNotLoggedIn() {
	$("#loginListing").append("<a class=\"navA\" href=\"#\" data-toggle=\"modal\" data-target=\"#loginModal\">Login</a>");
	$("#registerListing").append("<a class=\"navA\" href=\"#\" data-toggle=\"modal\" data-target=\"#registerModal\">Register</a>");
}


$("#addBook").click(function(){
	var form = $('#addBookForm')[0];
	var data = new FormData(form);
	
	for (var value of data.values()) {
		console.log(value);
	}
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
	var rating = ($('#sel1').val());
	var isbn = ($('#name1').attr("value"));
	var url = "http://37.97.227.173:5000/books/update_rating_by_isbn/"+isbn+"/"+rating
	
	un = $.cookie('unBookreviewer');
	token = $.cookie('tokenBookreviewer');
	
	$.ajax({
		type: "PUT",
		url: url,
		dataType: 'text',
		headers: {
			'username' : un,
			'token' : token
		},
		success: function(data){
			location.reload(true)}
});

}

function addComment(){
	alert("test")
	var form = $('#submitNewComment')[0];
	var data = new FormData(form);
	var reviewID = ($('#commentAdder').attr("value"));;
	
	console.log(reviewID)
	
	for (var value of data.values()) {
		console.log(value);
	}
	
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
		dataType: 'json',
		success: function(data2) {
			alert(JSON.stringify(data2));
			
		},
		failure: function() {
			alert("Adding review failed, try again");
		}
	});
}