import React from "react";

const Book = (props) => {
  const { img, title, author } = props.bookProps;
  const clickHandler = () => {
    console.log(title);
  };
  //attribute, eventHandler
  //onClick, onMouseOver events
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Buy
      </button>
    </article>
  );
};

export default Book;
