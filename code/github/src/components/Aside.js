import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faNewspaper,
  faUser,
  faBook,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Aside extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="aside">
        <Link to={"/"}>
          <div className="flex article-box">
            <FontAwesomeIcon className="icon" icon={faHouse} />
            <h2 className="home-head">Home</h2>
          </div>
        </Link>
        <Link to={"/articles"}>
          <div className="flex article-box">
            <FontAwesomeIcon className="icon" icon={faNewspaper} />
            <h2 className="home-head">Article</h2>
          </div>
        </Link>
        <Link to={"/got"}>
          <div className="flex article-box">
            <FontAwesomeIcon className="icon" icon={faUser} />
            <h2 className="home-head">People</h2>
          </div>
        </Link>

        <Link to="Books">
          <div className="flex article-box">
            <FontAwesomeIcon className="icon" icon={faBook} />
            <h2 className="home-head">Books</h2>
          </div>
        </Link>

        <div className="flex article-box">
          <FontAwesomeIcon className="icon" icon={faCircleQuestion} />
          <h2 className="home-head">Help & Support</h2>
        </div>
      </div>
    );
  }
}

export default Aside;
