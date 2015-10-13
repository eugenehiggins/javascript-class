
var image = document.getElementById("slider-image");

var currentImageIndex = 0;

slideArray = ["matterhorn1.jpg","matterhorn2.jpg","matterhorn3.jpg","matterhorn4.jpg"];
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
