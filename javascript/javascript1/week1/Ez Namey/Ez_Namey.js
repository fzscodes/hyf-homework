const firstWords = ['Easy','Awesome','Real','Web','Design','Real','Tech','Snap','Trade','Info'];
const secondWords = ['Corporate','Technology','Corporation','Solutions','Services','Manufacturing','Security','Agency','Consulting','Estate'];
const randomNumber = Math.floor(Math.random() * 10);
const startUpName = firstWords[randomNumber] + " " + secondWords[randomNumber];
console.log(startUpName);