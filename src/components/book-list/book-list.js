import React, { Component } from "react";
import BookListItem from "../book-list-item/book-list-item";
import { connect } from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";
import { fetchBooks} from '../../actions/index'
import ErrorIndicator from '../eroor-indicator/error-indicator'
import s from "./book-list.module.css";
import compose from "../../utils";
import Spinner from '../spinner/spinner'

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator/>
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

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch,{bookstoreService})=> {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  }
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
  )(BookList)
