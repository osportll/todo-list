export const DOM = {
  get main() {
    return document.querySelector(".main");
  },

  get sections() {
    return document.querySelectorAll(".sections");
  },

  get headerTitle() {
    return document.querySelector(".header-title");
  },

  get submitNoteBtn() {
    return document.querySelector(".add-note-btn");
  },

  get noteTitle() {
    return document.querySelector(".title-textarea");
  },

  get noteBody() {
    return document.querySelector(".body-textarea");
  },

  get noteDate() {
    return document.querySelector(".datepicker");
  },

  get notePriority() {
    return document.querySelector(".dropdown");
  },

  get noteModal() {
    return document.querySelector(".note-modal");
  },

  get addNoteBtn() {
    return document.querySelector(".add-note");
  },

  get toggleModal() {
    return this.noteModal.classList.toggle("show-modal");
  },

  get main() {
    return document.querySelector(".main");
  },

  get details() {
    return document.querySelector(".details-btn");
  },

  get createNoteChild() {
    /* let main = document.querySelector(".main");
    let noteText = document.querySelector(".note-text"); */

    let node = document.createElement("div");
    let node2 = document.createElement("div");
    let text = document.createElement("p");
    let btn = document.createElement("button");

    node.classList.add("note");
    text.classList.add("note-text");
    node2.classList.add("note-details");
    btn.classList.add("details-btn");

    node.appendChild(text);
    node.appendChild(node2);
    node2.appendChild(btn);

    btn.textContent = "Details";

    text.textContent = this.noteTitle.value;

    return this.main.appendChild(node);
  },
};
