import React from "react";
import NoteItemContent from "./NoteItemContent";
import PropTypes from 'prop-types';

function NoteItem({ note }) {
    return (
        <NoteItemContent key={note.id} {...note} />
    );
}
NoteItem.propTypes = {
    note: PropTypes.object.isRequired,
};
export default NoteItem;