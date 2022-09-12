import React from 'react'

class NoteInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            body: '',
            title: '',
        }

        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }
    onTitleChangeEventHandler(event) {
        this.setState(() => {

            if (event.target.value.length <= 50) {
                return {
                    title: event.target.value,

                }
            }


        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <div className='note-input'>
                <h2>Buat Catatan</h2>
                <p class="note-input__title__char-limit">
                    Sisa Karakter: {50 - this.state.title.length}
                </p>
                <form onSubmit={this.onSubmitEventHandler}>
                    <input class="note-input__title" type="text" placeholder="Ini adalah judul" required value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea class="note-input__body" type="text" placeholder='Tuliskan catatan Anda disini..' value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>
                    <button type='submit'>Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;
