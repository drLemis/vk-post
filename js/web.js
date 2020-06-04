var token = 0;
var ID = 0;
var version = 5.57;

function checkURIforRedirect() {
	if (location.hash != "") {
		console.log(resultArray);
		var resultArray = location.hash.split("=");
		token = resultArray[resultArray.length - 1];
		ID = resultArray[1].split("_")[2];
		postWall();
	}
}

function getToken(groupID) {
	window.location.replace(
		"https://oauth.vk.com/authorize?client_id=7498813&group_ids=" +
			groupID +
			"&display=page&redirect_uri=" +
			location +
			"&scope=manage,wall&response_type=token&v=" +
			version
	);
}

function postWall() {
	console.log("WALLPOST" + id);
	$.ajax({
		url:
			"https://api.vk.com/method/wall.post?owner_id=" +
			ID +
			"&message='TEST EXAMPLE'&access_token=" +
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
