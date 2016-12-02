(function(){
	document.addEventListener('DOMContentLoaded', init);
	function init() {
		var ctx = document.getElementById("imageCaptcha").getContext('2d'),
		    x, y = 0,
		    height = 100,
		    width = 200;
		    
		for(y = 0; y < height; y++) {
		    for(x = 0; x < width; x++) {
		        ctx.fillStyle = getRndColor();
		        ctx.fillRect(x, y, 1, 1);
		    }
		}

		var text = getRandomText();

		ctx.globalCompositeOperation = 'destination-in';
		ctx.rect(0, 0, width, height);
		ctx.fill();
		ctx.globalCompositeOperation = 'source-atop';
		ctx.font = "italic 50px Tahoma";
		ctx.fillStyle = getRandomLightColor();
		var tsize = get_tex_size(text, "50px Tahoma");
		ctx.fillText(text, (0.5 * (width - tsize.width)), (0.5 * (height + tsize.height)), 0.9 * width);
	}

	// http://stackoverflow.com/questions/1152024/best-way-to-generate-a-random-color-in-javascript
	function getRandomLightColor() {
	  // 30 random hues with step of 12 degrees
	  var hue = Math.floor(Math.random() * 30) * 12;

	  return $.Color({
	    hue: hue,
	    saturation: 0.9,
	    lightness: 0.6,
	    alpha: 1
	  }).toHexString();
	};

	//http://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
	function  getRandomText() {
		return Math.random().toString(36).slice(2).substr(0,6).toUpperCase();
	}

	function get_tex_size(txt, font) {
	    this.element = document.createElement('canvas');
	    this.context = this.element.getContext("2d");
	    this.context.font = font;
	    var tsize = {'width':this.context.measureText(txt).width, 'height':parseInt(this.context.font)};
	    return tsize;
	}

	function getRndColor() {
	    var r = 255*Math.random()|0, //removes decimal
	        g = 255*Math.random()|0,
	        b = 255*Math.random()|0;
	    return 'rgb(' + r + ',' + g + ',' + b + ')';
	}
})();