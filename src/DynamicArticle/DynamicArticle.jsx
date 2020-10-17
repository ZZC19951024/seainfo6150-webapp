import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      <header>
        <h1>{props.test.title}</h1>
        <address>
          by {props.test.author} (
          <a href={props.test.authorEmail}>{props.test.authorEmail}</a>)
          <br />
        </address>
        <time dateTime={props.test.timeStamp}>{props.test.displayDate}</time>
      </header>
      <HTMLText text={props.test.text} />
    </article>
  );
};

export default DynamicArticle;
