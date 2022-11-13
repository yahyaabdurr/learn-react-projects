import React from 'react';
import { useParams, Navigate, } from 'react-router-dom';

import NoteDetail from '../components/NoteDetail';
import { getNote } from '../utils/local-data';
import PropTypes from 'prop-types';

function DetailPageWrapper() {
    const { id } = useParams();

    return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNote(props.id)
        };
    }

    render() {

        if (this.state.note === undefined) {
            return (
                <Navigate to='*' />
            )

        }

        return (
            <section className='detail-page'>
                <NoteDetail {...this.state.note} />
            </section>
        );
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default DetailPageWrapper;
