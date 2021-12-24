function GetRandomNxtNumber() {
	let arr = [ 
	{ 
		title: 4,
		r: 0.1     	
	}, 
	{
		title: 2,
		r: 1 
	}]; 
	let rand = Math.random();
	for (let i = 0; i < arr.length; i++) {
		if (rand < arr[i].r) {
			return arr[i].title;
		}
	}
}

function GetRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; 
}

function GetNewMass() {	
	let arr = new Array(4);

	for(let i = 0; i < 4; i++) {
		arr[i] = new Array(4);        
	}

	for(let i = 0; i < 4; i++) {
		arr[i] = new Array(4);        
	}

	for(let i = 0; i < 4; i++) {
		for(let k = 0; k < 4; k++) {
			arr[i][k] = 0;
		}
	}
	let i = GetRandomInt(0,4);
	let k = GetRandomInt(0,4);
	arr[i][k] = GetRandomNxtNumber();
	return arr;
}

function GetMoveStr(arr_str, direction) {
	let preRes = [];
	arr_str.forEach((element) => {
		if (element != 0) {
			preRes.push(element);
		}					
	})

	if (preRes.length==0) {
		return [0,0,0,0]
	}

	if (direction==='bottom'||
			direction==='left') {
		for(let i = (preRes.length - 1); i >= 0; i--) {
			if (preRes[i-1] == undefined) { continue; }
			if (preRes[i] === preRes[i-1]) {
				preRes[i-1] = preRes[i] * 2;
				preRes[i] = 0;
				break;
			}
		}
	} else {
		preRes.forEach((el, i, arr) => {
			if (el === arr[i+1]) {
			arr[i] = el * 2;
			arr[i+1] = 0;
			}
		})  
	}

	let res = preRes.filter(item => item > 0);

	while (res.length < 4) {
		if (direction === 'bottom'||
				direction === 'left'
		) {
			res.push(0);
		} else {		
			res.unshift(0);	
		}				
	}			
	return res;
}

function UpdateMass(arr, direction) {
	switch(direction) {
		case "top" : {
			let arr_0 = [];
			let arr_1 = [];
			let arr_2 = [];
			let arr_3 = [];
			
			for( let i = 0; i < 4; i++) {
				arr_0.push(arr[i][0]);
				arr_1.push(arr[i][1]);
				arr_2.push(arr[i][2]);
				arr_3.push(arr[i][3]);
			}
			
			let arr_sort_0 = GetMoveStr(arr_0, 'top');
			let arr_sort_1 = GetMoveStr(arr_1, 'top');
			let arr_sort_2 = GetMoveStr(arr_2, 'top');
			let arr_sort_3 = GetMoveStr(arr_3, 'top');	
			
			for(let i = 0; i < 4; i++) {
				arr[i][0] = arr_sort_0[i];
				arr[i][1] = arr_sort_1[i];
				arr[i][2] = arr_sort_2[i];
				arr[i][3] = arr_sort_3[i];
			}
			return arr;		
		}
		case "bottom": {
			let arr_0 = [];
			let arr_1 = [];
			let arr_2 = [];
			let arr_3 = [];
			
			for( let i = 0; i < 4; i++) {
				arr_0.push(arr[i][0]);
				arr_1.push(arr[i][1]);
				arr_2.push(arr[i][2]);
				arr_3.push(arr[i][3]);
			}
			
			let arr_sort_0 = GetMoveStr(arr_0, 'bottom');
			let arr_sort_1 = GetMoveStr(arr_1, 'bottom');
			let arr_sort_2 = GetMoveStr(arr_2, 'bottom');
			let arr_sort_3 = GetMoveStr(arr_3, 'bottom');				
			
			for(let i = 0; i < 4; i++) {
				arr[i][0] = arr_sort_0[i];
				arr[i][1] = arr_sort_1[i];
				arr[i][2] = arr_sort_2[i];
				arr[i][3] = arr_sort_3[i];					
			}
			return arr;			
		}			
		case "right" : {
			let arr_0 = [];
			let arr_1 = [];
			let arr_2 = [];
			let arr_3 = [];
			for( let i = 0; i < 4; i++) {
				arr_0.push(arr[0][i]);
				arr_1.push(arr[1][i]);
				arr_2.push(arr[2][i]);
				arr_3.push(arr[3][i]);
			}
			let arr_sort_0 = GetMoveStr(arr_0, 'right');
			let arr_sort_1 = GetMoveStr(arr_1, 'right');
			let arr_sort_2 = GetMoveStr(arr_2, 'right');
			let arr_sort_3 = GetMoveStr(arr_3, 'right');	
			for(let i = 0; i < 4; i++) {
				arr[0][i] = arr_sort_0[i];
				arr[1][i] = arr_sort_1[i];
				arr[2][i] = arr_sort_2[i];
				arr[3][i] = arr_sort_3[i];
			}
			return arr;			
		}
		case "left" : {
			let arr_0 = [];
			let arr_1 = [];
			let arr_2 = [];
			let arr_3 = [];
			for( let i = 0; i < 4; i++) {
				arr_0.push(arr[0][i]);	
				arr_1.push(arr[1][i]);
				arr_2.push(arr[2][i]);
				arr_3.push(arr[3][i]);
			}
			let arr_sort_0 = GetMoveStr(arr_0, 'left');
			let arr_sort_1 = GetMoveStr(arr_1, 'left');
			let arr_sort_2 = GetMoveStr(arr_2, 'left');
			let arr_sort_3 = GetMoveStr(arr_3, 'left');					
			for(let i = 0; i < 4; i++)
			{
				arr[0][i] = arr_sort_0[i];
				arr[1][i] = arr_sort_1[i];
				arr[2][i] = arr_sort_2[i];
				arr[3][i] = arr_sort_3[i];					
			}
			return arr;			
		}
		default: return arr;
	}		
}
function AddNumbMass(arr) {
	let lstIndZero = [];
	for(let i = 0; i < 4; i++) {
		for(let k = 0; k < 4; k++) {
			if(arr[i][k] === 0) {
				lstIndZero.push(`${i}|${k}`);
			}
		}
	}
	if (lstIndZero.length === 0) return arr;
	let rnd = GetRandomInt(0, lstIndZero.length);
	let newI = lstIndZero[rnd][0];
	let newK = lstIndZero[rnd][2];
	arr[newI][newK] = GetRandomNxtNumber();
	return arr;
}

