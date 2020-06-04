var token = 0;

function checkURIforRedirect() {
	if (location.hash != "") {
		token = location.hash.split("=")[1].split("&")[0];

		if (token != "") {
			document.getElementById("loginButton").setAttribute("hidden", "true");
			document.getElementById("mainInterface").removeAttribute("hidden");
		}
	}
}

function getToken() {
	window.location.replace(
		"https://oauth.vk.com/authorize?client_id=7498813&display=popup&redirect_uri=https://drlemis.github.io/vk-post/&scope=wall&response_type=token"
	);
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
			token,
		method: "GET",
		dataType: "JSONP",
		crossDomain: true,
		success: function (data) {
			console.log(data);
		},
	});
}

checkURIforRedirect();
