const localJSONStorage = window.localStorage;

localJSONStorage.__proto__.setJSON = function(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
};
localJSONStorage.__proto__.getJSON = function(key) {
	return JSON.parse(localStorage.getItem(key));
};

export default localJSONStorage;