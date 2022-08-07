import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [password, setPassword] = useState(["!2jarjaiof747:d."])
  const [isShowedPassword, setIsShowedPassword] = useState(false)

  function generatePassword() {
    setIsShowedPassword(prevState => !prevState)
  }

  return (
    <section id="generator">
      <div className="container">
        <div className="generator__content">
          <h1 className="title">Create <br /><strong>random password</strong></h1>
          <div className="holder">
            <input type="text" value={isShowedPassword ? password : ""} className="input" readOnly/>
            <button id="copy-btn" className="button">Copy</button>
          </div>
          <button onClick={generatePassword} id="generator-btn" className="button extra">Generate password</button>
        </div>
      </div>
    </section>
  );
}

export default App;
