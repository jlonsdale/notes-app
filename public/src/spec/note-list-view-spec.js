function testViewHTML() {
  note_list = new NoteList();
  note_list.addNote('test')
  note_list_view = new NoteListView(note_list)
  html = note_list_view.returnHTML()
  assert.isTrue(html === "<ul><li>test</li></ul>");
}

testViewHTML()
ID.reset()

function testLongViewHTML() {
  note_list = new NoteList();
  note_list.addNote('12345678901234567890aaaaaaaaaaaaaa')
  note_list_view = new NoteListView(note_list)
  html = note_list_view.returnHTML()
  assert.isTrue(html === "<ul><li>12345678901234567890</li></ul>");
}

testLongViewHTML()
ID.reset()
