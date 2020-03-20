import React from "react";
import "./Activities.css";
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
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nemo impedit accusantium deserunt, dolor dolorum."
        />
        <ActivityCard
          img={activities1}
          title="Horseback riding"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nemo impedit accusantium deserunt, dolor dolorum."
        />
      </CardDeck>

      <CardDeck className="mt-5 mb-5">
        <ActivityCard
          img={activities3}
          title="Rafting"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nemo impedit accusantium deserunt, dolor dolorum."
        />
        <ActivityCard
          img={activities4}
          title="Camp Firing"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nemo impedit accusantium deserunt, dolor dolorum."
        />
      </CardDeck>

      <CardDeck>
        <ActivityCard
          img={activities5}
          title="Fishing"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nemo impedit accusantium deserunt, dolor dolorum."
        />

        <ActivityCard
          img={activities6}
          title="Mountain biking"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nemo impedit accusantium deserunt, dolor dolorum."
        />
      </CardDeck>
    </div>
  );
};
export default Activities;
