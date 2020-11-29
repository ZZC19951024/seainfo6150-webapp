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
	  <form>
	    <label for="fname">First name:</label>
		<input type="text" id="fname" name="fname"/><br></br>
		<label for="lname">Last name:</label>
		<input type="text" id="lname" name="lname"/><br></br>
		<label for="sex">Sex:</label>
		<select name="sex" id="sex">
		  <option value="male">male</option>
		  <option value="female">female</option>
		</select><br></br>
		<button>submit</button>
	  </form>
	</div>
  );
};

//NotFound.propTypes = {


export default ContactUs;
