import {GetNewMass} from `./common.js`;
import {GetScore} from `./common.js`;
import {EvHandlUpdateMass} from `./common.js`;
import {InitMass} from `./common.js`


GetNewMass();

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
              elem.style.background = 'rgb(238, 228, 218)';
              }	else {
                elem.innerHTML = '';
                elem.style.background = 'rgb(205, 190, 180)';
              }
            }
          }
        }
      }
      let elem = window.document.getElementById(`scope_now`);
      elem.innerHTML = GetScore(InitMass);
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
  elem.innerHTML = GetScore(InitMass);	
}

let updatePlates = new UpdatePlates();
window.addEventListener('load', InitGame);
window.addEventListener('keydown', updatePlates);