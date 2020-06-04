var appID = 7498813;
var redirect = "https://oauth.vk.com/blank.html";
var token = 0;
var version = 5.57;

function getToken() {
	window.open(
		"http://oauth.vk.com/authorize?client_id=" +
			appID +
			"&scope=wall,groups&redirect_uri=" +
			redirect +
			"&response_type=access_token"
	);
}

function useToken(newToken) {
	token = newToken;

	document.getElementById("loginInterface").setAttribute("hidden", "true");
	document.getElementById("mainInterface").removeAttribute("hidden");
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
