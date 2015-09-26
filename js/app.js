function animateLogo(){
	TweenMax.fromTo("#react-logo",1.5,{
		css:{
			top:"40px",
		}
	},{
		css:{top:"-40px"},
		repeat: -1,
		yoyo:true,
		ease: Power2.easeInOut
	});
}
function updateSliderControl(){

	var links = document.querySelectorAll("#slider-control a");

	for (var i = 0; i < links.length; i++) {
		var link =links[i];

		var section = document.querySelector(link.getAttribute("href"));
		console.log(link.getAttribute("href"));
		var sectionTop = section.offsetTop;
		var sectionButtom = sectionTop+window.innerHeight;

		console.log(sectionTop+ " "+sectionButtom);
		if(window.scrollY >=sectionTop && window.scrollY <sectionButtom){
			link.className = "active";
		} else {
			link.className = "";
		}

	};
}

function scrollToElement(element){
	var topOfElemnt = element.offsetTop;
	console.log("scrollToElement topOfElemnt:"+topOfElemnt);
	TweenMax.to(window,2,{
		scrollTo :{
			y:topOfElemnt,
		},
		ease:Power2.easeInOut,
	});
}

function addSmoothScrolling(){
	var links = document.querySelectorAll("#slider-control a");
	for (var i = 0; i < links.length; i++) {
		var link = links[i];
		link.addEventListener("click",function(event){
			event.preventDefault();
			var href = this.getAttribute("href");
			console.log("addSmoothScrolling href:"+href);
			scrollToElement(document.querySelector(href));
		});
	};

}

window.onscroll = function() {
  // ...
  updateSliderControl();
}

window.onload = function() {
  animateLogo();
  updateSliderControl();
  addSmoothScrolling();
  var t = new TimelineMax({yoyo: true, repeat: -1,ease: Power2.easeInOut});
	t.to("#android-robot",1,{rotation:"-60deg"}).to("#android-robot",1,{rotation:"-30deg"});//.to("#android-robot",1,{rotation:"45deg"});
};