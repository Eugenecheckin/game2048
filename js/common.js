(function(window){
	
	window.getNxtNumber = (function(){
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
	/*["0","0","1","1","0","1"]*/
	window.getMoveStr = function(arr_str){
		let preRes = [];
		arr_str.forEach((element, i, arr) => {
			if (element!=0){
			preRes.push(arr[i]);
			}					
		})		
		if (preRes.length==0){return ["0","0","0","0"]}
		preRes.forEach((el,i,arr)=>{
			if(el==arr[i+1]){
			arr[i]=el*2;
			arr[i+1]=0
			}
		})
		let res = preRes.filter(item=>item>0)
		while(res.length<4){
		res.unshift("0");
		}
	return res;
	}
})(window);
