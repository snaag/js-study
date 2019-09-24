import React, { useState, useRef } from "react";
import About from "./About";

const App = () => {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState("");
  const isPass = useRef(false);

  const onSubmitForm = e => {
    e.preventDefault();
    setShowName(name);
    isPass.current = true;
  };

  const onChangeInput = e => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
  };

  return (
    <>
      {showName.trim().length > 0 ? (
        <h3 className="MainTitle">
          {showName} 님,<br></br> 같이 스터디 하실래요?
        </h3>
      ) : (
        <h3 className="MainTitle">이름을 입력해주세요</h3>
      )}

      {isPass.current && showName.trim().length > 0 ? (
        <About />
      ) : (
        <div class="input-group" id="form">
          <input
            type="text"
            name="name"
            class="form-control"
            value={name}
            onChange={onChangeInput}
          />
          <span class="input-group-btn">
            <button
              class="btn btn-default"
              type="button"
              onClick={onSubmitForm}
            >
              클릭
            </button>
          </span>
        </div>
      )}
    </>
  );
};

export default App;
