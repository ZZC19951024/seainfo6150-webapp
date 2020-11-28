import React from "react";
import PropTypes from "prop-types";
import styles from "./AboutUs.module.css";

const AboutUs = () => {

  return (
	<div className={styles.wrapper}>
	  <h1 className={styles.header}>About Us</h1>
	  <section className={styles.article}>
	    <p> Website.com began in 2005. After years in the web hosting industry, we realized that it was near impossible for the average Jane or Joe to create their own website. Traditional web hosting services were simply too complicated, time consuming, and expensive to manage.</p>
		<p>We created the Website.com Site Builder with the user's perspective in mind. We wanted to offer a platform that would require no coding skills or design experience. We keep it simple, so users can focus on creating an amazing website that reflects their brand. Best of all - it's free. You can get online, showcase your brand, or start selling products right away.</p>
		<p>After seeing an increased need for ecommerce solutions, we developed one of the only fully-featured, free and commission-free online store builders, allowing business owners to launch their online business.</p>
	  </section>
	</div>
  );
};

//NotFound.propTypes = {


export default AboutUs;
