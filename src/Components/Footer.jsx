import React from "react";

function Footer() {

    const CurrentDate = new Date();
    const CurrentYear = CurrentDate.getFullYear();

  return (
    <footer>
      <p>
        Copyright <i class="far fa-copyright"></i> {CurrentYear}
      </p>
    </footer>
  );
}

export default Footer;
