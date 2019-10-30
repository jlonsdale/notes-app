//Test the note stores text
function testNoteStoresText() {
  note = new Note('test');
  assert.isTrue(note.text ==='test');
};

testNoteStoresText()
ID.reset()

//Test the note stores an ID
function testNotehasID() {
  note = new Note('test');
  assert.isTrue(note.id === 1);
}

testNotehasID()
ID.reset()
