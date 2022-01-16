import React from "react";
import styles from "./BoxAnswer.module.scss";

function BoxAnswer({ arrayVocabs, index, onClickAnswer }) {
  console.log("re-render-boxanswer");
  console.log(arrayVocabs);
  let arrayAnswer = [];

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  //algorithm find random answer
  
  function findRandomAnswer() {
    if (arrayVocabs.length > 0) {
      arrayAnswer.push(arrayVocabs[index]);
      let i = 3;
      while (i >= 0) {
        let indexRandom = Math.floor(Math.random() * arrayVocabs.length);
        if (arrayAnswer.length === 4) {
          return;
        } else {
          if (
            indexRandom === index ||
            arrayAnswer.includes(arrayVocabs[indexRandom])
          ) {
            i++;
          } else {
            arrayAnswer.push(arrayVocabs[indexRandom]);
            i--;
          }
        }
      }
    }
  }
  findRandomAnswer();

  const handleClickAnswer = (vocab) => {
    onClickAnswer(vocab);
  };

  return (
    <div className={styles.container}>
      {shuffle(arrayAnswer).map((vocab, index) => (
        <div
          onClick={() => handleClickAnswer(vocab)}
          key={index}
          className={styles.item}
        >
          <span>{vocab.vn}</span>
        </div>
      ))}
    </div>
  );
}

export default React.memo(BoxAnswer);
