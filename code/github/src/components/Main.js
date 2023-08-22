import React from "react";
import Book from "./Book";
import People from "./People";
import Article from "./Article";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
    };
  }
  handelSearch = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    return (
      <div className="main">
        <Routes>
          <Route
            path="/articles"
            element={
              <Article
                handelSearch={this.handelSearch}
                searchValue={this.state.searchValue}
              />
            }
          />

          <Route
            path="/books"
            element={
              <Book
                handelSearch={this.handelSearch}
                searchValue={this.state.searchValue}
              />
            }
          />
          <Route
            path="/got"
            element={
              <People
                handelSearch={this.handelSearch}
                searchValue={this.state.searchValue}
              />
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default Main;
