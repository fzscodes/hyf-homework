const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
function findShortestWord(words) {
    let shortestWord = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i];
        }
    }
    return shortestWord;
}
let result = findShortestWord(danishWords);
console.log(result);
