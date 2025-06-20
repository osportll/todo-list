export const DOM = {
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
};
