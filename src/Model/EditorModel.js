
class EditorModel {
    constructor() {
        this.notes = JSON.parse(localStorage.getItem('notes')) || [
            {
                id: 1,
                title: '',
                text: '<p></p>'
            }
        ];

    }

    _commit = (notes) => {
        localStorage.setItem('notes', JSON.stringify(notes))
    };



    addNote = (noteTitle, noteText) => {

        const note = {
            id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1,
            title: noteTitle,
            text: noteText
        };

        this.notes.push(note);
        this._commit(this.notes);
    };

    // Map through all notes, and replace the text of the note with the specified id
    editNote = (id, updatedNote) => {

        this.notes = this.notes.map(note =>
            note.id === id ? { id: note.id, title: updatedNote.title, text: updatedNote.content } : note
        );
        console.log(this.notes);

        this._commit(this.notes);


    };

    // Filter a note out of the array by id
    deleteNote = (id) => {
        console.log(id);
        this.notes = this.notes.filter(note => note.id !== id);
        console.log(this.notes);
        this._commit(this.notes);
    };

    findNote = (id) => {
        return this.notes.find(note => note.id === id)
    };

    searchNotes = (inputValue) => {
        return this.notes.filter(note => note.title.toLowerCase().includes(inputValue.toLowerCase()))
    }
}

export default EditorModel;