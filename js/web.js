var token = 0;

function getJSONToFunc(url, func) {
	fetch(url).then(function (response) {
		response.text().then(function (text) {
			func(JSON.parse(text));
		});
	});
}

function checkURIforRedirect() {
	if (location.hash != "") {
		console.log("REDIRECTED");
		token = location.hash.split("=")[1];
		console.log(token);
		document.getElementById("groupID").textContent = "REDIRECTED";
		login();
	}
}

function getToken(groupID) {
	console.log("GET TOKEN");

	window.location.replace(
		"https://oauth.vk.com/authorize?client_id=7498813&group_ids=" +
			groupID +
			"&display=page&redirect_uri=" +
			location +
			"&scope=manage&response_type=token&v=5.107"
	);
}

function login() {
	console.log("LOGIN");
	$.ajax({
		url:
			"https://api.vk.com/method/users.get?PARAMETERS&access_token=" +
			token +
			"&v=5.107",
		method: "GET",
		dataType: "JSONP",
		crossDomain: true,
		success: function (data) {
			console.log(data);
			document.getElementById("groupID").textContent = "SUCCESS!";
		},
	});
}

checkURIforRedirect();