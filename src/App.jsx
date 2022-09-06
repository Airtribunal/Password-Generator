import React, { useState } from 'react';
import './App.css';
import MovingComponent from 'react-moving-text';

const App = () => {
  // Tasks - controlled input to regulate an amount of the symbols when creating a password 

  const [password, setPassword] = useState([])
  const [isClicked, setIsClicked] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const characters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c',
    'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '*', '&', '$', '#', '!', '?', '=', '.', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  function generatePassword() {
    for (let i = 0; i < 15; i++) {
      const randomNumber = Math.floor(Math.random() * characters.length)
      const passwordLetter = characters[randomNumber]
      setPassword(prevPassword => prevPassword + passwordLetter)
    }
    setIsClicked(true)
  }

  function regeneratePassword() {
    setPassword([])
    if (isClicked) {
      generatePassword()
    }
  }

  function copy() {
    setIsActive(true)
    navigator.clipboard.writeText(password)
    setTimeout(() => {
      setIsActive(false)
    }, 2000)
  }

  return (
    <section id="generator">
      <div className="container">
        <div className="generator__content">
          <MovingComponent
            type="slideInFromBottom"
            duration="1000ms"
            delay=".1s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            <h1 className="title">Create <br /><strong>random password</strong></h1>
          </MovingComponent>
          <MovingComponent
            type="slideInFromRight"
            duration="1000ms"
            delay=".1s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            <div className="holder">
              <input
                type="text"
                value={password}
                className="input"
                readOnly
              />
              <button
                onClick={copy}
                id="copy-btn"
                className={isActive ? "button copy-btn active" : "button copy-btn"}>
                Copy
              </button>
            </div>
            <button
              onClick={isClicked ? regeneratePassword : generatePassword}
              id="generator-btn" className="button extra">{isClicked ? "Get new password" : "Generate password"}
            </button>
          </MovingComponent>
        </div>
      </div>
    </section>
  );
}

export default App;
