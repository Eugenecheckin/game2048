(function(window){
	window.getNxtNumber = /*$('button').click*/(function(){
  	var arr = [ 
  	{ 
    	title: "2",
    	r: 1 
  	}, {
    	title: "4",
    	r: 0.1 
  	}]; 
  	var rand = Math.random();
  	for (var i = 0; i < arr.length; i++) {
    	if (rand < arr[i].r) {
      	 return arr[i].title;
      	break;
    	}
  	}
});


})(window);
