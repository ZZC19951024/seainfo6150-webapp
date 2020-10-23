import React, { useState } from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx"

const ArticleListItem = (props) => {
	const [buttonAction, setButtonAction] = useState(false);
	let displayContent;
	var buttonText;
	if(!buttonAction){
		displayContent = (
		<article>
		<h2 style = {{color:"red"}}>{props.article.title}</h2>
		</article>
		);
		buttonText = "show more";
	} else{
		displayContent = (
		<article>
		<h2 style = {{color:"red"}}>{props.article.title}</h2>
		<p>{props.article.shortText}</p>
		<time dateTime={props.article.timeStamp}><b>
          {props.article.displayDate}
        </b></time>
		</article>
		);
		buttonText = "show less";
	}
	console.log(buttonAction);
  return (
    <li className = "ListItem">
        {displayContent}<br/>
		<ArticleTextToggleButton onClick = {() => setButtonAction(!buttonAction)} buttonText = {buttonText}/>
    </li>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
