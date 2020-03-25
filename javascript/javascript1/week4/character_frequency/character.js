const characters = [];
function getCharacterFrequencies(inputString) {
    for (var i = 0; i < inputString.length; i++) {
        let freq = new Object();
        let char = inputString.charAt(i);
        let objectInArray = characters.find(item => item.character === char);
        if (objectInArray) {
            objectInArray.count++;
        }

        else {
            freq.character = char;
            freq.count = 1;
            characters.push(freq);
        }
    }
    return characters;
}
console.log(getCharacterFrequencies("happy"));

