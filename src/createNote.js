export function createNote(title, date, status) {
  return {
    title: title,
    date: date,
    status: status,
    content: function () {
      //this function will modify the note's body
      console.log(`${this.title} ${this.date} ${this.status}`);
    },
  };
}

export function newNote() {
  const note1 = createNote('lala', 'today', 'to-do');

  note1.content();
}
