import React from "react";
import Aside from "./components/Aside";
import Main from "./components/Main";
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      activePage: "",
    };
  }

  handleClick = () => {
    this.setState({ activePage: this.state.activePage });
  };

  render() {
    return (
      <div className=" container flex">
        <Aside />

        <Main />
      </div>
    );
  }
}

export default App;
