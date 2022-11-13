import NoteItem from "./NoteItem";
import { PropTypes } from 'prop-types'

function NoteList({ notes }) {
    return (
        <section className="notes-list">
            {
                notes.map((note) => (
                    <NoteItem key={note.id} note={note} />
                ))
            }
        </section>
    );
}

NoteList.propTypes = {
    notes: PropTypes.array
};

export default NoteList;