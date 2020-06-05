var version = 5.73;
var pictures = {};

VK.init(
	function () {
		console.log("VK API success!");
	},
	function () {
		console.log("VK API fail!");
	},
	version
);

function getAlbumToPictures(groupID, albumID, wallID) {
	VK.api(
		"photos.get",
		{ owner_id: groupID, album_id: albumID, rev: 0, v: version },
		function (data) {
			pictures = data.response.items;
			postWall(groupID, wallID);
		}
	);
}

function postWall(groupID, wallID) {
	if (pictures.length > 0) {
		var picID = "photo" + groupID + "_" + pictures.pop().id;
		console.log(picID);
		VK.api(
			"wall.post",
			{
				owner_id: wallID,
				attachment: picID,
				from_group: 1,
				v: version,
			},
			function (data) {
				postWall(groupID, wallID);
			}
		);
	}
}
