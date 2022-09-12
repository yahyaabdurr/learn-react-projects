
import React from "react";


function SearchNote({ keyword, onKeywordChangeEventHandler }) {
    return (
        <div className="note-search">
            <input type="text" placeholder="Cari Catatan..." value={keyword} onChange={(event => onKeywordChangeEventHandler(event.target.value))} />
        </div>
    )

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