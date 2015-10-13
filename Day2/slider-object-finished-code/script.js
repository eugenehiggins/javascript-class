
var image = document.getElementById("slider-image");

var currentImageIndex = 0;

slideArray = ["matterhorn1.jpg","matterhorn2.jpg","matterhorn3.jpg","matterhorn4.jpg"];

slideObject = [{
	'title':'Slide One'
	'filename':'matterhorn1.jpg',
	'copy':'This is the text for slide 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat.',
	'url':'page1.html'

},{},{},{}];

var currentImage = "images/" + slideArray[currentImageIndex];

	// assign the previous button click listener
	var prevBtn = document.querySelector("#previous");
	prevBtn.addEventListener("click", function(){

		if (currentImageIndex === 0) {
			currentImageIndex = 3; 
		} else {
			currentImageIndex--;
		}

		image.src = "images/" + slideArray[currentImageIndex]; 

	});

// assign the next button click listener
var nextBtn = document.querySelector("#next");
nextBtn = addEventListener("click", function(){

	if (currentImageIndex === 3) {
		currentImageIndex = 0; 
	} else {
		currentImageIndex++;
	}
	
	image.src = "images/" + slideArray[currentImageIndex];

});

var changeImageSrc = function(int){

}
