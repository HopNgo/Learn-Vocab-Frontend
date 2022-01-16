import React from "react";
import styles from "./ManagePage.module.scss";
import VocabsTable from "../../Components/VocabsTable/VocabsTable";
import { Link } from "react-router-dom";

function ManagePage() {
  console.log("Re-render-ManagePage");
  return (
    <div className={styles.container}>
      <h1> Danh sách từ vựng </h1>
      <div className={styles.links}>
        <Link className={styles.btnHome} to="/">
          Trang Chủ
        </Link>
        <Link className={styles.btnManage} to="/learn">
          Học từ vựng
        </Link>
      </div>
      <VocabsTable />
    </div>
  );
}

export default ManagePage;
