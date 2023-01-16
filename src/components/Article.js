import React from "react";
import blogData from "../data/blog";

function Article({ title, preview, date = "January 1, 1970" }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{preview}</p>
      <small>{date}</small>
    </article>
  );
}
export default Article;
