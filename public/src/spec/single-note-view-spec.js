function testSingleNoteView() {
  var note = new Note('test')
  var single_note_view = new SingleNoteView(note)
  assert.isTrue(single_note_view.returnHTML()==="<div>test</div>")
}

testSingleNoteView()
ID.reset()
