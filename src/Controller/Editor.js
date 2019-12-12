
class Editor {
    constructor(editorView, noteListView, model, toolbar) {
        this.toolbar = toolbar;
        this.editorView = editorView;
        this.noteListView = noteListView;
        this.model = model;

        // Display initial note
        this.editorView.render(this.model.notes[this.model.notes.length - 1]);

        this.noteListView.render(this.model.notes);


        this.editorView.bindEditNote(this.handleEditNote);

        this.noteListView.bindSearch(this.handleSearch);
        this.noteListView.bindAddNote(this.handleAddNote);
        this._bindNoteList();

    }

    // Private Methods

    _bindNoteList = () => {
        this.noteListView.bindOpenNote(this.handleOpenNote);
        this.noteListView.bindDeleteNote(this.handleDeleteNote);

    };



    // Handlers

    handleAddNote = () => {
        this.model.addNote('', '');
        this.noteListView.render(this.model.notes);
        this.editorView.render(this.model.notes[this.model.notes.length - 1]);
        this._bindNoteList();

    };

    handleDeleteNote = (id, currentlyEditedNoteId) => {
        const lastNote = this.model.notes[this.model.notes.length - 1];
        const secondNote = this.model.notes[this.model.notes.length - 2];
        if (id === currentlyEditedNoteId) {
            if (id !== lastNote.id) {
                console.log('last');
                this.editorView.render(lastNote);

            } else {
                console.log('second');
                if (secondNote) {
                    this.editorView.render(secondNote);
                }
            }

        }
        console.log(id);
        this.model.deleteNote(id);
        if (!this.model.notes.length) {
            this.handleAddNote();
            console.log('created note');
        }

        this.noteListView.render(this.model.notes);
        this._bindNoteList();
    };


    handleEditNote = (id, note) => {
        this.model.editNote(id, note);
        this.noteListView.render(this.model.notes);
        this._bindNoteList();


    };

    handleOpenNote = (id) => {
        const noteToOpen = this.model.findNote(id);
        this.editorView.render(noteToOpen);

    };

    handleSearch = (inputValue) => {
        const notesToDisplay = this.model.searchNotes(inputValue);
        this.noteListView.render(notesToDisplay);
        this._bindNoteList();
    };

}




export default Editor;