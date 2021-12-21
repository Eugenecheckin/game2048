(function(window){	
	window.GetRandomNxtNumber = function(){
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
	};
	window.GetRandomInt = function (min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; 
	};
	window.GetNewMass = function () {	
		let arr = new Array(4);
    for(let i=0;i<4;i++)
    {
        arr[i] = new Array(4);        
    }
		for(let i=0;i<4;i++)
    {
			for(let k=0;k<4;k++)
    	{
				arr[i,k]="0";
			}
		}
		let i = this.GetRandomInt(1,5);
		let k = this.GetRandomInt(1,5);
		arr[i,k]= this.GetRandomNxtNumber();
		return arr;
	};

	/*["0","0","1","1","0","1"]*/
	window.GetMoveStr = function(arr_str){
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
	};
	
	
	window.UpdateMass = function (arr,direction) {
		switch(direction){
			case "top":{

				for( let i=0; i<4;i++){


				}
			}
			case "bottom":{}
			case "right" :{}
			case "left" :{}
		}
		
	};
})(window);
