import React from 'react'
import PropTypes from 'prop-types'
import { FiCheck } from 'react-icons/fi'

class NoteInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
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
            <div className='add-new-page__input'>

                <input className="add-new-page__input__title" type="text" placeholder="Catatan rahasia" value={this.state.title} onChange={this.onTitleChangeEventHandler} />

                <input className="add-new-page__input__body" type="text" placeholder="Sebenarnya saya adalah" value={this.state.body} onChange={this.onBodyChangeEventHandler} />

                <div className='add-new-page__action'>
                    <button className='action' type='button' title='Simpan' onClick={this.onSubmitEventHandler}>
                        <FiCheck />
                    </button>
                </div>
            </div>
        )
    }
}
NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
};


export default NoteInput;
