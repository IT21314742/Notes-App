const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}
showNotes();

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement
})