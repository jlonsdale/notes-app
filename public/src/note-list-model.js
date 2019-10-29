
( function(exports) {

	class NoteList {

		constructor() {
			this.list = [];
		}

		viewNotes() {
      return this.list
    }

    addNote(text) {
      this.list.push(new Note(text))
    }

	}

exports.NoteList = NoteList;

})(this);
