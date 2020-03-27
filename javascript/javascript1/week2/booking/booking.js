function getFullName(firstname, surname, useFormalName) {
    let ourFullName = firstname + " " + surname;

    if (useFormalName && firstname === '' && surname === '') {
        ourFullName = '';
    }
    else if (useFormalName) {
        ourFullName = "Lord " + ourFullName;
    }

    return ourFullName;

}
let fullName1 = getFullName('Fauzia', 'Siddique', false);
let fullName2 = getFullName('Benjamin', 'Hughes', true);
let fullName3 = getFullName('John', 'Ray');
let fullName4 = getFullName('', '', true);
let fullName5 = getFullName('Maria', '', true);
let fullName6 = getFullName('', 'Stevens', true);
console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullName4);
console.log(fullName5);
console.log(fullName6);
