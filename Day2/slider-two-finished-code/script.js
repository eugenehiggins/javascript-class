
var image = document.getElementById("slider-image");

var currentImageIndex = 1;
var currentImage = "images/matterhorn" + currentImageIndex + ".jpg";

	// assign the previous button click listener
var prevBtn = document.querySelector("#previous");
prevBtn.addEventListener("click", function(){
	
	if (currentImageIndex === 1) {
		currentImageIndex = 4; 
	} else {
		currentImageIndex--;
	}
	
	image.src = "images/matterhorn" + currentImageIndex + ".jpg"; 

});

// assign the next button click listener
var nextBtn = document.querySelector("#next");
nextBtn = addEventListener("click", function(){

	if (currentImageIndex === 4) {
		currentImageIndex = 1; 
	} else {
		currentImageIndex++;
	}
	
	image.src = "images/matterhorn" + currentImageIndex + ".jpg"; 

});

var changeImageSrc = function(int){

}
