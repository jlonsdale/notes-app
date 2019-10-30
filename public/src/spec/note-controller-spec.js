function testInnerHTML() {

  var elementDouble = {
    innerHTML: 'farts'
  };

  var documentDouble = {
    getElementById: function() {
      return elementDouble;
    }
  };

  note_list = new NoteList;
  note_list.addNote('farts');
  controller = new NoteController(note_list);
  controller.renderHTML(documentDouble);
  assert.isTrue((documentDouble.getElementById().innerHTML)==="<ul><li>farts</li></ul>");

 };

 testInnerHTML()
 ID.reset()
