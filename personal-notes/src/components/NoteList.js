import NoteItem from "./NoteItem";




function NoteList({ notes, onDelete, onArchive }) {
    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem note={note} onArchive={onArchive} onDelete={onDelete} />
                ))
            }
        </div>
    );
}

export default NoteList;