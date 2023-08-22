import React from "react";
import { data } from "../data";

class Article extends React.Component {
  constructor(props) {
    super(props);

     this.state={
        searchValue:""
     }
  }

  render() {
    return (
      <div className="article">
        <header className="headerbooks">
          <h1 className="h1">Articles </h1>
        </header>
        <input
          class="search"
          type="search"
          name="search"
          placeholder="Search people"
        />
        <div className="container3">
          {data.map((article) => {
            return (
              <>
                <h3 className="article-title"> {article.title}</h3>
                <p className="article-author">{article.author}</p>
                <h4 className="article-slug">The slug of the article is:::{article.slug}</h4>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Article;