let InitMass = GetNewMass();

function EvHandlUpdateMass(direction) {
	let updMass = UpdateMass(InitMass, direction);
	return AddNumbMass(updMass);
}

function GetScore() {
	let sum = 0;
	if (InitMass != null) {
		for(let i = 0; i < 4; i++) {
			for(let k=0; k<4; k++) {
				if(InitMass[i][k] != undefined){
					sum+= Number(InitMass[i][k]);
				}
			}
		}
	}
	return sum;
}

let PlateStyle = [ 
	{ numb: 2, bColor: 'rgb(238, 228, 218)' },
	{ numb: 4, bColor: 'rgb(238, 225, 201)' },
	{ numb: 8, bColor: 'rgb(243, 178, 122)' },
	{ numb: 16, bColor: 'rgb(246, 150, 100)' },
	{ numb: 32, bColor: 'rgb(247, 124, 95)' },
	{ numb: 64, bColor: 'rgb(247, 95, 59)' },
	{ numb: 128, bColor: 'rgb(237, 208, 115)' },    
];

class UpdatePlates {
  handleEvent(event) {
    let method = event.code.toLowerCase();
    this[method](event);
  }
  updateFromArr() {
    if (InitMass != null) {
      for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 4; k++) {
          if (InitMass[i][k] != undefined) {					
            let elem = window.document.getElementById(`i${i}${k}`); 
            if (InitMass[i][k] != 0) {
              elem.innerHTML = InitMass[i][k];
							let findCollor = InitMass[i][k];
							let colorPL = PlateStyle.find(i => i.numb == findCollor);
							if (colorPL != undefined) {
								elem.style.background = colorPL.bColor;
							  } else {
                  elem.style.background = 'rgb(238, 228, 218)';
							  }               
              }	else {
                elem.innerHTML = '';
                elem.style.background = 'rgb(205, 190, 180)';
              }
            }
          }
        }
      }
      let elem = window.document.getElementById(`scope_now`);
      elem.innerHTML = GetScore();
  }
  arrowup() {
    InitMass = EvHandlUpdateMass('bottom');
    this.updateFromArr();	
  }
  arrowdown() {
    InitMass = EvHandlUpdateMass('top');		
    this.updateFromArr();	
  }
  arrowright() {
    InitMass = EvHandlUpdateMass('right');
    this.updateFromArr();	
  }
  arrowleft() {
    InitMass = EvHandlUpdateMass('left');
    this.updateFromArr();	
  }
}

function InitGame(event) {
  if (InitMass != null) {
  for(let i = 0; i < 4; i++) {
    for(let k = 0; k < 4; k++) {
      if(InitMass[i][k] != undefined) {					
        let elem = window.document.getElementById(`i${i}${k}`);
        if(InitMass[i][k] != 0) {
          elem.innerHTML = InitMass[i][k];
          elem.style.background = 'rgb(238, 228, 218)';
        } else {
          elem.innerHTML = '';
          elem.style.background = 'rgb(205, 190, 180)';
        }
      }
    }
  }
}
  let elem = window.document.getElementById(`scope_now`);
  elem.innerHTML = GetScore();	
}

let updatePlates = new UpdatePlates();
window.addEventListener('load', InitGame);
window.addEventListener('keydown', updatePlates);