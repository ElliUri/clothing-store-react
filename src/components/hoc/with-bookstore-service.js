import React from "react";
import { BookstoreserviceConsumer } from "../bookstore-service-context/bookstore-service-context";

const withBookstoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <BookstoreserviceConsumer>
                { 
                    (bookstoreService) => {
                     return( <Wrapped {...props} 
            bookstoreService={bookstoreService} />)
                    }
                }
            </BookstoreserviceConsumer>
        )
    }
};

export default withBookstoreService; 
