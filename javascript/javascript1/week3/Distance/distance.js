const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function getTime(param1) {
    let myDistance = travelInformation.destinationDistance;
    let mySpeed = travelInformation.speed;
    let resultInMinutes = (myDistance * 60 / mySpeed)

    let hours = (resultInMinutes / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    let timeResult = new Object();
    timeResult.hours = rhours;
    timeResult.minutes = rminutes;
    return timeResult;
}
let result = getTime(travelInformation);
console.log(result);
console.log(result.hours + " hours and " + result.minutes + " minutes");