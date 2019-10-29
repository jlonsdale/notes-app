function testInnerHTML() {

  var elementDouble = {
    innerHTML: 'farts'
  }
  var documentDouble = {
    getElementById: function() {
      return elementDouble
    }
  }

  note_list = new NoteList
  note_list.addNote('farts')
  controller = new NoteController(note_list)
  assert.isTrue(controller.renderHTML(documentDouble)==="<ul><li>farts</li></ul>")

 };

 testInnerHTML()
