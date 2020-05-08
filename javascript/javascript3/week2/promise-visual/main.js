//translateOneByOne - Should translate the circles one at a time from their random start position to their target see the target positions below. Log something out after each element has been moved
const redElementPosition = document.querySelector('.marks').children[0];
const blueElementPosition = document.querySelector('.marks').children[1];
const greenElementPosition = document.querySelector('.marks').children[2];

const translateOneByOne = () => {
    moveElement(redElementPosition, { x: 20, y: 300 })
        .then(() => {
            console.log('Red element has been moved');
            return moveElement(blueElementPosition, { x: 400, y: 300 })
        })
        .then(() => {
            console.log('Blue element has been moved');
            return moveElement(greenElementPosition, { x: 400, y: 20 })
        })
        .then(() => {
            console.log('Green element has been moved');
        });
}
//translateOneByOne();

//translateAllAtOnce - Should translate all the circles at the same time from their random start position to their target. Log out something after all elements have been moved

const translateAllAtOnce = () => {
    const moveRed = moveElement(redElementPosition, { x: 20, y: 300 });
    const moveBlue = moveElement(blueElementPosition, { x: 400, y: 300 });
    const moveGreen = moveElement(greenElementPosition, { x: 400, y: 20 });
    Promise.all([moveRed, moveBlue, moveGreen]).then(() => {
        console.log("All the elements have been moved");
    })
}
translateAllAtOnce();
