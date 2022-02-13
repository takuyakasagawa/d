import React, { useEffect, useState } from "react";
import ColofulMessage from "./compornents/colorfulMessage";

const App = () => {
  //console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red", fontSize: "30px", backgroundColor: "blue" }}>
        ポーカー　ハンドの勝率
      </h1>
      <ColofulMessage color="pink">お元気ですか</ColofulMessage>
      <ColofulMessage color="blue">元気です!!</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>ああああ</p>}
    </>
  );
};

export default App;
