 /* for peter */
 var houseWidth = 8 ;
 var housedepth = 10 ;
 var houseLength = 10 ;
 var gardenSizeInM2 = 100 ;
 var volumeInMeters = houseWidth * housedepth * houseLength ;
 var housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300 ;

if(housePrice >= 2500000) {
    console.log("You are paying too much Peter");
}
else {
    console.log("You are paying too less Peter");
}

/* for Julia */
houseWidth = 5 ;
housedepth = 11 ;
houseLength = 8 ;
gardenSizeInM2 = 70 ;
volumeInMeters = houseWidth * housedepth * houseLength ;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300 ;

if(housePrice >= 1000000) {
    console.log("You are paying too much Julia");
}
else {
    console.log("You are paying too less Julia");
}