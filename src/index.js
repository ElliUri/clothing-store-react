import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/app/App";
import ErrorBoundry from "./components/error-boundry//error-boundry";
import BookstoreService from "./services/bookstore-service";
import { BookstoreserviceProvider } from "./components/bookstore-service-context/bookstore-service-context";
import store from "./store";

const bookstoreService = new BookstoreService();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreserviceProvider value={bookstoreService}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </BookstoreserviceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>
);
