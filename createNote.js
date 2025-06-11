const noteBody = document.querySelector('#note');

export function createNote(title, date, status) {
  return {
    title: title,
    date: date,
    status: status,
    modifyContent: function () {
      //this function will modify the note's body
    },
  };
}

export function newNote() {
  const note1 = createNote('lala', 'today', 'to-do');

  note1.modifyContent();
}
