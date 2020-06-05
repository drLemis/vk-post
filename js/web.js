var version = 5.73;

var groupID;
var albumID;
var wallID;
var datePost;
var timePost;
var errorPost;

var pictures = {};
var times = [];

function processInput() {
	groupID = document.getElementById("groupID").value;
	albumID = document.getElementById("albumID").value;
	wallID = document.getElementById("wallID").value;
	datePost = document.getElementById("datePost").value;
	timePost = document.getElementById("timePost").value.split(",");
	errorPost = document.getElementById("errorPost").value * 60;
}

VK.init(
	function () {
		console.log("VK API success!");
	},
	function () {
		console.log("VK API fail!");
	},
	version
);

function getAlbumToPictures() {
	VK.api(
		"photos.get",
		{ owner_id: groupID, album_id: albumID, rev: 0, v: version },
		function (data) {
			pictures = data.response.items;
			makeTimes();
			postWall();
		}
	);
}

function makeTimes() {
	times = [];

	var unixtimeStart = parseInt(
		(new Date(datePost).getTime() / 1000).toFixed(0)
	);

	var subindex = 0;

	for (let index = 0; index < pictures.Length; index++) {
		times.push(
			unixtimeStart +
				timePost[subindex] * 360 +
				getRandomInt(-errorPost, errorPost)
		);

		if (subindex++ >= timePost.Length) {
			subindex = 0;
			unixtimeStart += 86400; //new day
		}
	}

	console.log(times);
}

function postWall() {
	if (pictures.length > 0) {
		var picID = "photo" + groupID + "_" + pictures.pop().id;

		VK.api(
			"wall.post",
			{
				owner_id: wallID,
				attachment: picID,
				from_group: 1,
				publish_date: times.pop(),
				v: version,
			},
			function (data) {
				postWall();
			}
		);
	}
}

// ========

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
