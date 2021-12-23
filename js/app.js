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
							if(window.InitMass[i][k]!=0){
								elem.innerHTML = window.InitMass[i][k];
							}
							else{
								elem.innerHTML = '';
							}
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
							if(window.InitMass[i][k]!=0){
								elem.innerHTML = window.InitMass[i][k];
							}
							else{
								elem.innerHTML = '';
							}
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
							if(window.InitMass[i][k]!=0){
								elem.innerHTML = window.InitMass[i][k];
							}
							else{
								elem.innerHTML = '';
							}	
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
							if(window.InitMass[i][k]!=0){
								elem.innerHTML = window.InitMass[i][k];
							}
							else{
								elem.innerHTML = '';
							}
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
					if(window.InitMass[i][k]!=0){
						elem.innerHTML = window.InitMass[i][k];
					}
					else{
						elem.innerHTML = '';
					}
				}
			}
		}
	}	
}
let _updatePlates = new UpdatePlates();
window.addEventListener('load', InitGame)
window.addEventListener('keydown', _updatePlates);