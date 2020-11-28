import React from "react";
import PropTypes from "prop-types";
import styles from "./Hompage.module.css";
import Section1 from "./section1/section1.jsx"
import COVID_19 from "./COVID-19/COVID-19.jsx"
import Election from "./2020Election/Election.jsx"
import {Route,Switch, Link} from "react-router-dom"

const HomePage = (props) => {

  return (
	<div>
	  <section>
	    <Section1 articles={props.articles}/>
	  </section>
	  <section>
	    <COVID_19 articles={props.articles}/>
	  </section>
	  <section>
	    <Election articles={props.articles}/>
	  </section>
	  <section className={styles.banner}>
	    <Link to="/ContactUs">
		<h1>Contact Us</h1>
		</Link>
		<Link to="/AboutUs">
		<h1>About Us</h1>
		</Link>
	  </section>
	</div>
  );
};

HomePage.propTypes = {
	articles: PropTypes.array.isRequired
}
export default HomePage;