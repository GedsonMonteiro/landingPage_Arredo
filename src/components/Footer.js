import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Coluna 1 */}
          <div className="col">
            <h4>About us</h4>
            <ui className="list-unstyled">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              </p>
            </ui>
          </div>
          {/* Coluna 2 */}
          <div className="col">
            <h4>Useful links</h4>
            <ui className="list-unstyled">
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Downloadable product</Link><br />
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>On sale product</Link><br />
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Our new product</Link><br />
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Order tracking</Link><br />
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Payment methods</Link>
            </ui>
          </div>
          {/* Coluna 3 */}
          <div className="col">
          <h4>Download</h4>
            <ui className="list-unstyled">
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</Link><br />
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Facebook</Link><br />
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Twitter</Link><br />
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Pinterest</Link><br />
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Youtube</Link>
            </ui>
          </div>
          {/* Coluna 4 */}
          <div className="col">
          <h4>Call center</h4>
            <ui className="list-unstyled">
              <p>Monday to Friday: 9-20<br />
                 Saturday to Sunday: closed</p>

              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>arredo@qode.com</Link><br />
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>+1 333 555</Link>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            &nbsp;&nbsp;
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link>
            &nbsp;&nbsp;
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Shop</Link>
            &nbsp;&nbsp;
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Portfolio</Link>
            &nbsp;&nbsp;
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link>
            &nbsp;&nbsp;
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link>
          </p>
        </div>
        <div>
          <span>Made with love by</span>&nbsp;<Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Qode Interactive</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;