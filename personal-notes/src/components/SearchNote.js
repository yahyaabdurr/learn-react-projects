
import PropTypes from 'prop-types'


function SearchNote({ keyword, keywordChange }) {
    return (
        <section className="search-bar">
            <input type="text" placeholder="Cari berdasarkan judul ..." value={keyword} onChange={(event => keywordChange(event.target.value))} />
        </section>
    )

}

SearchNote.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired

}


// class SearchNote extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             keyword: ''

//         }

//         this.onKeywordChangeEventHandler = this.onKeywordChangeEventHandler.bind(this);


//     }

//     onKeywordChangeEventHandler(event) {

//         this.setState(() => {
//             return {
//                 keyword: event.target.value,
//             }
//         })

//         event.preventDefault();
//         this.props.onSearchHandler(this.state);
//     }

//     render() {
//         return <div className="note-search">
//             <input type="text" placeholder="Cari Catatan..." value={this.state.keyword} onChange={this.onKeywordChangeEventHandler} />
//         </div>
//     }




// }
export default SearchNote;