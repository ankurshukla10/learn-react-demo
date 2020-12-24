import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//setup vars

const books = [
  {
    id: 0,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81zBVMvSjNL._AC_UL200_SR200,200_.jpg",
    title: "Midnight Sun",
    author: "Stephenie Meyer",
  },
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
    title: "A Promise Land",
    author: "Barack Obama",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81-349iYbfL._AC_UL200_SR200,200_.jpg",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
