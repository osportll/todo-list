import { DOM } from "./domRefs.js";

//Event listener for submit button

/* export function initModalLogic() {
  addNoteBtn = document.querySelector(".add-note-btn");
  noteTitle = document.querySelector("#title");
} */

//------------------------------------------------------------------------

/* export function createNot(title, date, status) {
  return {
    title: this.title,
    date: this.date,
    status: this.status,
    modifyContent: function () {
      //this function will modify the note's body
    },
  };
}

export function newNote() {
  const note1 = createNot("lala", "today", "to-do");

  note1.modifyContent();
} */

//------------------------------------------------------------------------

//Create note class

export class createNote {
  constructor(title, date, status) {
    this.title = title;
    this.date = date;
    this.status = status;
  }

  submitInfo() {
    DOM.addNoteBtn.addEventListener("click", () => {
      console.log("Object properties:", this.title, this.date, this.status);
      console.log(DOM.noteTitle);
    });
  }
}

//Create the specific object

/* document.addEventListener("DOMContentLoaded", () => {
  initModalLogic();
  const test = new createNote("lala", "lele", "lili");
  const test2 = new createNote();
  test.submitInfo();
}); */

const test = new createNote("lala", "lele", "lili");
const test2 = new createNote();
test.submitInfo();
