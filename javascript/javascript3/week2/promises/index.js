//Create a function that has one parameter: resolveAfter. Calling this function will return a promise that resolves after the resolveAfter seconds has passed.

const myPromiseFunction = (resolveAfter) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (resolveAfter) {
                resolve('success');
            } else {
                reject('failed');
            }
        }, resolveAfter * 1000);
    })
};

myPromiseFunction(5)
    .then(res => {
        console.log("I am called asynchronously--" + res);
    })
    .catch(e => {
        console.log("There is an error--" + e);
    });

//When you have written the promise, use it with async/await

async function asyncCall() {
    const result = await myPromiseFunction(2);
    console.log(result);
}
asyncCall();

//Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises.
// The getCurrentPosition function is probably going to throw an error, but that is fine. 
//As long as you can use it as a promise.

const setTimeoutPromise = (time) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
setTimeoutPromise(3000)
    .then(res => {
        console.log("Called after 3 seconds");
    });

const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            resolve(position);
        },
            (error) => {
                reject(error);
            });
    });
}

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });

//Fetching and waiting.
// 1.Do the 3 steps below using promises and .then.
// 2.Do the 3 steps below using async/await
// The 3 steps:

// 1.Fetch some data from an api.
// 2.After that data has been fetched, wait 3 seconds
// 3.Log out the data from the api
// Which way do you prefer, the promise way or the async/await way?

const url = "https://yesno.wtf/api";
fetch(url)
    .then((res) => res.json())
    .then((result) => {
        setTimeout(() => {
            console.log(result.answer);
        }, 3000);
    })
    .catch((error) => console.log(error));


const myFuncAsync = async () => {
    const url = 'https://yesno.wtf/api';
    const res = await fetch(url);
    const result = await res.json();
    setTimeout(() => {
        console.log('async/await', result.answer);
    }, 3000);
}
myFuncAsync();