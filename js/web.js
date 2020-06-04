var token = 0;
var version = 5.57;

function checkURIforRedirect() {
	if (location.hash != "") {
		token = location.hash.split("=")[0].split("&")[0];
	}
}

function getToken() {
	window.location.replace(
		"https://oauth.vk.com/authorize?client_id=7498813&display=popup&redirect_uri=https://drlemis.github.io/vk-post/&scope=wall&response_type=token&v=" +
			version
	);
}

function postWall(groupID, text) {
	console.log("WALLPOST" + ID);
	$.ajax({
		url:
			"https://api.vk.com/method/wall.post?owner_id=-" +
			groupID +
			"&message='" +
			text +
			"'&access_token=" +
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
