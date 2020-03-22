import React from "react";
import "./Activities.scss";
import CardDeck from 'react-bootstrap/CardDeck'
import ActivityCard from "./activityCard/ActivityCard";

import activities1 from "../../assets/images/activities-01.jpeg";
import activities2 from "../../assets/images/activities-02.jpeg";
import activities3 from "../../assets/images/activities-03.jpeg";
import activities4 from "../../assets/images/activities-04.jpeg";
import activities5 from "../../assets/images/activities-05.jpeg";
import activities6 from "../../assets/images/activities-06.jpeg";

const Activities = () => {
  return (
    <div className="Activities container my-5">
      <h2>Things to do</h2>

      <CardDeck>
        <ActivityCard
          img={activities2}
          title="Hiking"
        />
        <ActivityCard
          img={activities1}
          title="Horseback riding"
        />
      </CardDeck>

      <CardDeck className="mt-5 mb-5">
        <ActivityCard
          img={activities3}
          title="Rafting"
        />
        <ActivityCard
          img={activities4}
          title="Camp Firing"
        />
      </CardDeck>

      <CardDeck>
        <ActivityCard
          img={activities5}
          title="Fishing"
        />

        <ActivityCard
          img={activities6}
          title="Mountain biking"
        />
      </CardDeck>
    </div>
  );
};
export default Activities;
