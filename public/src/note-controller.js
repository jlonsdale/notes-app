  class NoteController {

    constructor(noteList = new NoteList()) {
      this.noteList = noteList
      this.noteListView = new NoteListView(noteList)
      this.html = this.noteListView.returnHTML()
    }

    renderHTML(doc = document) {
      return doc.getElementById("app").innerHTML = this.html
    }
  }
