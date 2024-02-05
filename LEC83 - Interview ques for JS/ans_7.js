/* The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.*/

function saveNote(note) {
    localStorage.setItem("note", note);
}

let note = localStorage.getItem("note");
if (note) {
    document.querySelector(".note").innerHTML = 'pappa ni '+note;
}

document.querySelector("button").addEventListener("click", () => {
    let note = prompt("kripiya note nakhiye: ");
    saveNote(note);
    document.querySelector(".note").innerHTML = 'pappa ni '+note;
});
// if(localStorage.getItem('name')){
//     let a = localStorage.getItem('name')
//     document.write('Kem re tapori '+a)
// }
// else{
//     let a = prompt("Nam nakho - ")
//     localStorage.setItem('name', a) //this will set name's value in local storage
//     document.write('Kem re tapori '+a)
// }
