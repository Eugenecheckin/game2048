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
				arr[i][k]="0";
			}
		}
		let i = this.GetRandomInt(0,4);
		let k = this.GetRandomInt(0,4);
		arr[i][k]= this.GetRandomNxtNumber();
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
				let arr_0 =[];
				let arr_1 =[];
				let arr_2 =[];
				let arr_3 =[];
				for( let i=0; i<4;i++){
					arr_0.push(arr[i][0]);
					arr_1.push(arr[i][1]);
					arr_2.push(arr[i][2]);
					arr_3.push(arr[i][3]);
				}
				let arr_sort_0 = window.GetMoveStr(arr_0);
				let arr_sort_1 = window.GetMoveStr(arr_1);
				let arr_sort_2 = window.GetMoveStr(arr_2);
				let arr_sort_3 = window.GetMoveStr(arr_3);	
				for(let i=0; i<4; i++)
				{
					arr[i][0] = arr_sort_0[i];
					arr[i][1] = arr_sort_1[i];
					arr[i][2] = arr_sort_2[i];
					arr[i][3] = arr_sort_3[i];
				}
				return arr;		
			}
			case "bottom":{
				let arr_0 =[];
				let arr_1 =[];
				let arr_2 =[];
				let arr_3 =[];
				for( let i=0; i<4;i++){
					arr_0.push(arr[i][0]);
					arr_1.push(arr[i][1]);
					arr_2.push(arr[i][2]);
					arr_3.push(arr[i][3]);
				}
				let arr_sort_0 = window.GetMoveStr(arr_0);
				let arr_sort_1 = window.GetMoveStr(arr_1);
				let arr_sort_2 = window.GetMoveStr(arr_2);
				let arr_sort_3 = window.GetMoveStr(arr_3);
				let k = 3;	
				for(let i=0; i<4; i++)
				{
					arr[i][0] = arr_sort_0[k];
					arr[i][1] = arr_sort_1[k];
					arr[i][2] = arr_sort_2[k];
					arr[i][3] = arr_sort_3[k];
					k--;
				}
				return arr;			
			}			
			case "right" :{
				let arr_0 =[];
				let arr_1 =[];
				let arr_2 =[];
				let arr_3 =[];
				for( let i=0; i<4;i++){
					arr_0.push(arr[0][i]);
					arr_1.push(arr[1][i]);
					arr_2.push(arr[2][i]);
					arr_3.push(arr[3][i]);
				}
				let arr_sort_0 = window.GetMoveStr(arr_0);
				let arr_sort_1 = window.GetMoveStr(arr_1);
				let arr_sort_2 = window.GetMoveStr(arr_2);
				let arr_sort_3 = window.GetMoveStr(arr_3);	
				for(let i=0; i<4; i++)
				{
					arr[0][i] = arr_sort_0[i];
					arr[1][i] = arr_sort_1[i];
					arr[2][i] = arr_sort_2[i];
					arr[3][i] = arr_sort_3[i];
				}
				return arr;			
			}
			case "left" :{
				let arr_0 =[];
				let arr_1 =[];
				let arr_2 =[];
				let arr_3 =[];
				for( let i=0; i<4;i++){
					arr_0.push(arr[0][i]);
					arr_1.push(arr[1][i]);
					arr_2.push(arr[2][i]);
					arr_3.push(arr[3][i]);
				}
				let arr_sort_0 = window.GetMoveStr(arr_0);
				let arr_sort_1 = window.GetMoveStr(arr_1);
				let arr_sort_2 = window.GetMoveStr(arr_2);
				let arr_sort_3 = window.GetMoveStr(arr_3);	
				let k = 3;
				for(let i=0; i<4; i++)
				{
					arr[0][i] = arr_sort_0[k];
					arr[1][i] = arr_sort_1[k];
					arr[2][i] = arr_sort_2[k];
					arr[3][i] = arr_sort_3[k];
					k--;
				}
				return arr;			
			}
		}		
	};
	window.AddNumbMass = function (arr) {
		let lstIndZero = [];
		for(let i = 0; i<4; i++){
			for(let k = 0; k<4; k++){
				if(arr[i][k]==0){
					lstIndZero.push("{i}|{k}");
				}
			}
		}
		if (lstIndZero.length==0) return arr;
		let rnd = window.GetRandomInt(0,lstIndZero.length);
		let newI = lstIndZero[rnd][0];
		let newK = lstIndZero[rnd][2];
		arr[newI,newK] = window.GetRandomNxtNumber();
		return arr;

	};

	window.TestMass = window.GetNewMass();
	window.TestUpdateMass = function (direction){
	let updMass = window.UpdateMass(window.TestMass, direction);
	return window.AddNumbMass(updMass);
	};
	
})(window);
