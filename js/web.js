var version = 5.73;

var pictures = {};

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
		}
	);
}

function postWall(groupID, text) {
	VK.api(
		"wall.post",
		{ owner_id: groupID, message: text, from_group: 1, v: version },
		function (data) {
			console.log(data);
		}
	);
}
