import "./Card.css";
import { AiFillStar } from "react-icons/ai";
import React from "react";
import { useHistory } from "react-router";

const Cards = ({ name, star }) => {
  const history = useHistory();
    const navigateTo = () => history.push('/info');
  
  const no = Number(star); // number of stars

  
  return (
   
    console.log(typeof no),
    (
      <div className="card" onClick={navigateTo}>
        <section className="outer-box">
          <section className="inner-box"></section>
          <h3>{name}</h3>
          <p >
            Description: Random Description Lorem Ipsum Lorem Ipsum Lorem ipsum
            lorem ipsum
          </p>
          <section className="lower-section">
            <div className="star">
              <AiFillStar style={{ color: "yellow" }} />
            </div>
            <p className="learnmore">Learn more</p>
          </section>
        </section>
      </div>
    )
  );
};

export default Cards;
