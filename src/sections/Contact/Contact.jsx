import styles from "../Contact/ContactStyle.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <form action="https://api.web3forms.com/submit" method="POST">
        <h1>Contact</h1>
        <input
          type="hidden"
          name="access_key"
          value="2e3fea6e-e3bf-4276-881f-07a0d500eb4f"
        ></input>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="Textarea" hidden>
            Textarea
          </label>
          <textarea
            type="Text"
            name="Message"
            id="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <div className="formGroup">
          <input type="submit" className={styles.submit} value="submit" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
