import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class BookSearch extends Component {
  static propTypes = {
	updateBookShelf: PropTypes.func.isRequired,
	onQuery: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    searchedBooks: PropTypes.array.isRequired,
    resetSearch: PropTypes.func.isRequired
  }
  render() {
   return (
    <div className="search-books">
		<div className="search-books-bar">
			<Link to='/'>
     			<button className="close-search" onClick={this.props.resetSearch}>Close</button>
    		</Link>
			<div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
						type="text" 
						placeholder="Search by title or author" 
						value={this.props.query} 
						onChange={(e) => this.props.onQuery(e.target.value)} 
						autoFocus />
			</div>
		</div>
		<div className="search-books-results">
			<Book books={this.props.searchedBooks} updateBookShelf={this.props.updateBookShelf}  />
		</div>
	</div>
	)
 }
}

export default BookSearch