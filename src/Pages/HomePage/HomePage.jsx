import React from "react";
import { Link } from "react-router-dom";

import styles from "./HomePage.module.scss";

function HomePage() {
  console.log("re-render-Homepage");
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Learn Vocabulary </h1>
      <div className={styles.links}>
        <Link className={styles.btnLearn} to="/learn">
          Học Từ Vựng
        </Link>
        <Link className={styles.btnManage} to="vocabslist">
          Quản lý từ vựng
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
