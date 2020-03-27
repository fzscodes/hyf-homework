
const class07Students = [];
function addStudentToClass(studentName) {

    if (studentName === 'Queen') {
        class07Students.push(studentName);
    }
    else if (class07Students.includes(studentName)) {
        console.log("Student " + studentName + " is already in the class");
    }
    else if (class07Students.length === 6) {
        console.log("Cannot add more students to class 07.")
    }
    else if (studentName === "") {
        console.log("Sorry cannot add a student without name!");
    }
    else {
        class07Students.push(studentName);
    }

}

function getNumberOfStudents() {
    return class07Students.length;

}

addStudentToClass('student1');
addStudentToClass('student2');
addStudentToClass('student3');
addStudentToClass('student4');
addStudentToClass('student5');
addStudentToClass('');
addStudentToClass('student6');
addStudentToClass('student3');
addStudentToClass('student7');
addStudentToClass('Queen');

let class07Size = getNumberOfStudents();
console.log('number of students in class 07 is ' + class07Size);
console.log(class07Students);