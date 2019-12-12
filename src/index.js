import AppView from "./View/AppView";
import Editor from './Controller/Editor'
import EditorView from './View/EditorView'
import NoteListView from './View/NoteListView'
import EditorModel from './Model/EditorModel'
import ToolbarView from './View/ToolbarView'
import "./css/styles.css";



const appView = new AppView();
appView.render();

const editorContainer = document.getElementById('editor');
const sidenav = document.getElementById('sidenav');

const app = new Editor(new EditorView(editorContainer), new NoteListView(sidenav), new EditorModel(), new ToolbarView(editorContainer));


