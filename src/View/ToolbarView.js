import "../css/styles.css";
import toolbar from "./components/toolbar";

class ToolbarView {
    constructor(container){
        const self = ToolbarView;
        this.container = container;
        this.content = document.getElementById('content');

        this.toolbar = document.createElement('div');
        this.toolbar.hidden = true;
        this.toolbar.style.position = "absolute";
        this.toolbar.innerHTML = toolbar();
        this.container.append(this.toolbar);

        this.boldButton = document.getElementById('toolbar-button-bold');
        this.italicButton = document.getElementById('toolbar-button-italic');
        this.headingButton = document.getElementById('toolbar-button-heading');
        this.UlButton = document.getElementById('toolbar-button-list-ul');

        document.addEventListener('selectionchange', event => {
            const selection = window.getSelection();
            if (!selection.isCollapsed && this.toolbar.hidden === true) {
                this.render(self.getSelectionPosition(selection));
            } else if (selection.isCollapsed && this.toolbar.hidden === false) {
                this.render(self.getSelectionPosition(selection));
            }
            console.log('selection change');
        });


        this.boldButton.addEventListener('click', event => {
            event.preventDefault();
            document.execCommand('bold');
        });
        this.italicButton.addEventListener('click', event => {
            event.preventDefault();
            document.execCommand('italic');
        });

        /*

        this.headingButton.addEventListener('click', event => {
            event.preventDefault();
            document.execCommand('formatBlock', false, '<h3>');
        });

         */

        this.UlButton.addEventListener('click', event => {
            event.preventDefault();
            document.execCommand('insertUnorderedList');
        });


    }

    static getSelectionPosition = (selection) => {
        const selectionRange = selection.getRangeAt(0); //get the text range

        // to access the position, use object.top and object.left
        return selectionRange.getBoundingClientRect();
    };

    render = (position) => {
        this.toolbar.toggleAttribute('hidden');
        this.toolbar.style.top = position.top - 50 + 'px';
        this.toolbar.style.left = position.left + 'px'
    };
}

export default ToolbarView;