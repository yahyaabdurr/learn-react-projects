
import React from 'react'
import { getInitialData } from '../utils';
import NoteAppBody from './NoteAppBody';
import NoteAppHeader from './NoteAppHeader';


class PersonalNoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            keyword: ''
        }


        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);

    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {

                        id: +new Date(),
                        title: title,
                        body: body,
                        archived: false,
                        createdAt: Date.now()
                    }
                ]
            }
        })

    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        })

        // const notes = this.state.notes.filter(note => note.title.includes(keyword));

        // this.setState({
        //     notes
        // })

    }

    onDeleteHandler(id) {
        console.log(id)
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const listNotes = this.state.notes;
        var objIndex = listNotes.findIndex((note => note.id === id));

        listNotes[objIndex].archived = !listNotes[objIndex].archived;
        this.setState({
            listNotes
        })

    }

    render() {
        const notes = this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.keyword.toLowerCase()));
        return (

            <div>
                <NoteAppHeader keyword={this.state.keyword} kerwordChangeHandler={this.onKeywordChangeHandler} />
                <NoteAppBody onAddNoteHandler={this.onAddNoteHandler} notes={notes} onArchive={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
            </div>

        )
    }
}
export default PersonalNoteApp;
