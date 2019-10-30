
( function (exports) {

  class NoteListView {

    constructor(noteList) {
    	this.noteList = noteList;
    }

    returnHTML() {
    var output = "<ul>";
    this.noteList.viewNotes().forEach( function(note){
      var preview = note.viewText()
      if(note.viewText().length > 20){preview = note.viewText().substring(0,20)}
      var listElement = "<li>" + preview + "</li>"
      output += "</li>" + "<a href="+"#"+note.id+">"+listElement+"</a>"
    });
      return output + "</ul>"
    }
    returnNotesList() {
      return this.noteList
    }
  }
  exports.NoteListView = NoteListView
})(this);
