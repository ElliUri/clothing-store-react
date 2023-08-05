import React, { Component } from "react";
import BookListItem from "../book-list-item/book-list-item";
import { connect } from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";
import { booksLoaded } from '../../actions/index'
import s from "./book-list.module.css";
import compose from "../../utils";

class BookList extends Component {
  componentDidMount() {
    // 1. recieve data
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    // 2. dispatch action to store
    this.props.booksLoaded(data)
  }
  render() {
    const { books } = this.props;

    return (
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id} className={s.book_list}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps =  {
  booksLoaded
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, 
    mapDispatchToProps))
    (BookList)
