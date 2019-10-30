class Note {

	constructor( text = "no input") {
			this.text = text;
			this.id = ID.generateID()
		}

		viewText() {
			return this.text
		}

}
