window.GetNewMass();
class UpdatePlates{
	handleEvent(event){
		let method = event.code;
		this[method](event);
	}
	updateFromArr(){
		if (window.InitMass!=null){
			for(let i=0; i<4;i++){
				for(let k=0; k<4; k++){
					if(window.InitMass[i][k]!=undefined){					
							let elem = window.document.getElementById(`i${i}${k}`); 
							if(window.InitMass[i][k]!=0){
								elem.innerHTML = window.InitMass[i][k];
								elem.style.background='rgb(238, 228, 218)';
							}
							else{
								elem.innerHTML = '';
								elem.style.background='rgb(205, 190, 180)';
							}
						}
					}
				}
			}
			let elem = window.document.getElementById(`scope_now`);
			elem.innerHTML = window.GetScore(window.InitMass);
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
						elem.style.background='rgb(238, 228, 218)';
					}					
					else{
						elem.innerHTML = '';
						elem.style.background='rgb(205, 190, 180)';

					}
				}
			}
		}
	}
	let elem = window.document.getElementById(`scope_now`);
	elem.innerHTML = window.GetScore(window.InitMass);	
}
let updatePlates = new UpdatePlates();
window.addEventListener('load', InitGame);
window.addEventListener('keydown', updatePlates);