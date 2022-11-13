import React from 'react';
import PropTypes from 'prop-types'


import { useNavigate, useSearchParams } from 'react-router-dom';
import { getActiveNotes } from '../utils/local-data';
import NoteList from '../components/NoteList';
import SearchNote from '../components/SearchNote';
import { AiOutlinePlus } from 'react-icons/ai'
import EmptyMessage from '../components/EmptyMessage';


function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword') || '';
    const navigate = useNavigate();
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }


    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} navigate={navigate} />
}
class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onAddPage = this.onAddPage.bind(this);
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

    onAddPage() {
        this.props.navigate('notes/new')
    }

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
        })

        return (
            <section className='homepage'>
                <h2>Catatan Aktif</h2>
                <SearchNote keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                {notes.length > 0 ? <NoteList notes={notes} /> : <EmptyMessage />}

                <div className='homepage__action'>
                    <button className='action' type='button' title='Tambah' onClick={this.onAddPage} >
                        <AiOutlinePlus />
                    </button>
                </div >
            </section >
        )
    }
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
};

export default HomePageWrapper;