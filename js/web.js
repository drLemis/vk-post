var token = 0;

function getJSONToFunc(url, func) {
	fetch(url).then(function (response) {
		response.text().then(function (text) {
			func(JSON.parse(text));
		});
	});
}

VK.init(
	function () {
		// API initialization succeeded
		// Your code here
	},
	function () {
		// API initialization failed
		// Can reload page here
	},
	"5.107"
);

function getToken(groupID) {
	console.log("GET TOKEN");
	$.ajax(
		{
			url: "https://oauth.vk.com/authorize?client_id=7498813&group_ids="+groupID+"&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=users&response_type=token&v=5.107",
			method: "GET",
			dataType: "text",
			success: function (data) {
				console.log(data);
				document.getElementById('groupID').textContent = "PARTIAL SUCCESS!"
				login();
			}
		}
	)
}

function login() {
	console.log("LOGIN");
	$.ajax(
		{
			url: "https://api.vk.com/method/users.get?PARAMETERS&access_token="+token+"&v=5.107",
			method: "GET",
			dataType: "JSONP",
			success: function (data) {
				console.log(data);
				document.getElementById('groupID').textContent = "SUCCESS!"
			}
		}
	)
}
