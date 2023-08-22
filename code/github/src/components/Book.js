import React from "react";
import { books } from "../data";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: books,
    };
  }

  handleBooks = () => {
    if (this.props.searchValue == "") {
      this.setState({
        bookList: books,
      });
    } else {
      let searchedBooks = books.filter((book) => {
        if (book.toLowerCase().includes(this.props.searchValue.toLowerCase())) {
          return book;
        }
      });
      this.setState({
        bookList: searchedBooks,
      });
    }
  };

  componentDidMount() {
    this.handleBooks();
  }

  render() {
    return (
      <div className="book">
        <header className="headerbooks">
          <h1 className="h1"> Bookly</h1>
        </header>
        <input
          class="search"
          type="search"
          value={this.props.searchValue}
          onChange={this.props.handelSearch}
          name="search"
          placeholder="Search people"
        />
        <ul className="booklist">
          {books.map((book) => {
            return (
              <>
                <li className="container2 li">
                  <img className="imagebook" src={book.image} alt="#" />
                  <h2 className="title">{book.title}</h2>
                  <p className="author">{book.author}</p>
                  <button className="buy-now"> Buy Now</button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Book;
