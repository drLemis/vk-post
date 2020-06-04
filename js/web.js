var token = 0;
var version = 5.57;

function checkURIforRedirect() {
	if (location.hash != "") {
		token = location.hash.split("=")[1].split("&")[0];

		getAccessToken();

		if (token != "") {
			document.getElementById("loginButton").setAttribute("hidden", "true");
			document.getElementById("mainInterface").removeAttribute("hidden");
		}
	}
}

function getToken() {
	window.location.replace(
		"https://oauth.vk.com/authorize?client_id=7498813&display=popup&redirect_uri=https://drlemis.github.io/vk-post/&scope=wall,groups&response_type=token&v=" +
			version
	);
}

function getCode() {
	window.location.replace(
		"https://oauth.vk.com/authorize?client_id=7498813&display=popup&redirect_uri=https://drlemis.github.io/vk-post/&scope=wall,groups&response_type=code&v=" +
			version
	);
}

function getAccessToken() {
	//
	$.ajax({
		url:
			"https://oauth.vk.com/access_token?client_id=7498813&client_secret=5bgyJMq0GzysFMSlLGW3&redirect_uri=https://drlemis.github.io/vk-post/&code=" +
			token,
		method: "GET",
		dataType: "JSONP",
		crossDomain: true,
		success: function (data) {
			console.log("ACCESS");
			console.log(data);
			token = data.access_token;
		},
	});
}

function postWall(groupID, text) {
	console.log("WALLPOST:" + groupID + ":" + text);
	console.log("TOKEN:" + token);
	$.ajax({
		url:
			"https://api.vk.com/method/wall.post?owner_id=-" +
			groupID +
			"&message=" +
			text +
			"&access_token=" +
			token +
			"&v=" +
			version,
		method: "GET",
		dataType: "JSONP",
		crossDomain: true,
		success: function (data) {
			console.log(data);
		},
	});
}

checkURIforRedirect();
