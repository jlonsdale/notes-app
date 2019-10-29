( function(exports) {

	class Note {

		constructor( text = "no input") {
			this.text = text;
		}

		viewText() {
			return this.text
		}

	}

exports.Note = Note;

} )(this);
