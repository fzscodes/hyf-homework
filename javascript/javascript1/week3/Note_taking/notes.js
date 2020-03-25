const notes = [];
function addNote(content_in, id_in) {
    notes.push({content:content_in,id:id_in});

}
addNote("First Note", 1);
addNote("Second Note", 2);


function getNoteFromId(id){
    if (isNaN(id)){
        console.log("Sorry the entered id is not a number.");
    }
    else{
    index = notes.findIndex(x => x.id === id);
    const noteAtIndex= notes[index];
    console.log(noteAtIndex);
    return noteAtIndex;
    }
   
}
getNoteFromId(1);
getNoteFromId(2);
getNoteFromId("A");
console.log(notes);

function logOutNotesFormatted(){
    for(let i=0 ;i < notes.length; i++ ){
        const containedContent = notes[i].content;
        console.log("The note with id:"+ (i + 1) + ", has the following note text: " + containedContent );
    }
}
logOutNotesFormatted(notes);
