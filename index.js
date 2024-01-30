// Code your solution in this file!
function distanceFromHqInBlocks(pickUpBlocks) {
  const hqBlocksLocation = 42;
  if(pickUpBlocks > hqBlocksLocation) {
    return pickUpBlocks - hqBlocksLocation;

  } else {
    return hqBlocksLocation - pickUpBlocks;
  }
  
}

function distanceFromHqInFeet(pickUpBlocks) {
  const hqBlocksLocation = 42;
  if(pickUpBlocks > hqBlocksLocation) {
    return (pickUpBlocks - hqBlocksLocation) * 264;

  } else {
    return (hqBlocksLocation - pickUpBlocks) * 264;
  }
  
}function distanceTravelledInFeet(startLocation, traveledLocation) {
  if(traveledLocation > startLocation) {
    return (traveledLocation - startLocation) * 264;
  } else {
    return (startLocation - traveledLocation) * 264;
  }
}
function calculatesFarePrice(start, destination) {
    const traveledDisntace = distanceTravelledInFeet(start, destination);

   if (traveledDisntace <= 400) {
    return 0;

  } else if(traveledDisntace > 400 && traveledDisntace <= 2000) {
    const totalFare = (traveledDisntace - 400) * 0.02;
    //
    return totalFare;

  } else if(traveledDisntace > 2000 && traveledDisntace <= 2500) {
    return 25;

  } else {
    return 'cannot travel that far';
  }s

  }

