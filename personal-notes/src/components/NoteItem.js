import React from "react";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ note }) {
    return (
        <NoteItemContent key={note.id} {...note} />
    );
}

export default NoteItem;