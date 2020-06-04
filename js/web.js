var version = 5.73;

VK.init(
	function () {
		console.log("VK API success!");
	},
	function () {
		console.log("VK API fail!");
	},
	"5.107"
);

function postWall(groupID, text) {
	VK.api(
		"wall.post",
		{ owner_id: groupID, message: text, from_group: 1, v: version },
		function (data) {
			console.log(data);
		}
	);
}
