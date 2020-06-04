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
	"5.107"
);

function getAlbumToPictures(groupID, albumID) {
	// https://vk.com/album150783035_241621908
	VK.api(
		"photos.get",
		{ owner_id: groupID, album_id: albumID, rev: 0, v: version },
		function (data) {
			console.log(data);
			pictures = data.response.items;
		}
	);
}

function postPicturesToWall(groupID) {
	var timerOffset = 500;

	timerPostPictures = setInterval(() => postWall(groupID), timerOffset);

	setTimeout(() => {
		clearInterval(timerPostPictures);
		postWall();
	}, timerOffset * 10);

	for (let index = 0; index < pictures.length; index++) {
		const element = array[index];
	}
}

function postWall(groupID, photoID) {
	if (pictures.length > 0) {
		VK.api(
			"wall.post",
			{
				owner_id: groupID,
				message: "",
				attachment: "photo"+pictures.pop().id,
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
