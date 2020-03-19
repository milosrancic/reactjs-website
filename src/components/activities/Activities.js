import React from "react";
import "../../styles/Activities.css";
import CardDeck from 'react-bootstrap/CardDeck'
import ActivityCard from "./ActivityCard";

import activities1 from "../../assets/images/activities-01.jpeg";
import activities2 from "../../assets/images/activities-02.jpeg";
import activities3 from "../../assets/images/activities-03.jpeg";
import activities4 from "../../assets/images/activities-04.jpeg";
import activities5 from "../../assets/images/activities-05.jpeg";
import activities6 from "../../assets/images/activities-06.jpeg";

const Activities = () => {
  return (
    <div className="Activities container my-5">
      <h3>Things to do </h3>

      <CardDeck>
        <ActivityCard
          img={activities2}
          title="Hiking"
          text="This card has supporting text below as a natural lead-in to additional
        content."
        />
        <ActivityCard
          img={activities1}
          title="Horseback riding"
          text="This card has supporting text below as a natural lead-in to additional
        content."
        />
      </CardDeck>

      <CardDeck className="mt-5 mb-5">
        <ActivityCard
          img={activities3}
          title="Rafting"
          text="This card has supporting text below as a natural lead-in to additional
        content."
        />
        <ActivityCard
          img={activities4}
          title="Camp Firing"
          text="This card has supporting text below as a natural lead-in to additional
        content."
        />
      </CardDeck>

      <CardDeck>
        <ActivityCard
          img={activities5}
          title="Fishing"
          text="This card has supporting text below as a natural lead-in to additional
        content."
        />

        <ActivityCard
          img={activities6}
          title="Mountain biking"
          text="This card has supporting text below as a natural lead-in to additional
        content."
        />
      </CardDeck>
    </div>
  );
};
export default Activities;
