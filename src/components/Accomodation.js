import React from "react";
import Room from "./Room";
// import "../styles/Accomodation.css";

import accomodation1 from "../images/accomodation-01.jpg";
import accomodation2 from "../images/accomodation-02.jpg";
import accomodation3 from "../images/accomodation-03.jpg";
import accomodation4 from "../images/accomodation-04.jpg";
import accomodation5 from "../images/accomodation-05.jpg";

// each room will have its own "more information" button, and when hovered over it will show more info right there

const Accomodation = () => {
  return (
    <div id="accomodation">
      <h3>Accomodation</h3>
      <Room
        title="Standard Double Room"
        subtitle="Start from $70/night"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur temporibus doloremque distinctio pariatur veritatis.
          Consequuntur qui omnis minus ad tenetur aspernatur corrupti voluptatum
          quia et asperiores accusamus suscipit exercitationem vero voluptates
          aliquid, odit quisquam ipsam nostrum provident? Natus hic rerum at
          beatae dolorem ut qui officia asperiores. Quas, molestiae? "
        beds="1 Queen Bed"
        people="2"
        img={accomodation2}
      />
      <Room
        title="Standard Double Room"
        subtitle="Start from $70/night"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur temporibus doloremque distinctio pariatur veritatis.
          Consequuntur qui omnis minus ad tenetur aspernatur corrupti voluptatum
          quia et asperiores accusamus suscipit exercitationem vero voluptates
          aliquid, odit quisquam ipsam nostrum provident? Natus hic rerum at
          beatae dolorem ut qui officia asperiores. Quas, molestiae?"
        beds="1 Queen Bed"
        people="2"
        img={accomodation5}
      />
      <Room
        title="Standard Suite"
        subtitle="Start from $120/night"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur temporibus doloremque distinctio pariatur veritatis.
          Consequuntur qui omnis minus ad tenetur aspernatur corrupti voluptatum
          quia et asperiores accusamus suscipit exercitationem vero voluptates
          aliquid, odit quisquam ipsam nostrum provident? Natus hic rerum at
          beatae dolorem ut qui officia asperiores. Quas, molestiae? "
        beds="1 Queen Bed & 1 Single Bed"
        people="3"
        img={accomodation4}
      />
      <Room
        title="Standard Suite"
        subtitle="Start from $120/night"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur temporibus doloremque distinctio pariatur veritatis.
          Consequuntur qui omnis minus ad tenetur aspernatur corrupti voluptatum
          quia et asperiores accusamus suscipit exercitationem vero voluptates
          aliquid, odit quisquam ipsam nostrum provident? Natus hic rerum at
          beatae dolorem ut qui officia asperiores. Quas, molestiae? "
        beds="1 Queen Bed & 2 Single Beds"
        people="4"
        img={accomodation3}
      />
      <Room
        title="Family Suite"
        subtitle="Start from $220/night"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur temporibus doloremque distinctio pariatur veritatis.
          Consequuntur qui omnis minus ad tenetur aspernatur corrupti voluptatum
          quia et asperiores accusamus suscipit exercitationem vero voluptates
          aliquid, odit quisquam ipsam nostrum provident? Natus hic rerum at
          beatae dolorem ut qui officia asperiores. Quas, molestiae? "
        beds="2 Queen Beds & 2 Single Beds"
        people="6"
        img={accomodation1}
      />
      {/* <div className="row mt-5">
        <div className="col-md-8">
          <img src={accomodation2} className="img-fluid" alt="" />
        </div>
        <div className="col-md-4">
          <h4>Standard Double Room</h4>
          <p>
            <i class="fas fa-bed"> 1 Twin bed</i>
          </p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur temporibus doloremque distinctio pariatur veritatis.
          Consequuntur qui omnis minus ad tenetur aspernatur corrupti voluptatum
          quia et asperiores accusamus suscipit exercitationem vero voluptates
          aliquid, odit quisquam ipsam nostrum provident? Natus hic rerum at
          beatae dolorem ut qui officia asperiores. Quas, molestiae?
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8">
          <img src={accomodation5} className="img-fluid" alt="" />
        </div>
        <div className="col-md-4">
          <h4>Standard Double Room</h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur temporibus doloremque distinctio pariatur veritatis.
          Consequuntur qui omnis minus ad tenetur aspernatur corrupti voluptatum
          quia et asperiores accusamus suscipit exercitationem vero voluptates
          aliquid, odit quisquam ipsam nostrum provident? Natus hic rerum at
          beatae dolorem ut qui officia asperiores. Quas, molestiae?
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8">
          <img src={accomodation4} className="img-fluid" alt="" />
        </div>
        <div className="col-md-4">
          <h4>Standard Suite</h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur temporibus doloremque distinctio pariatur veritatis.
          Consequuntur qui omnis minus ad tenetur aspernatur corrupti voluptatum
          quia et asperiores accusamus suscipit exercitationem vero voluptates
          aliquid, odit quisquam ipsam nostrum provident? Natus hic rerum at
          beatae dolorem ut qui officia asperiores. Quas, molestiae?
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8">
          <img src={accomodation3} className="img-fluid" alt="" />
        </div>
        <div className="col-md-4">
          <h4>Standard Suite</h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur temporibus doloremque distinctio pariatur veritatis.
          Consequuntur qui omnis minus ad tenetur aspernatur corrupti voluptatum
          quia et asperiores accusamus suscipit exercitationem vero voluptates
          aliquid, odit quisquam ipsam nostrum provident? Natus hic rerum at
          beatae dolorem ut qui officia asperiores. Quas, molestiae?
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8">
          <img src={accomodation1} className="img-fluid" alt="" />
        </div>
        <div className="col-md-4">
          <h4>Family Suite</h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          consequatur temporibus doloremque distinctio pariatur veritatis.
          Consequuntur qui omnis minus ad tenetur aspernatur corrupti voluptatum
          quia et asperiores accusamus suscipit exercitationem vero voluptates
          aliquid, odit quisquam ipsam nostrum provident? Natus hic rerum at
          beatae dolorem ut qui officia asperiores. Quas, molestiae?
        </div>
      </div> */}
    </div>
  );
};
export default Accomodation;
