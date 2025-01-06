import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Contact Us</h3>
        <p>
          If you have any questions or would like to get in touch, please feel
          free to contact us. We will be happy to help.
        </p>
        <ul>
          <li>contact@gmail.com</li>
          <li>+91 123 456 7890</li>
          <li>123 Main Street, City, Country</li>
        </ul>
      </div>
      <div className="contact-col">
        <h3>Send Us a Message</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
