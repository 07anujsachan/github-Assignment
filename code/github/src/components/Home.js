import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="container4">
        <h1 className="home-head2">🚀 Welcome to Homepage! </h1>
        <ul>
          <a className="links" href="/articles">
            <li>Article</li>
          </a>
          <a className="links" href="/got">
            <li>People</li>
          </a>
          <a className="links" href="/books">
            <li>Books</li>
          </a>
        </ul>
      </div>
    );
  }
}

export default Home;
