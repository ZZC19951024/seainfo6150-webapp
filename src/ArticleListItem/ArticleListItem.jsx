import React from "react";
import PropTypes from "prop-types";

const ArticleListItem = (props) => {
	return(
		<header>
		<h1>{props.listItem.title}</h1>
		<time dateTime={props.listItem.timeStamp}>{props.listItem.displayDate}</time>
		<p>{props.listItem.shortText}</p>
		</header>
	)
}

ArticleListItem.propTypes = {
};
export default ArticleListItem;