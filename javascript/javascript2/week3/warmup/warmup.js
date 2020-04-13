//Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
const logout = function () {
    console.log("Called after 2.5 seconds");
}
setTimeout(logout, 2500);


//Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.
function logOutString(delay, stringToLog) {
    setTimeout(() => {
        console.log(stringToLog);
    }, delay * 1000);
}
logOutString(5, "String is logged out after 5 secs");
logOutString(3, "String is logged out after 3 secs");

//Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.

document.getElementById("btn").addEventListener('click', () => logOutString(5, "Called after 5 secs"));

//Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.
const earth = function earthLogger() {
    console.log("Earth");
};
const saturn = function saturnLogger() {
    console.log("Saturn");
};
function planetLogFunction(f) {
    f();
}
planetLogFunction(earth);
planetLogFunction(saturn);

//Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api
function geoFindMe() {
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}`;
        mapLink.textContent = `This is the latitude:${latitude},This is the longitude:${longitude}`;
    }
    function error() {
        status.textContent = 'Unable to retrieve your location';
    }

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }

}

document.querySelector('#location-btn').addEventListener('click', geoFindMe);

//Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions

function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000);
}
runAfterDelay(4, () => {
    console.log("should be logged after 4 seconds");
});
runAfterDelay(6, () => {
    console.log("should be logged after 6 seconds");
});

//Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"

window.addEventListener('dblclick', () => console.log("Double click!"));

//Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.

function jokeCreator(shouldTellFunnyJoke,logFunnyJoke,logBadJoke) {
    if (shouldTellFunnyJoke) {
        logFunnyJoke();
    }
    else {
        logBadJoke();
    }
};
function logFunnyJoke(){
    console.log("Want to hear a construction joke? Oh never mind, I'm still working on that one.")
}
function logBadJoke(){
    console.log("Why did Cinderella get kicked off the football team?Because she kept running from the ball!")
};
jokeCreator(false,logFunnyJoke,logBadJoke);

