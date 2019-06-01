class Input {



	static updateMousePos( evt ) {
		var rect = World.canvas.getBoundingClientRect();
		var root = document.documentElement;

		MouseInput.x = evt.clientX - rect.left - root.scrollLeft;
		MouseInput.y = evt.clientY - rect.top - root.scrollTop;
	}

	static arrowMove(evt){

    document.onkeydown = function(evt) {
        switch (evt.keyCode) {
           case 37:
                //alert('Left key pressed');
                
              break;
           case 38:
                //alert('Up key pressed');
              break;
           case 39:
                //alert('Right key pressed');
              break;
           case 40:
                //alert('Down key pressed');
              break;
        }
    };

	}
}