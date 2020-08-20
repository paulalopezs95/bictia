document.addEventListener("DOMContentLoaded", function (event) {
	document.getElementById("smart_thumbnail");
	var thumbnailElement = document.getElementById("smart_thumbnail");
	thumbnailElement.addEventListener("click", function () {
		if (thumbnailElement.className === "small") {
			thumbnailElement.className = "";
		} else {
			thumbnailElement.className = "small";
		}
	});
});


