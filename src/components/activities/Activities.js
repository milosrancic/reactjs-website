import React from "react";
import "./Activities.scss";
import CardDeck from 'react-bootstrap/CardDeck'
import ActivityCard from "./activityCard/ActivityCard";

import activities01 from "../../assets/images/activities-01.jpeg";
import activities02 from "../../assets/images/activities-02.jpeg";
import activities03 from "../../assets/images/activities-03.jpeg";
import activities04 from "../../assets/images/activities-04.jpeg";
import activities05 from "../../assets/images/activities-05.jpeg";
import activities06 from "../../assets/images/activities-06.jpeg";

const Activities = () => {
  return (
    <div className="Activities container my-5">
      <h2>Things to do</h2>

      <CardDeck>
        <ActivityCard
          img={activities02}
          title="Hiking"
        />
        <ActivityCard
          img={activities01}
          title="Horseback riding"
        />
      </CardDeck>

      <CardDeck className="my-5">
        <ActivityCard
          img={activities03}
          title="Rafting"
        />
        <ActivityCard
          img={activities04}
          title="Camp Firing"
        />
      </CardDeck>

      <CardDeck>
        <ActivityCard
          img={activities05}
          title="Fishing"
        />

        <ActivityCard
          img={activities06}
          title="Mountain biking"
        />
      </CardDeck>
    </div>
  );
};
export default Activities;
