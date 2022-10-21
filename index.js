
function distanceFromHqInBlocks (someValue) {
  if (someValue<42){
    return(42-someValue);
  }
  else {

  return(someValue-42);
}
}

function distanceFromHqInFeet(pickUp){   let disfeet= (distanceFromHqInBlocks(pickUp))*264;   return disfeet;};

function distanceTravelledInFeet (a,b) {
if (a<b){
  return (b-a)*264
}
else if (a>b){
  return (a-b)*264
}
}
const feetTravelled = console.log(distanceTravelledInFeet(34,28))
function calculatesFarePrice(start,destination){
  const distance = distanceTravelledInFeet(start,destination);
  if (distance< 400){
    return 0;
  }
 else if (distance>=400 && distance<=2000){
    return (distance-400)* 0.02;
  }
  else if(distance>2000 && distance<=2500){
    return 25;
  }
  else if (distance > 2500){
    return "cannot travel that far";
  }
} 