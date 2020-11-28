import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactUs.module.css";

const ContactUs = () => {

  return (
	<div className={styles.wrapper}>
	  <h1>Please Contact Us</h1>
	  <section>
	    <p><b>Phone:</b>215-123-4567</p>
		<p><b>Adress:</b>Seattle xxxxxxxxx</p>
		<p><b>Email:</b>1234@gmail.com</p>
	  </section>
	</div>
  );
};

//NotFound.propTypes = {


export default ContactUs;
