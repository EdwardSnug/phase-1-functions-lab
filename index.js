// Code your solution in this file!
function distanceFromHqInBlocks(streetBlockNumber) {
    let calcDistance;
    if (streetBlockNumber < 42) {
        calcDistance = 42 - streetBlockNumber;
    } else {
        calcDistance = streetBlockNumber - 42;
    }
    return calcDistance;
}
function distanceFromHqInFeet(streetBlockNumber) {
    distanceFromHqInBlocks(streetBlockNumber);
    return distanceFromHqInBlocks(streetBlockNumber) * 264;
}
function distanceTravelledInFeet(startblock, destinationblock) {
    let distTravelled;
    distTravelled = Math.abs(destinationblock - startblock) * 264;
    return distTravelled;
}
function calculatesFarePrice(startblock, destinationblock) {
    const free = 400;
    let distTravelled = Math.abs(destinationblock - startblock) * 264;
    let calculatedFare;
    if (distTravelled <= 400) {
        return 0;
    } else if (distTravelled > 400 && distTravelled <= 2000) {
        calculatedFare = (distTravelled - free) * 0.02;
        return calculatedFare;
    } else if (distTravelled <= 2500) {
        return 25;//In dollars
    } else {
        return 'cannot travel that far';
    }
}