import { DOM } from "./domRefs.js";

//Create note class

export class createNote {
  constructor(title, body, date, priority) {
    this.title = title;
    this.date = date;
    this.body = body;
    this.priority = priority;
  }
}

//Create the specific object

export function initNoteLogic() {
  let noteArray = [];
  DOM.submitNoteBtn.addEventListener("click", () => {
    if (DOM.noteDate.value !== "") {
      let title = DOM.noteTitle.value;
      let body = DOM.noteBody.value;
      let date = DOM.noteDate.value;
      let priority = DOM.notePriority.value;

      let newNote = new createNote(title, body, date, priority);

      noteArray.push(newNote);
      console.log(noteArray);
      DOM.noteModal.classList.toggle("show-modal");
    } else {
      alert("Must enter a valid date!");
    }
  });
}

export function addNewNoteLogic() {
  DOM.addNoteBtn.addEventListener("click", () => {
    DOM.noteModal.classList.toggle("show-modal");
    DOM.noteTitle.value = "";
    DOM.noteBody.value = "";
    DOM.noteDate.value = "";
  });
}
