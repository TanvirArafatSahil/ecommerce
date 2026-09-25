import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";


function Footer(){

  return (

    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <div className="footer-logo">
            LOGO
          </div>

          <p>
            We are an e-commerce platform dedicated to providing
            safe and reliable food to every home.
          </p>

          <div className="footer-contact-item">
            <MapPin size={16} />
            <span>Dhaka, Bangladesh</span>
          </div>

          <div className="footer-contact-item">
            <Phone size={16} />
            <span>+8800000000000</span>
          </div>

          <div className="footer-contact-item">
            <Mail size={16} />
            <span>contact@example.com</span>
          </div>

        </div>


        <div className="footer-column">

          <h4>Information</h4>

          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Company Information</li>
            <li>Our Stories</li>
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
          </ul>

        </div>


        <div className="footer-column">

          <h4>Shop By</h4>

          <ul>
            <li>Oil &amp; Ghee</li>
            <li>Honey</li>
            <li>Dates</li>
            <li>Spices</li>
            <li>Nuts &amp; Seeds</li>
            <li>Beverage</li>
            <li>Functional Foods</li>
          </ul>

        </div>


        <div className="footer-column">

          <h4>Support</h4>

          <ul>
            <li>Support Center</li>
            <li>How to Order</li>
            <li>Order Tracking</li>
            <li>Payment</li>
            <li>Shipping</li>
            <li>FAQ</li>
          </ul>

        </div>


        <div className="footer-column">

          <h4>Consumer Policy</h4>

          <ul>
            <li>Happy Return</li>
            <li>Refund Policy</li>
            <li>Exchange</li>
            <li>Cancellation</li>
            <li>Pre-Order</li>
            <li>Extra Discount</li>
          </ul>

        </div>

      </div>


      <div className="footer-bottom">

        <p>© {new Date().getFullYear()} All rights reserved.</p>

        <div className="footer-social">

          <a href="#" aria-label="Facebook">
            <Facebook size={18} />
          </a>

          <a href="#" aria-label="Twitter">
            <Twitter size={18} />
          </a>

          <a href="#" aria-label="Instagram">
            <Instagram size={18} />
          </a>

        </div>

      </div>

    </footer>

  );

}


export default Footer;
