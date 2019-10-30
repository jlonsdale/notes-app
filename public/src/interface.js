
  note_list = new NoteList()
  note_list.addNote('note 1')
  note_list.addNote('note 2')
  note_list.addNote('nnnnnoooooootttttttttteeeeeeeeeeeeeee3333333333')

  noteController = new NoteController(note_list)
  noteController.renderHTML()

  window.onhashchange = function() {
    id = getElementFromURL()
    showNote(id)}

  function getNoteFromUrl(location) {
    return location.hash.split("#")[1];
  };

  function showNote(id) {
  single_note_view = new SingleNoteView(note_list.viewNotes()[id-1])
  document
    .getElementById("app")
    .innerHTML = single_note_view.returnHTML()
  };

  function getElementFromURL() {
    return window.location.href.split("#")[1];
  };
