import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormHeader from "../detailform/header_detailform";
import './profile.css';

class Profile extends Component {
  render() {

    return (
      <div className="maincontainer">

        <FormHeader />

        <div className="container">

          <div className="left-container">
            <div>
              <p className="txt1">
                Hey,
              </p>
              <p className="txt1">
                Marcus
              </p>

            </div>




            <div className="ppic">
              <img src="images/pp.png">
              </img>
            </div>

            <div>
              <div className="txt2">
                Awesome job,
              </div>
              <div className="txt2">
                You've earned today
              </div>

              <div className="txt3">
                79 points
              </div>
            </div>



            <Link className="btn_pr" to={"/dashboard"}>
              My Profile
            </Link>




          </div>

          <div className="right-container">

            <div className="options">

              <div className="row">
                <div className="image">
                  <img src="images/bp.png" />


                </div>
                <div className="buttontxt">
                  Review Business Profile
                </div>



              </div>

              <div className="row">
                <div className="image">
                  <img src="images/website.png" />


                </div>
                <div className="buttontxt">
                  Text Business Websites
                </div>



              </div>

              <div className="row">
                <div className="image">
                  <img src="images/mob_app.png" />


                </div>
                <div className="buttontxt">
                  Test Applications
                </div>



              </div>





              </div>




            </div>

          </div>


        </div>

        );
  }

}

        export default Profile;