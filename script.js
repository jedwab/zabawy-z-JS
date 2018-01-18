var direction = 'right';
var movement = 0;

    $("#heading").offset({ left: movement, top: movement });

    var moveHeading = function () {
      if (direction === 'right') {
        $("#heading").offset({ left: movement });
        movement++;
        if (movement > 200) {
          movement = 0;
          direction = 'down';
        }
      } else if (direction === 'down') {
        $("#heading").offset({ top: movement });
        movement++;
        if (movement > 200) {
          movement = 200;
          direction = 'left';
        }
      } else if (direction === 'left') {
        $("#heading").offset({ left: movement });
        movement--;
        if (movement < 0) {
          movement = 200;
          direction = 'up';
        }
      } else if (direction === 'up') {
        $("#heading").offset({ top: movement });
        movement--;
        if (movement < 0) {
          movement = 0;
          direction = 'right';
        }
      }
    };
   setInterval (moveHeading, 30);