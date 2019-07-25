function luminanace(r, g, b) {
	var a = [ r, g, b ].map(function(v) {
		v /= 255;
		return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
	});
	return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function contrast(background, foreground) {
	return ((luminanace(background[0], background[1], background[2]) + 0.05) /
		(luminanace(foreground[0], foreground[1], foreground[2]) + 0.05)).toFixed(1);
}

function colorHexToRgb(hexColor) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
	return result ? [ parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16) ] : null;
}

console.log(contrast(colorHexToRgb('#ffffff'), colorHexToRgb('#595959')));
