import React from "react";
import "../../styles/Activities.css";
import CardDeck from 'react-bootstrap/CardDeck'
import ActivityCard from "./ActivityCard";


import activities01 from "../../images/activities-01.jpeg";
import activities02 from "../../images/activities-02.jpeg";
import activities03 from "../../images/activities-03.jpeg";
import activities04 from "../../images/activities-04.jpeg";
import activities05 from "../../images/activities-05.jpeg";
import activities06 from "../../images/activities-06.jpeg";

const Activities = () => {
  return (
    <div className="Activities container my-5">
      <h3>Things to do </h3>

      <CardDeck>
        <ActivityCard
          img={activities02}
          title="Hiking"
          text="This card has supporting text below as a natural lead-in to additional
        content."
        />
        <ActivityCard
          img={activities01}
          title="Horseback riding"
          text="This card has supporting text below as a natural lead-in to additional
        content."
        />
      </CardDeck>

      <CardDeck className="mt-5 mb-5">
        <ActivityCard
          img={activities03}
          title="Rafting"
          text="This card has supporting text below as a natural lead-in to additional
        content."
        />
        <ActivityCard
          img={activities04}
          title="Camp Firing"
          text="This card has supporting text below as a natural lead-in to additional
        content."
        />
      </CardDeck>

      <CardDeck>
        <ActivityCard
          img={activities05}
          title="Fishing"
          text="This card has supporting text below as a natural lead-in to additional
        content."
        />

        <ActivityCard
          img={activities06}
          title="Mountain biking"
          text="This card has supporting text below as a natural lead-in to additional
        content."
        />
      </CardDeck>
    </div>
  );
};
export default Activities;
