import React from 'react';
import ContactList from '../components/ContactList';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { deleteContact, getContacts } from '../utils/data';
import { LocaleConsumer } from '../context/LocaleContext';


function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}
class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: getContacts(),
            keyword: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
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

    onDeleteHandler(id) {
        deleteContact(id);

        // update the contact state from data.js
        this.setState(() => {
            return {
                contacts: getContacts(),
            }
        });
    }

    render() {
        const contacts = this.state.contacts.filter((contact) => {
            return contact.name.toLowerCase().includes(this.state.keyword.toLowerCase());
        })
        return (

            <LocaleConsumer>
                {
                    ({ locale }) => {
                        return (
                            <section  >
                                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                                <h2>{locale === 'id' ? 'Daftar Kontak' : 'Contacts List'}</h2>
                                <ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
                            </section>
                        )
                    }
                }

            </LocaleConsumer >

        )
    }
}

export default HomePageWrapper;