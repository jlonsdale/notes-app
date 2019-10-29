function testNoteStoresText() {
  note = new Note('test');
  assert.isTrue(note.text ==='test');
};

testNoteStoresText()
