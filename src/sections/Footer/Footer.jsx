import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <center>
      <section id="footer" className={styles.container}>
        <p>
          &#169; 2024 Pitabash Behera.
          <br />
          All rights reserved.
        </p>
      </section>
    </center>
  );
};

export default Footer;
