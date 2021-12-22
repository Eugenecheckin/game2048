window.GetNewMass();
class UpdatePlates{
	handleEvent(event){
		let method = event.code;
		this[method](event);
	}	
	ArrowUp(){
		window.InitMass = window.EvHandlUpdateMass('bottom');
		if (window.GetNewMass!=null){
			for(let i=0; i<4;i++){
				for(let k=0; k<4; k++){
					if(window.InitMass[i][k]!=undefined){					
							let elem = window.document.getElementById(`i${i}${k}`); /*window.ElemById("i01");/*`i${i}${k}`);.innerHTML = InitMass[i][k]*/
							elem.innerHTML = window.InitMass[i][k];
						}
					}
				}
			}	
	}
	ArrowDown(){
		window.InitMass = window.EvHandlUpdateMass('top');		
		if (window.GetNewMass!=null){
			for(let i=0; i<4;i++){
				for(let k=0; k<4; k++){
					if(window.InitMass[i][k]!=undefined){					
							let elem = window.document.getElementById(`i${i}${k}`); /*window.ElemById("i01");/*`i${i}${k}`);.innerHTML = InitMass[i][k]*/
							elem.innerHTML = window.InitMass[i][k];
						}
					}
				}
			}
	}
	ArrowRight(){
		window.InitMass = window.EvHandlUpdateMass('right');
		if (window.GetNewMass!=null){
			for(let i=0; i<4;i++){
				for(let k=0; k<4; k++){
					if(window.InitMass[i][k]!=undefined){					
							let elem = window.document.getElementById(`i${i}${k}`); /*window.ElemById("i01");/*`i${i}${k}`);.innerHTML = InitMass[i][k]*/
							elem.innerHTML = window.InitMass[i][k];
						}
					}
				}
			}
	}
	ArrowLeft(){
		window.InitMass = window.EvHandlUpdateMass('left');
		if (window.GetNewMass!=null){
			for(let i=0; i<4;i++){
				for(let k=0; k<4; k++){
					if(window.InitMass[i][k]!=undefined){					
							let elem = window.document.getElementById(`i${i}${k}`); /*window.ElemById("i01");/*`i${i}${k}`);.innerHTML = InitMass[i][k]*/
							elem.innerHTML = window.InitMass[i][k];
						}
					}
				}
			}
	}
}
function InitGame(event) {
	if (window.InitMass!=null){
	for(let i=0; i<4;i++){
		for(let k=0; k<4; k++){
			if(window.InitMass[i][k]!=undefined){					
					let elem = window.document.getElementById(`i${i}${k}`); /*window.ElemById("i01");/*`i${i}${k}`);.innerHTML = InitMass[i][k]*/
					elem.innerHTML = window.InitMass[i][k];
				}
			}
		}
	}	
}
let _updatePlates = new UpdatePlates();
window.addEventListener('load', InitGame)
window.addEventListener('keydown', _updatePlates);