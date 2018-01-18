var movementToLeft = 0;

var moveHeading = function () {
	$ ("#heading").offset({left: movementToLeft});
	movementToLeft ++;

	if (movementToLeft > 200) {
		movementToLeft = 0;
	}
};
setInterval (moveHeading, 30);