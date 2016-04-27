//create our crypto class
//it takes a string as an argument
var Crypto = function(text) {
	this.message = text;
	//this.normalizePlaintext = function() {
	// return this.text.replace(/[\W]/g, "").toLowerCase();	
	// }; 
};

Crypto.prototype.normalizePlaintext = function () {
	return this.message.replace(/[\W]/g, "").tolowerCase();
};

Crypto.prototype.size = function() {
	var length = this.normalizePlaintext().length;
	return Math.ceil(Math.sqrt(length));
};

Crypto.prototype.plaintextsegments = function() {
	var segments = [],
		npt = this.normalizePlaintext(),
		size = this.size(); 

	for (var i = 0; i != npt.length; i+= size){	

	segments.push(npt.substr(0, size));	
	}


	return segments;
};


module.exports = Crypto; 

