import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//named export
import { books } from "./books";
//default export
import Book from "./book";

//setup vars

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} bookProps={book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
