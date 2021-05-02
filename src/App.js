import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './Components/BookSearch'
import BookList from './Components/BookList'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
 	state = {
    	/**
     	* TODO: Instead of using this state variable to keep track of which page
     	* we're on, use the URL in the browser's address bar. This will ensure that
     	* users can use the browser's back and forward buttons to navigate between
     	* pages, as well as provide a good URL they can bookmark and share.
     	*/
    	books: [],
    	query: '',
    	searchedBooks: []
  	}
  	componentDidMount() {
   		BooksAPI.getAll()
			.then((books) => {
      	this.setState(() => ({
      		books
      	}))
    	})
  	}

 
 	updateBookShelf = (book, shelf) => {
      	let updatedBooks = this.state.books.filter(b => b.id !== book.id)
        if (shelf !== 'none') {
         book.shelf = shelf
          updatedBooks = updatedBooks.concat(book)
        }
		this.setState({books: updatedBooks})
      	
      	
     	BooksAPI.update(book, shelf)
 	}
 
	onQuery = (query) => {
   		this.setState(() => ({
     		query
  		}))
  		if (query.length > 0) {
     		BooksAPI.search(query)
      			.then((res) => {
              	if (res.length > 0) {
                  const updatedBooks = res.map(book => {this.state.books.map(b => {
                    if (b.id === book.id) {
                     book.shelf = b.shelf 
                    } return b }); return book})
	     		this.setState(() => ({
                 		searchedBooks: updatedBooks }))
     			} else { 
          			this.setState(() => ({
                 		searchedBooks: []
             		}))}})
  		} else {
   			this.setState(() => ({
                 searchedBooks: []
             })) 
  		}
 	}
  
	resetSearch = () => {
		this.setState({query: '', searchedBooks: []})
    }
	render() {
      	return (
		<div className="app">
			<Route exact path="/" render={() => (
				<BookList 
      				books={this.state.books} 
					updateBookShelf={this.updateBookShelf} 
					resetSearch={this.resetSearch} />	
    		)} />
			<Route path="/search" render={() => (
				<BookSearch 
              		query={this.state.query} 
					searchedBooks={this.state.searchedBooks} 
					onQuery={this.onQuery} 
					updateBookShelf={this.updateBookShelf}
					resetSearch={this.resetSearch} />	
    		)} />
		</div>
    )
  }
}



export default BooksApp
