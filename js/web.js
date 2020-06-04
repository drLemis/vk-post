var version = 5.73;

VK.init(
	function () {
		alert("Success!");
	},
	function () {
		alert("Fail!");
	},
	"5.107"
);

function postWall(groupID, text) {
	VK.api(
		"wall.post",
		{ owner_id: groupID, message: text, from_group: 1, v: version },
		function (data) {
			alert("Post ID:" + data.response.post_id);
		}
	);
}
