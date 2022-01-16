import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ReactNotification, { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

import styles from "./LearnPage.module.scss";
import BoxAnswer from "../../Components/BoxAnswer/BoxAnswer";
import BoxQuestion from "../../Components/BoxQuestion/BoxQuestion";
import VocabsContext from "../../store/VocabsContext";

function LearnPage() {
  console.log("re-render-LearnPage");

  const { vocabs } = useContext(VocabsContext);
  console.log(vocabs);

  const [indexCorrect, setIndexCorrect] = useState(() => {
    const storageIndexCorrect = parseInt(
      localStorage.getItem("indexCurrentVocab")
    );
    if (!storageIndexCorrect || storageIndexCorrect >= vocabs.length - 1) {
      return 0;
    } else {
      return storageIndexCorrect;
    }
  });

  const handleClickAnswer = (vocab) => {
    if (vocab.en === vocabs[indexCorrect].en) {
      store.addNotification({
        title: "Chính xác",
        message: "Bạn đã chọn kết quả đúng",
        type: "success",
        container: "top-right",
        animationIn: ["animate", "fadeIn"],
        animationOut: ["animate", "fadeOut"],

        dismiss: {
          duration: 2000,
          showIcon: true,
        },
        width: 250,
      });
      setIndexCorrect((prev) => {
        if (prev === vocabs.length - 1) {
          localStorage.setItem("indexCurrentVocab", 0);
          setIndexCorrect(0);
        } else {
          localStorage.setItem("indexCurrentVocab", prev + 1);
          setIndexCorrect(prev + 1);
        }
      });
    } else {
      store.addNotification({
        title: "Thất bại",
        message: "Bạn đã chọn kết quả sai",
        type: "danger",
        container: "top-right",
        animationIn: ["animate", "fadeIn"],
        animationOut: ["animate", "fadeOut"],

        dismiss: {
          duration: 2000,
          showIcon: true,
        },
        width: 250,
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.links}>
        <Link className={styles.btnHome} to="/">
          Trang Chủ
        </Link>
        <Link className={styles.btnManage} to="/vocabslist">
          Quản lý từ vựng
        </Link>
      </div>
      <div className={styles.notification}>
        <ReactNotification />
      </div>
      <BoxQuestion arrayVocabs={vocabs} index={indexCorrect} />
      <h1> Hãy chọn đáp án đúng nhất </h1>
      <BoxAnswer
        arrayVocabs={vocabs}
        index={indexCorrect}
        onClickAnswer={handleClickAnswer}
      />
    </div>
  );
}

export default LearnPage;
