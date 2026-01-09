import React from "react";
import "./Footer.scss";

function FooterComponent() {
  return (
    <footer className="footer-container">
      <p>© 2024 - {new Date().getFullYear()}</p>
    </footer>
  );
}

export default FooterComponent;
