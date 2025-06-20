import { DOM } from "./domRefs.js";

//Create note class

export class createNote {
  constructor(title, body, date, priority) {
    this.title = title;
    this.date = date;
    this.body = body;
    this.priority = priority;
  }

  /* submitInfo() {
    DOM.addNoteBtn.addEventListener("click", () => {
      title = DOM.noteTitle.value;
      body = DOM.noteBody.value;

      console.log(title, body);
    });
  } */
}

//Create the specific object

export function initNoteLogic() {
  let noteArray = [];
  DOM.addNoteBtn.addEventListener("click", () => {
    let title = DOM.noteTitle.value;
    let body = DOM.noteBody.value;
    let date = DOM.noteDate.value;
    let priority = DOM.notePriority.value;

    let newNote = new createNote(title, body, date, priority);

    noteArray.push(newNote);
    console.log(noteArray);
  });
}
