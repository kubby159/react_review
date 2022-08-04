import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [items, itemFunction] = useState([
    "남자코트추천",
    "마라탕맛집",
    "파이썬맛집",
  ]);
  let [like, changeLike] = useState(0);
  const [toggle, toggleChange] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactPractice</h4>
      </div>

      {items.map((item) => (
        <div className="list">
          <h4 onClick={() => toggleChange(!toggle)}>
            {item}
            <span
              onClick={() => {
                changeLike(like + 1);
              }}
            >
              👍
            </span>
            {like}
          </h4>
          <p>2월 17일 발행</p>
        </div>
      ))}
      {toggle ? <Modal></Modal> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="model">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
