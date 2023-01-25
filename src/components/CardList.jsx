import React, { Fragment } from "react";
import Card from "./Card";

const CardList = (props) => {
  const { robots } = props;
  if (true) {
    throw new Error("Nooooooo");
  }
  return (
    <div>
      {robots.map((user, index) => (
        <Card
          key={index}
          id={robots[index].id}
          name={robots[index].name}
          email={robots[index].email}
        />
      ))}
    </div>
  );
};

export default CardList;
