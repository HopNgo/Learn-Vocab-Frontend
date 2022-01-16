import React from "react";
import styles from "./boxQuestion.module.scss";

function BoxQuestion({ arrayVocabs, index }) {
  console.log("re-render-BoxQuestion");
  console.log(arrayVocabs);
  return (
    <div className={styles.container}>
      <span>{arrayVocabs[index].en}</span>
    </div>
  );
}

export default React.memo(BoxQuestion);
