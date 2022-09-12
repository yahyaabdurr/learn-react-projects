
import React from "react";
import SearchNote from "./SearchNote";

function NoteAppHeader({ keyword, kerwordChangeHandler }) {

    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <SearchNote keyword={keyword} onKeywordChangeEventHandler={kerwordChangeHandler} />
        </div>
    )


}
export default NoteAppHeader;