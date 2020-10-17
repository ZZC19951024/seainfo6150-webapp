import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

const ArticleList = (props) => {
	let displayContent;
	let List = Object.values(props.article);
	if (List.length){
		displayContent = (
		<ul>
        {List.map((item) => (
          <li key={item.slug}>
		  <ArticleListItem listItem = {item}/>
		  </li>
        ))}
		</ul>
    );
	}else {
    displayContent = <div>You have no data!</div>;
  }
	
	return(
		<article>
		{displayContent}
		</article>
	)
}

ArticleList.propTypes = {
};
export default ArticleList;

