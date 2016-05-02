/**
 * Created by oliver on 02/05/2016.
 */

function MockRepository(keySuffix, initialObjects) {
	this.__KEY_SUFFIX = keySuffix;

	var hasStoredObjects = function() {
		for (var i = 0; i < localStorage.length; i++) {
			var key = localStorage.key(i);
			if (key.indexOf(this.__KEY_SUFFIX) >= 0) {
				return true;
			}
		}
		return false;
	};

	// initialize
	if (initialObjects && !hasStoredObjects()) {
		initialObjects.forEach(function (obj) {
			localStorage[this.createObjectKey(obj.id)] = JSON.stringify(obj);
		}.bind(this));
	}

}

// --- API ---

MockRepository.prototype.forEach = function(func){
	for (var i = 0; i < localStorage.length; i++) {
		var key = localStorage.key(i);
		if (key.indexOf(this.__KEY_SUFFIX) >= 0) {
			func.call(this, JSON.parse(localStorage[key]));
		}
	}
};

MockRepository.prototype.createObjectKey = function(key){
	return this.__KEY_SUFFIX + '-' + key;
};


MockRepository.prototype.get = function (id) {
	return JSON.parse(localStorage[this.createObjectKey(id)]);
};

MockRepository.prototype.getAll = function () {
	var objects = [];
	this.forEach((obj) => { objects.push(obj); });
	return objects;
};

MockRepository.prototype.update = function (object) {
	localStorage[this.createObjectKey(object.id)] = JSON.stringify(object);
};

MockRepository.prototype.insert = function (object) {
	localStorage[this.createObjectKey(object.id)] = JSON.stringify(object);
};

MockRepository.prototype.count = function(predicate){
	var count = 0;
	this.forEach( (obj) => {
		if(predicate){ count += predicate(obj) ? 1 : 0; }
		else{ ++count; }
	});
	return count;
};


module.exports = MockRepository;