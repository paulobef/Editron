import '@fortawesome/fontawesome-free/css/all.css';

const noteList = (notes) => {

    function truncateString(str, num) {
        // If the length of str is less than or equal to num
        // just return str--don't truncate it.
        if (str.length <= num) {
            return str
        }
        // Return str truncated with '...' concatenated to the end of str.
        return str.slice(0, num) + '...'
    }



    let itemArray = notes.map(note => {

        const noteTitleWithNoTags = note.title.replace(/(<([^>]+)>)/ig, "");
        const noteTitle = truncateString(noteTitleWithNoTags, 25);
        const noteTextWithNoTags = note.text.replace(/(<([^>]+)>)/ig, "");
        const noteLead = truncateString(noteTextWithNoTags, 35);

        return `<div class="note-item">
                    <div class="note-item-info">
                        <a data-id=${note.id} class="note-item-title" href="javascript:void(0)">${noteTitle ? noteTitle : 'Untitled'}</a>
                        <div class="note-item-lead">${noteLead}</div>
                    </div>
                    <div class="right-align">
                        <a data-id=${note.id} href="javascript:void(0)" class="note-item-delete">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </a>
                    </div>
                </div>
                                        `});
    itemArray.reverse();
    itemArray = itemArray.join("");

    return `
        ${itemArray}
    `
};

export default noteList;