function dayOfEvent(daysToEvent){
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const presentDay = new Date().getDay();
let indexOfday = (presentDay+daysToEvent) % 7;
return weekdays[indexOfday];
}
let result = dayOfEvent(20);
console.log(result);



  
  
  


