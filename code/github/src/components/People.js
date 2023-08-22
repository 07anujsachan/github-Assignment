import React from "react";
import { gotHouses } from "../data";

class People extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      searchValue:""
   }
  }

  render() {
    return (
      <div className="people">
        <header>
          <h1>👑 Peoples of GOT</h1>
          
        </header>
        <input
            class="search"
            type="search"
            name="search"
            placeholder="Search people"
          />

        <ul className="container   ">
          {gotHouses.map((house) =>
            house.people.map((people) => {
              return (
                <li className="house">
                  {" "}
                  {
                    <>
                      <div className="flex ">
                        <img className="image" src={people.image} alt="#" />
                        <h2 className="h2"> {people.name}</h2>
                      </div>
                      <p className="para">{people.description}</p>
                      <button className="button"> Learn More!</button>
                    </>
                  }
                </li>
              );
            })
          )}
        </ul>
      </div>
    );
  }
}

export default People;
