$(document).ready(function() {

	// Opens the card with animation when user clicks on the open button
	$(document).on('click','.open-btn', function() {
		$('.card').addClass('open');
		return false;
	});
	
	// Closes the card when user clicks on the close button
	$(document).on('click','.close-btn', function() {
		$('.card').removeClass('open');
		return false;
	});



// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0,0,150,75);

// var myCircle = new Path.Circle(new Point(100, 70), 50);
// myCircle.fillColor = 'black';


var canvas = document.getElementById('myCanvas');


	// Create an empty project and a view for the canvas:
	paper.setup(canvas);

	var smallStar = new paper.Path.Star({
    center: [50, 50],
    points: 24,
    radius1: 3,
    radius2: 25,
    fillColor: 'red'
	});

	function onFrame(event) {
		// Each frame, change the fill color of the path slightly by
		// adding 1 to its hue:
		smallStar.fillColor.hue += 1;
	}



	// Draw the view now:
	paper.view.draw();






});