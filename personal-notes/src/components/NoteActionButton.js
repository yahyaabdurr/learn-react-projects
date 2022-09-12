import ArchiveButton from "./ArchiveButton";


function NoteActionButton({ id, onDelete, isArchive, onArchive }) {
    return (<div className="note-item__action">
        <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
        <ArchiveButton id={id} isArchive={isArchive} onArchive={onArchive} />

    </div>)

}

export default NoteActionButton;
