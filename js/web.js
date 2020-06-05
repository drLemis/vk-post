var version = 5.73;

var pictures = {};

var timerPostPictures;

VK.init(
	function () {
		console.log("VK API success!");
	},
	function () {
		console.log("VK API fail!");
	},
	version
);

function getAlbumToPictures(groupID, albumID) {
	VK.api(
		"photos.get",
		{ owner_id: groupID, album_id: albumID, rev: 0, v: version },
		function (data) {
			pictures = data.response.items;
		}
	);
}

function postPicturesToWall(groupID) {
	var timerOffset = 500;

	timerPostPictures = setInterval(() => postWall(groupID), timerOffset);
}

function postWall(groupID) {
	if (pictures.length > 0) {
		var picID = "photo" + groupID + "_" + pictures.pop().id;
		console.log(picID);
		VK.api(
			"wall.post",
			{
				owner_id: groupID,
				message: pictures.length,
				attachment: picID,
				from_group: 1,
				v: version,
			},
			function (data) {
				console.log(data);
			}
		);
	} else {
		clearInterval(timerPostPictures);
	}
}
