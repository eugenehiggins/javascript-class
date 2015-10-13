//alert("hello");

var thumbnails = new Array();
var numberOfFiles = 9;
var thumbnailsDiv;
var allImagesLoaded = false;
var largeImage 
	
window.onload = function () {
	
	thumbnailsDiv = document.getElementById("thumbnailsScroller");
	largeImage = document.getElementById('large-image');
	
	preloadImages();
}

function preloadImages(){
	
	for(var i = 0; i < numberOfFiles; i++){
		thumbnails[i] = new Image();
		thumbnails[i].src = "images/img-" + (i +1) + ".jpg";
		thumbnails[i].onload = function (){
			this.setAttribute("class","thumb");
			// Add image to new div
			thumbnailsDiv.appendChild(this);

			// Add event listener for clickable thumbnails
			this.addEventListener("click", function(e){
				console.log (this)
				showLargeImage(this);
				var oldActive = document.getElementsByClassName("thumb active");
				
				oldActive[0].className = "thumb";
				this.className = "thumb active"
			});

			if (allImagesLoaded == false)  {
				checkIfAllImagesLoaded();
			}
		};
	}
}

function checkIfAllImagesLoaded(){
	// Keep track of how many images have loaded
	var loadedCount = 0;
	
	// Loop through all of the thumbnails in the array.
	// Check to see if each one has been loaded yet.
	for (var i = 0; i < thumbnails.length; i++) {
		if (thumbnails[i].complete) {
			// Add one to the `loadCount` variable
			// AKA increment the loadedCount variable
			loadedCount++;
		}
	}
	
	// When that's done, check to see if loadedCount is equal to
	// the numberOfFiles variable. If it is, set the first one as 
	// active, set the large image to show the first thumbnail
	if (loadedCount == numberOfFiles) {
		thumbnails[0].className += " active";
		showLargeImage(thumbnails[0]);
		allImagesLoaded = true;
		return;
	}
}

function showLargeImage (newImage){
	
	largeImage.src = newImage.src;

}
