var Aplication = {};

Aplication.autoSelectSearch = function(){
	window.onload = function() {
		var keyword = document.getElementById('keyword');

		keyword.onclick = function(){
			this.select();
		};
	};
};
 
Aplication.autoSelectSearch();