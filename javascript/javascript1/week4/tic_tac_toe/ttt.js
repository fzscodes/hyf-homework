let gameBoard = [
    ['x', 'o', ' '],
    [' ', 'o', ' '],
    [' ', 'o', 'x']
];

function getRenderedGame(position) {
    let result = "/*\n*******\n";
    for (let i = 0; i < position.length; i++) {
        result += "*" + position[i].join("*") + "*" + "\n";
    }
    result += "*******\n*/";
    return result;

}
const renderedGame = getRenderedGame(gameBoard);
console.log(renderedGame);

function getGameInfo(position)
{
    let gameInfo = {};
    if(hasWon(position, 'x')){
        gameInfo.winnner = 'x';
        gameInfo.loser = 'o';
        gameInfo.hasEnded = true;
    }
    else if(hasWon(position, 'o')){
        gameInfo.winnner = 'o';
        gameInfo.loser = 'x';
        gameInfo.hasEnded = true;
    }
    else{
        gameInfo.winnner = undefined;
        gameInfo.loser = undefined;
        gameInfo.hasEnded = false;
    }
    return gameInfo;
}

function hasWon(position, player) {
    if (position[0][0] === player && position[1][0] === player && position[2][0] === player) {
        return true;
    } if (position[0][1] === player && position[1][1] === player && position[2][1] === player) {
        return true;
    } if (position[0][2] === player && position[1][2] === player && position[2][2] === player) {
        return true;
    } if (position[0][0] === player && position[0][1] === player && position[0][2] === player) {
        return true;
    } if (position[1][0] === player && position[1][1] === player && position[1][2] === player) {
        return true;
    } if (position[2][0] === player && position[2][1] === player && position[2][2] === player) {
        return true;
    } if (position[0][0] === player && position[1][1] === player && position[2][2] === player) {
        return true;
    } if (position[0][2] === player && position[1][1] === player && position[2][0] === player) {
        return true;
    }
    return false;
}

const xWon = hasWon(gameBoard, 'x');
console.log("X won the game: "+ xWon);
const oWon = hasWon(gameBoard, 'o');
console.log("O won the game: " + oWon);
const gameInfo = getGameInfo(gameBoard);
console.log(gameInfo);

