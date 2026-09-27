// Static replacement for images/header/rotate.php: pick a random header image on each page load.
(function () {
	var images = ["fly", "lines", "robot", "shapes", "shapes2", "shapes3", "solo", "solo2", "two"];
	var pick = images[Math.floor(Math.random() * images.length)];
	document.addEventListener("DOMContentLoaded", function () {
		var header = document.getElementById("header");
		if (header) header.style.backgroundImage = 'url("/images/header/' + pick + '.gif")';
	});
})();
