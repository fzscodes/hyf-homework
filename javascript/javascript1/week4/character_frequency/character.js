const characters = [];
function getCharacterFrequencies(inputString) {
    for (var i = 0; i < inputString.length; i++) {
        let freq = new Object();
        let char = inputString[i];
        let character = characters.find(item => item.character === char);
        if (character) {
            character.count++;
        }

        else {
            freq.character = char;
            freq.count = 1;
            characters.push(freq);
        }
    }
   
}
(getCharacterFrequencies("happy"));
console.log(characters);
