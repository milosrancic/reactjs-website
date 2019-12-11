import React from "react";
import "../styles/Accomodation.css";

import accomodation1 from "../images/accomodation-01.jpg";
import accomodation2 from "../images/accomodation-02.jpg";
import accomodation3 from "../images/accomodation-03.jpg";
import accomodation4 from "../images/accomodation-04.jpg";
import accomodation5 from "../images/accomodation-05.jpg";

const Accomodation = () => {
  return (
    <div id="accomodation">
      <h3>Accomodation</h3>
      <div className="row">
        <div className="col">
          <img src={accomodation5} className="img-fluid" alt="" />
        </div>
        <div className="col border">
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            consequatur temporibus doloremque distinctio pariatur veritatis.
            Consequuntur qui omnis minus ad tenetur aspernatur corrupti
            voluptatum quia et asperiores accusamus suscipit exercitationem vero
            voluptates aliquid, odit quisquam ipsam nostrum provident? Natus hic
            rerum at beatae dolorem ut qui officia asperiores. Quas, molestiae?
          </p>
        </div>
      </div>

      <div className="row mt-5 border">
        <div className="col">
          <img src={accomodation2} className="img-fluid" alt="" />
        </div>
        <div className="col ">
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            consequatur temporibus doloremque distinctio pariatur veritatis.
            Consequuntur qui omnis minus ad tenetur aspernatur corrupti
            voluptatum quia et asperiores accusamus suscipit exercitationem vero
            voluptates aliquid, odit quisquam ipsam nostrum provident? Natus hic
            rerum at beatae dolorem ut qui officia asperiores. Quas, molestiae?
          </p>
        </div>
      </div>

      <div className="row mt-5 border">
        <div className="col">
          <img src={accomodation3} className="img-fluid" alt="" />
        </div>
        <div className="col ">
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            consequatur temporibus doloremque distinctio pariatur veritatis.
            Consequuntur qui omnis minus ad tenetur aspernatur corrupti
            voluptatum quia et asperiores accusamus suscipit exercitationem vero
            voluptates aliquid, odit quisquam ipsam nostrum provident? Natus hic
            rerum at beatae dolorem ut qui officia asperiores. Quas, molestiae?
          </p>
        </div>
      </div>

      <div className="row mt-5 border">
        <div className="col">
          <img src={accomodation4} className="img-fluid" alt="" />
        </div>
        <div className="col ">
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            consequatur temporibus doloremque distinctio pariatur veritatis.
            Consequuntur qui omnis minus ad tenetur aspernatur corrupti
            voluptatum quia et asperiores accusamus suscipit exercitationem vero
            voluptates aliquid, odit quisquam ipsam nostrum provident? Natus hic
            rerum at beatae dolorem ut qui officia asperiores. Quas, molestiae?
          </p>
        </div>
      </div>

      <div className="row mt-5 border">
        <div className="col">
          <img src={accomodation1} className="img-fluid" alt="" />
        </div>
        <div className="col ">
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            consequatur temporibus doloremque distinctio pariatur veritatis.
            Consequuntur qui omnis minus ad tenetur aspernatur corrupti
            voluptatum quia et asperiores accusamus suscipit exercitationem vero
            voluptates aliquid, odit quisquam ipsam nostrum provident? Natus hic
            rerum at beatae dolorem ut qui officia asperiores. Quas, molestiae?
          </p>
        </div>
      </div>
    </div>
  );
};
export default Accomodation;
