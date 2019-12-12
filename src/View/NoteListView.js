import "../css/styles.css";
import noteList from './components/noteList'
import noteControl from './components/noteControl'


class NoteListView {
    constructor(container) {

        this.container = container;
        this.noteControlContainer = document.querySelector('#note-control')
        this.noteControlContainer.innerHTML = noteControl();

        this.noteListContainer = document.querySelector('#note-list');
        this.sidebarIsOpen = false;

        this.openButton = document.querySelector('#open-nav');
        this.openButton.addEventListener('click', () => {
           this.toggleNav();
        });

        this.addButton = document.querySelector('#add-button');
        this.search = document.querySelector('#search-field');

        // get array of all note list elements
        this.noteItems = [];

        console.log(this.noteItems)

    }

    toggleNav = () => {
        const sidenav = document.getElementById("sidenav");
        const editor = document.getElementById("editor");
        if (this.sidebarIsOpen) {
            sidenav.style.width = "0";
            editor.style.marginLeft = "0";
            this.sidebarIsOpen = false;
            this.openButton.style.backgroundColor = '#ffffff';
            this.openButton.style.color = '#272727';

        } else {
            sidenav.hidden = false;
            sidenav.style.width = "350px";
            editor.style.marginLeft = "350px";
            this.sidebarIsOpen = true;
            this.openButton.style.backgroundColor = '#272727';
            this.openButton.style.color = '#ffffff';
        }

    };



    // Binders
    bindOpenNote = (handler) => {
        this.noteItems.forEach(noteItem => noteItem.addEventListener(
            'click',
            event => {
                const {id} = event.target.dataset;
                handler(parseInt(id));

            }
        ))
    };

    bindAddNote = (handler) => {
        this.addButton.addEventListener('click', event => {
               handler()
            }
        )

    };

    bindDeleteNote = (handler) => {
        this.noteDeletes.forEach(noteDelete => noteDelete.addEventListener(
            'click',
            event => {
                console.log(event.currentTarget.dataset.id);
                const id = event.currentTarget.dataset.id;
                const content = document.getElementById("content");
                const currentlyEditedNoteId = content.dataset.id;
                handler(parseInt(id), parseInt(currentlyEditedNoteId));

            }
        ))
    };

    bindSearch = (handler) => {
        this.search.addEventListener('input', event => {
            handler(this.search.value);
        })
    };



    render = notes => {

        this.noteListContainer.innerHTML = noteList(notes);
        this.noteItems = document.querySelectorAll('.note-item-title');
        this.noteDeletes = document.querySelectorAll('.note-item-delete');



    }

}

export default NoteListView;