import "../css/styles.css";


class AppView {
    constructor() {
        this.app = document.getElementById('app');


    }

    render() {

        this.template = `
            <div id="sidenav" class="sidenav">
                <div id="note-control"></div>
                <div id="note-list" class="note-list"></div>
                
            </div>
            <div id="editor" ></div>
            <div id="settings-modal" class="settings-modal">
        `;

        this.app.innerHTML = this.template;

    }

}

export default AppView;