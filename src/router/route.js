const wheelRollY = 53 //not random a value equal one roll from the mousse
const wheelSensitivity = 3;
const lastSection = 6;
const firstSection = 0;
let baseCounter = 0;

const wheelOffset = wheelRollY * wheelSensitivity;

const route = (wheelCounter, section) => { 
    let localSection = 0
    if(wheelCounter > baseCounter + wheelOffset){
      if(section < lastSection){
        localSection = section +1
        return localSection
      }else{
        return 0
      }
    }else if(wheelCounter < baseCounter - wheelOffset){
      if(section > firstSection){
        return localSection = section -1
      }else{
        return 0 
      }
    }else{
      return -1
    } 
  }

  export default route;