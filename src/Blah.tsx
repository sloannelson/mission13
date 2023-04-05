import React from "react";
import styles from "./Blah.module.css";

function TopBanner() {
  return (
    <div className="row">
      <div className="col-6">
        <img src="./JoelHiltonHeadshot.jpg" alt="Joel" />
      </div>
      <div className="col align-self-center text-start">
        <h1 className={styles.h1}>Joel's Film Collection</h1>
      </div>
    </div>
  );
}

export default TopBanner;
