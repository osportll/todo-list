export const DOM = {
  get sections() {
    return document.querySelectorAll(".sections");
  },

  get headerTitle() {
    return document.querySelector(".header-title");
  },

  get addNoteBtn() {
    return document.querySelector(".add-note-btn");
  },

  get noteTitle() {
    return document.querySelector("#title");
  },
};
