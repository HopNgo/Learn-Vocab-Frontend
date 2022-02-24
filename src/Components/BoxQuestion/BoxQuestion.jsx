import { CircularProgress } from "@material-ui/core";
import React from "react";
import styles from "./boxQuestion.module.scss";

function BoxQuestion({ arrayVocabs, index }) {
  console.log("re-render-BoxQuestion");
  console.log(arrayVocabs);
  return (
    <div className={styles.container}>
      <span>{arrayVocabs[index].en.length > 0 ? arrayVocabs[index].en : <CircularProgress />}</span>
    </div>
  );
}

export default React.memo(BoxQuestion);
