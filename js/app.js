var slider = {
	slides:['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg',
	'images/5.jpg', 'images/6.jpg','images/7.jpg', 'images/8.jpg', 'images/9.jpg'],
	frame: 0,
	set: function(image) {
		document.getElementById("imag").style.backgroundImage = "url("+image+")";
	},
	init: function() {
		this.set(this.slides[this.frame]);
	},
	left: function() {
		slider.frame--;
		if(slider.frame<0) slider.frame = slider.slides.length-1;
		slider.set(slider.slides[slider.frame]);
	},
	left_slide: function(){
		setInterval(this.left, 1000)
		
	},
	right: function() {
		slider.frame++;
		if(slider.frame == slider.slides.length) slider.frame = 0;
		slider.set(slider.slides[slider.frame]);
	},
	right_slide: function(){
		setInterval(this.right, 1000)
		
	}
	
};
window.onload = function () {
	slider.init();
	};
