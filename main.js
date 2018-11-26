window.onload=function(){

let toggle = document.getElementById('container');
let toggleContainer = document.getElementById('toggle-container');
let toggleNumber;
let body = document.body;
let loader = document.getElementById('cover');

setTimeout(() => {
    loader.style.top = "100%";
    loader.style.opacity = "0";
}, 2000);

toggle.addEventListener('click', function() {
	toggleNumber = !toggleNumber;
	if (toggleNumber) {
		toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
        toggleContainer.style.backgroundColor = 'rgb(202, 202, 202)';
        toggleContainer.style.color = "black";
        setNight();
	} else {
		toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
        toggleContainer.style.backgroundColor = 'rgb(0, 1, 14)';
        toggleContainer.style.color = "white";
        setDay();
	}
	console.log(toggleNumber)
});

function setDay() {
    body.style.backgroundColor = "white";
    body.style.color = "black";
};

function setNight() {
    body.style.backgroundColor = "black";
    body.style.color = "white";
};


}

