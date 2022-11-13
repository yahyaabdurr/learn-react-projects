/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";
import parser from 'html-react-parser';
import { PropTypes } from 'prop-types'


function NoteItemContent({ title, createdAt, body, id }) {
    return (
        <article className="note-item">
            <h3 className="note-item__title"><Link to={`/notes/${id}`}>{title}</Link></h3>
            <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>

        </article>
    );
}

NoteItemContent.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};


export default NoteItemContent;