window.GetNewMass();
class UpdatePlates{
	handleEvent(event){
		let method = event.code;
		this[method](event);
	}
	updateFromArr(){
		if (window.GetNewMass!=null){
			for(let i=0; i<4;i++){
				for(let k=0; k<4; k++){
					if(window.InitMass[i][k]!=undefined){					
							let elem = window.document.getElementById(`i${i}${k}`); 
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
			let elem = window.document.getElementById(`score`);
			elem.innerHTML = window.GetScore();
	}	
	ArrowUp(){
		window.InitMass = window.EvHandlUpdateMass('bottom');
		this.updateFromArr();	
	}
	ArrowDown(){
		window.InitMass = window.EvHandlUpdateMass('top');		
		this.updateFromArr();	
	}
	ArrowRight(){
		window.InitMass = window.EvHandlUpdateMass('right');
		this.updateFromArr();	
	}
	ArrowLeft(){
		window.InitMass = window.EvHandlUpdateMass('left');
		this.updateFromArr();	
	}
}
function InitGame(event) {
	if (window.InitMass!=null){
	for(let i=0; i<4;i++){
		for(let k=0; k<4; k++){
			if(window.InitMass[i][k]!=undefined){					
					let elem = window.document.getElementById(`i${i}${k}`);
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
window.addEventListener('load', InitGame);
window.addEventListener('keydown', _updatePlates);