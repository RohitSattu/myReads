import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class BookList extends Component {
  
  static propTypes = {
    books: PropTypes.array.isRequired,
	updateBookShelf: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired
  }
  
  render() {
   return (
	<div className="list-books">
		<div className="list-books-title">
			<h1>MyReads</h1>
		</div>
		<div className="list-books-content">
			<div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">Currently Reading</h2>
					<div className="bookshelf-books">
						<Book books={this.props.books.filter((book) => book.shelf === 'currentlyReading')} updateBookShelf={this.props.updateBookShelf}/>
					</div>
				</div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">Want to Read</h2>
					<div className="bookshelf-books">
						<Book books={this.props.books.filter((book) => book.shelf === 'wantToRead')} updateBookShelf={this.props.updateBookShelf}/>
					</div>
				</div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">Read</h2>
					<div className="bookshelf-books">
						<Book books={this.props.books.filter((book) => book.shelf === 'read')} updateBookShelf={this.props.updateBookShelf}/>
					</div>
				</div>
			</div>
		</div>
		<div className="open-search" onClick={this.props.resetSearch}>
			<Link to="/search" >
			Add a book</Link>
		</div>
	</div>
	)
	}
}

export default BookList