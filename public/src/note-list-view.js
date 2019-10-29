( function (exports) {

  class NoteListView {

    constructor(noteList) {
    	this.noteList = noteList;
    }

    returnHTML() {
    var output = "<ul>";
    this.noteList.viewNotes().forEach( function(note){

      output += "<li>" + note.viewText() + "</li>"

    });
      return output + "</ul>"
    }

    returnNotesList() {
      return this.noteList
    }

  }
  exports.NoteListView = NoteListView

})(this);
