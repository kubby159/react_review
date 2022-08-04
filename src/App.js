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

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactPractice</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...items];
          copy[0] = "여자코트 추천";
          itemFunction(copy);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          const descending = [...items].sort((a, b) => {
            const upperCaseA = a.toUpperCase();
            const upperCaseB = b.toUpperCase();

            if (upperCaseA < upperCaseB) return 1;
            if (upperCaseA > upperCaseB) return -1;
            if (upperCaseA === upperCaseB) return 0;
          });
          console.log(descending);
          itemFunction(descending);
        }}
      >
        정렬버튼
      </button>

      {items.map((item) => (
        <div className="list">
          <h4>
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
    </div>
  );
}

export default App;
