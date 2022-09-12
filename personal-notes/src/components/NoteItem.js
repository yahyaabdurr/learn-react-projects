import React from "react";
import NoteActionButton from "./NoteActionButton";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ note, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <NoteItemContent key={note.id} {...note} />
            <NoteActionButton id={note.id} onDelete={onDelete} isArchive={note.archived} onArchive={onArchive} />
        </div>
    );
}

export default NoteItem;