const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

const indexOfNameToRemove = names.indexOf(nameToRemove) ;
if (names[indexOfNameToRemove] === nameToRemove)  {
    names.splice(indexOfNameToRemove , 1);
}
console.log(names);