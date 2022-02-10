import React from "react";
// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import BITSGoaOnGMAP from "./bits-goa-map.js";
import BTable from "react-bootstrap/Table";

function Howtoreach() {
  return (
    <div>
      <div className="container">
        <div className="titleStyle1">HOW TO</div>
        <div className="titleStyle2">REACH?</div>

        <div class="divider" style={{ marginBottom: "30px" }}></div>
        <BTable striped bordered hover responsive>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th>From</th>
              <th>Distance (kms)</th>
              <th>Taxi Fare (INR)</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            <tr>
              <td>Goa International Airport (GOI)</td>
              <td>05</td>
              <td>300/-</td>
            </tr>
            <tr>
              <td>Vasco Da Gama Railway Station (VSG)</td>
              <td>10</td>
              <td>300/-</td>
            </tr>
            <tr>
              <td>Madgaon Railway Station (MAO)</td>
              <td>24</td>
              <td>700/-</td>
            </tr>
            <tr>
              <td>Panjim</td>
              <td>26</td>
              <td>800/-</td>
            </tr>
          </tbody>
        </BTable>
        <p></p>
        <h4>
          <strong>
            For more details, visit:{" "}
            <a 
              href="https://www.bits-pilani.ac.in/goa/reachGoaCampus" target="_blank" rel="noopener noreferrer"
            >
              <button className="button black-button btn-sm">How to Reach BITS Pilani Goa Campus?</button>
              
            </a>
          </strong>
        </h4>
      </div>

      <div>
        <BITSGoaOnGMAP height={"400px"} width={"100%"} />

        <p></p>
      </div>
    </div>
  );
}

export default Howtoreach;
