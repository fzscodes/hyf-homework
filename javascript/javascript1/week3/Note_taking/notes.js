const notes = [];
function addNote(content, id) {
    notes.push({content:content,id:id});

}
addNote("First Note", 1);//added 1st note
addNote("Second Note", 2);//added 2nd note


function getNoteFromId(id){
for(let i=0 ;i < notes.length; i++ ){
    if (isNaN(id)){
        console.log("Sorry the entered id is not a number.");
    }
    else{
    index = notes.findIndex(x => x.id === id);
    const getNotes= notes[index];
    console.log(getNotes);
    return getNotes;
    }
   
}
}
getNoteFromId(1);
getNoteFromId(2);
getNoteFromId("A");// id is not a number
console.log(notes);// gets all notes.

function logOutNotesFormatted(){
    for(let i=1 ;i <= notes.length; i++ ){
        const containedContent = notes[i-1].content;
        console.log("The note with id:"+ i + ", has the following note text: " + containedContent );
    }
}
logOutNotesFormatted(notes);
