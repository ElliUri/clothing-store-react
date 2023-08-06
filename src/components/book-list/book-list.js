import React, { Component } from "react";
import BookListItem from "../book-list-item/book-list-item";
import { connect } from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";
import { booksLoaded, booksRequested} from '../../actions/index'
import s from "./book-list.module.css";
import compose from "../../utils";
import Spinner from '../spinner/spinner'

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested } = this.props;
    booksRequested()
    bookstoreService.getBooks()
    .then((data) => { booksLoaded(data)
    });
  }
  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Spinner />
    }

    return (
      <ul>
        {
        books.map((book) => {
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

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps =  {
  booksLoaded,
  booksRequested
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, 
    mapDispatchToProps))
    (BookList)
