import "./Footer.css";

function Footer() {
  return (
    <div className="footer" data-testid="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              felis ut felis accumsan fringilla vitae at elit.
            </p>
          </div>
          <div className="footer-middle">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <h3>Contact Us</h3>
            <p>
              Address: 1234 Main Street, City, Country
              <br />
              Email: contact@example.com
              <br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Your Website Name. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
