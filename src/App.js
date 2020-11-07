import React from "react";
// import Pokemon from "./pokeAPI.js";
import Form from './requestForm.js';
import "./style/landing.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>RESTy</h1>
        <nav>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>History</li></a>
          <a href="#"><li>Help</li></a>
        </nav>
        <Form/>
      </div>
    );
  }
}

export default App;