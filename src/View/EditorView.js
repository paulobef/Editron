import toolbar from './components/toolbar'
import controlbar from "./components/controlbar";

class EditorView {
    constructor(container) {
        const self = EditorView;
        this.container = container;

        this.title = self.createElement('h1', 'outline-none');
        this.title.id = 'heading';
        this.title.contentEditable = true;

        this.content = self.createElement('div', 'outline-none');
        this.content.id = 'content';
        this.content.dataset.id = null;
        this.content.contentEditable = true;


        this.container.innerHTML = controlbar();
        this.container.append(this.title);
        this.container.append(this.content);

        // use p instead of div when hitting enter
        document.execCommand('defaultParagraphSeparator', false, 'p');



        this._temporaryNote = {
            title: '',
            content: ''
        };

        this._initLocalListeners();
        this.handleEnterKeyOnTitle();



    }

    _initLocalListeners()  {

        this.container.addEventListener('input', event => {
            this._temporaryNote.title = this.title.innerHTML;
            this._temporaryNote.content = this.content.innerHTML;
        });
    }

    // Create an element with an optional CSS class
    static createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);

        return element
    }

    // Retrieve an element from the DOM
    static getElement(selector) {
        return document.querySelector(selector)
    }


    // Getters
    get _noteText() {
        return this.content.innerHTML
    }




    handleEnterKeyOnTitle = () => {
       this.title.addEventListener('keydown', event => {

            if (event.keyCode === 13) {
                event.preventDefault()
                this.content.focus();
                console.log(event.keyCode);
            }
        })
    };

    // Binders
    bindEditNote = (handler) => {
        this.container.addEventListener('input', event => {

                const id = parseInt(this.content.dataset.id);
                handler(id, this._temporaryNote);

        });

    };



    render = (note) => {

        this.title.innerHTML = note.title;
        this.content.dataset.id = note.id;
        this.content.innerHTML = note.text;
        this.title.focus();



    }
}

export default EditorView;