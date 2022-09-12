
import React from "react";

function ArchiveButton({ id, isArchive, onArchive }) {
    if (isArchive) {
        return (<button className="note-item__archive-button" onClick={() => onArchive(id)}>Pindahkan</button>)
    } else {
        return (<button className="note-item__archive-button" onClick={() => onArchive(id)}>Arsipkan</button>)
    }

}
export default ArchiveButton;