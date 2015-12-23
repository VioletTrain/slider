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
		
		this.frame--;
		if(this.frame<0) this.frame = this.slides.length-1;
		this.set(this.slides[this.frame]);
	},
	right: function() {
		this.frame++;
		if(this.frame == this.slides.length) this.frame = 0;
		this.set(this.slides[this.frame]);
	}
};
window.onload = function () {
	slider.init();
	setInterval(function() {
	slider.right();
	}, 5000)
	};
