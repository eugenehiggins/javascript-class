// assign the next button click listener
var nextBtn = document.querySelector("#next");
nextBtn = addEventListener("click", nextSlide);

// assign the previous button click listener
var prevBtn = document.querySelector("#previous");
prevBtn.addEventListener("click", prevSlide);


function nextSlide(e) {
	console.log(this);
	var lastSlide = document.getElementById("slider").lastElementChild;
	var firstSlide = document.getElementById("slider").firstElementChild;

	var oldActive = document.querySelector("#active");
	oldActive.id = "";
	oldActive.style.display = "none";
	
	if (oldActive == lastSlide) {
		active = firstSlide;
	} else {
		active = oldActive.nextElementSibling;
	}
	
	active.id = "active";
	active.style.display = "block";

	//e.stopPropagation();
}

function prevSlide(e){
	var lastSlide = document.getElementById("slider").lastElementChild;
	var firstSlide = document.getElementById("slider").firstElementChild;

	var oldActive = document.querySelector("#active");
	oldActive.id = "";
	oldActive.style.display = "none";
	
	if (oldActive == firstSlide) {
		active = lastSlide;
	} else {
		active = oldActive.previousElementSibling;
	}
	
	active.id = "active";
	active.style.display = "block";
	
	//e.stopPropagation();
}
