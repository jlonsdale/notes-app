class SingleNoteView {
  constructor(note = Note) {
    this.note = note
  }

  returnHTML() {
    return '<div>'+this.note.viewText() +'</div>'
  }
}
