new fullpage('#fullpage',{
	autoScrolling:true,
	navigation:true,
	anchors:['part1','part2','part3','part4','part5'],
	navigationTooltips:['HOME','OUR SERVICES','COMPANY','SWIFT CONSERVATION','BLOGS'],
	showActiveTooltip:true,
	

})







var looper;
var degrees =0;
var degrees2=0;

function rotateAnimation(el,speed){
	var elem = document.getElementById(el);
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotateY("+degrees+"deg)";
	} else if(navigator.userAgent.match("Firefox")){
		elem.style.MozTransform = "rotateY("+degrees+"deg)";
	} else if(navigator.userAgent.match("MSIE")){
		elem.style.msTransform = "rotateY("+degrees+"deg)";
	} else if(navigator.userAgent.match("Opera")){
		elem.style.OTransform = "rotateY("+degrees+"deg)";
	} else {
		elem.style.transform = "rotateY("+degrees+"deg)";
	}
	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
}


	function myfunction() {
  $("#maindiv").toggleClass('open');
}

$(function(){

			$('.slider-content').slick({

				nextArrow: ".right",
		  		prevArrow: ".left",
		  		autoplay:'true',
			});

		});



$("#myModal").on('hidden.bs.modal', function (e) {
    $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
});
