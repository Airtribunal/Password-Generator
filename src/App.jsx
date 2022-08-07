import React from 'react';
import './App.css';

const App = () => {
  return (
    <section id="generator">
      <div className="container">
        <div className="generator__content">
          <h1 className="title">Create <br /><strong>random password</strong></h1>
          <div className="holder">
            <input type="text"  className="input" readOnly/>
            <button id="copy-btn" className="button">Copy</button>
          </div>
          <button id="generator-btn" className="button">Generate password</button>
        </div>
      </div>
    </section>
  );
}

export default App;
