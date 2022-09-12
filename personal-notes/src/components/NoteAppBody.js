
import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";


function NoteAppBody({ notes, onAddNoteHandler, onArchive, onDelete }) {

    const noteActive = notes.filter(note => note.archived === false)
    const noteArchive = notes.filter(note => note.archived === true)
    return (
        <div className="note-app__body">
            <NoteInput addNote={onAddNoteHandler} />
            <h2>Catatan Aktif</h2>
            <NoteList notes={noteActive} onArchive={onArchive} onDelete={onDelete} />
            <h2>Arsip</h2>
            {noteArchive.length > 0 ? <NoteList notes={noteArchive} onArchive={onArchive} onDelete={onDelete} /> : <p className="notes-list__empty-message">Tidak ada Catatan</p>}


        </div>
    )


}
export default NoteAppBody;