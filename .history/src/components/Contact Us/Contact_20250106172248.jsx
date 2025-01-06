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
          <li>-91 123 456 7890</li>
          <li>123 Main Street, City, Country</li>
        </ul>
      </div>
      <div className="contact-col"></div>
    </div>
  );
};

export default Contact;