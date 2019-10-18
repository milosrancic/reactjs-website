import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className=" " id="footer">
      <div className="">
        <small className="author-text">
          by: Milos Rancic{" "}
          <a
            href="https://github.com/milosrancic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </small>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";
// import "../styles/Footer.css";

// const Footer = () => {
//   return (
//     <div className="container fixed-bottom " id="footer">
//       <div className="float-right">
//         <small className="author-text">
//           by: Milos Rancic{" "}
//           <a
//             href="https://github.com/milosrancic"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fab fa-github" />
//           </a>
//         </small>
//       </div>
//     </div>
//   );
// };

// export default Footer;
