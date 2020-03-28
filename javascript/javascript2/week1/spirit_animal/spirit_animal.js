const spiritAnimal = ["Alert Hawk", "Power Horse", "Pride Lion", "Social Monkey", "Grace Ostrich", "Wise Owl", "Mystical Panther", "Magical Raven", "Patient Turtle", "Gracefull Swan", "Brave wolf"];
function getSpiritAnimal() {
    let inputName = document.getElementById("name").value;
    if(!inputName)
    {
        alert('Enter a name first!');
    }
    else{
    let randomNumber = Math.floor(Math.random()*spiritAnimal.length);
    let randomSpiritAnimal = spiritAnimal[randomNumber];
    document.getElementById("spirit-animal").textContent =inputName + "-" + "The " + randomSpiritAnimal;
    }
}
