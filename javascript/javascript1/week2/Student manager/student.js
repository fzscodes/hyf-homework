
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
    let classSize =  class07Students.length;
    return classSize;
}

addStudentToClass('student1');
addStudentToClass('student2');
addStudentToClass('student3');
addStudentToClass('student4');
addStudentToClass('student5');

// add a student who has no name
addStudentToClass('');

addStudentToClass('student6');

// add more student than available space
addStudentToClass('student3');

// add someone already enrolled
addStudentToClass('student7');

// add queen to full class
addStudentToClass('Queen');

let class07Size = getNumberOfStudents();
console.log('number of students in class 07 is ' + class07Size);

// see the students added to class 07
console.log(class07Students);