import React, { Component } from "react"
import PropTypes from 'prop-types'

class Book extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
  }
  
  render() { 
    return (
	<div className="list-books-content">
    	<div>
      		<ol className="books-grid">
      		{this.props.books.map((book) => 
            	 <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:(book.imageLinks && book.imageLinks.smallThumbnail ? `url(${book.imageLinks.smallThumbnail})` : 'none' )}}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf ? book.shelf : "none"} onChange={(event) => this.props.updateBookShelf(book, event.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
						  <div className="book-authors">
                            {(book.authors && book.authors.length > 1) ? book.authors.join(",") : book.authors}
						  </div>
                        </div>
                      </li>)}
			</ol>
		</div>
	</div>
    )
  }
}

export default Book
