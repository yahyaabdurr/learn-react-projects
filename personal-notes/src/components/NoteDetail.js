import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';
import { useNavigate } from "react-router-dom";

import { MdOutlineDeleteOutline, MdOutlineArchive, MdOutlineUnarchive } from "react-icons/md";
import { archiveNote, deleteNote, unarchiveNote } from '../utils/local-data';

function NoteDetail({ title, createdAt, body, id, archived }) {

    const navigate = useNavigate();
    function onDeleteHandler(id) {
        deleteNote(id);
        navigate('/');
    }

    function onArchiveHandler(id) {
        archiveNote(id);
        navigate('/');
    }

    function onUnarchiveHandler(id) {
        unarchiveNote(id);
        navigate('/');
    }
    return (
        <div>

            <h3 className='detail-page__title'>{title}</h3>
            <p className='detail-page__createdAt'>{showFormattedDate(createdAt)}</p>
            <div className='detail-page__body'>
                {body}
            </div>
            <div className='detail-page__action'>
                {archived ? <button className='action' type='button' title='Aktifkan' onClick={() => onUnarchiveHandler(id)}>
                    <MdOutlineUnarchive />
                </button> : <button className='action' type='button' title='Arsipkan' onClick={() => onArchiveHandler(id)}>
                    <MdOutlineArchive />
                </button>}

                <button className='action' type='button' title='Hapus' onClick={() => onDeleteHandler(id)}>
                    <MdOutlineDeleteOutline />
                </button>
            </div>

        </div>
    );
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired

};

export default NoteDetail;
