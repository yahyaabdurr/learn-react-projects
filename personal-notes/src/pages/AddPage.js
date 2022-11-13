import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";

import { addNote } from "../utils/local-data";

function AddPage() {

    const navigate = useNavigate();
    function onAddNoteHandler(note) {
        addNote(note);
        navigate('/');
    }

    return (
        <section className="add-new-page">
            <NoteInput addNote={onAddNoteHandler} />

        </section>
    )
}

export default AddPage;