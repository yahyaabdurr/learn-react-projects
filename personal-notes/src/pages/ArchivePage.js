import React from 'react';
import PropTypes from 'prop-types'


import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../utils/local-data';
import NoteList from '../components/NoteList';
import SearchNote from '../components/SearchNote';

import EmptyMessage from '../components/EmptyMessage';


function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword') || '';
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }


    return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}
class ArchivePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getArchivedNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);

    }

    onKeywordChangeHandler(keyword) {

        this.setState(() => {
            return {
                keyword,
            }
        })
        this.props.keywordChange(keyword);

    }




    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
        })

        return (
            <section className='archives-page'>
                <h2>Catatan Arsip</h2>
                <SearchNote keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                {notes.length > 0 ? <NoteList notes={notes} /> : <EmptyMessage />}

            </section >
        )
    }
}

ArchivePage.propTypes = {
    defaultKeyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
};

export default ArchivePageWrapper;