function testEmptyNoteList() {
  assert.isTrue(new NoteList().viewNotes().length === 0);
};

testEmptyNoteList()
ID.reset()

function testAddToList() {
  note_list = new NoteList();
  note_list.addNote('test');
  test_note = new Note('test');
  assert.isTrue(note_list.viewNotes()[0].text === test_note.text);
};

testAddToList()
 ID.reset()
