
import React, { Component } from 'react';
import FormHeader from '../detailform/header_detailform';
import SocialMedia from '../../Components/socialmedia';
import '../dashboard/dashboard.css';
class Dashboard extends Component {



    render() {


        return (
            <div className="maincontainer">

                <FormHeader />
                <div className="container">
                    <div className="left-container">

                        <div className="pname">
                            Marcus Alonso
                        </div>
                        <div className="ppic">

                            <img src="images/pp.png" />
                        </div>

                        <div className="level">

                            Begineer
                        </div>

                        <div className="txt">
                            Invite Your Friends!!!
                        </div>

                        <SocialMedia />

                        <div className="btn">
                            Signout
                        </div>

                        <div className="btm">
                            <div>
                                Terms and condition
                            </div>
                            <div>
                                About Us
                            </div>

                            <div>
                                FAQs
                            </div>



                        </div>

                    </div>

                    <div className="right-container">


                        <div className="points">

                            <div className="trophy">
                                <img src="images/trophy.png" />

                            </div>

                            <div className="reviewpt">
                                <div className="textrp">
                                    reviewed : 10

                                </div>
                                <div className="textrp">
                                    point : 5D
                                </div>

                            </div>

                            <div className="reviewedsite">
                                <div className="textrp">
                                    Review Points
                                </div>
                            </div>

                        </div>
                        <div className="profilecard">
                            <div className="row">


                                <div className="head">
                                    Citizenship No :
                                </div>
                                <div className="value">
                                    483159-38984
                                </div>
                            </div>
                            <div className="row">

                                <div className="head">
                                    Citizenship No :
                                </div>
                                <div className="value">
                                    483159-38984
                                </div>
                            </div>
                            <div className="row">

                                <div className="head">
                                    Citizenship No :
                                </div>
                                <div className="value">
                                    483159-38984
                                </div>
                            </div>
                            <div className="row">

                                <div className="head">
                                    Citizenship No :
                                </div>
                                <div className="value">
                                    483159-38984
                                </div>
                            </div>
                            <div className="row">

                                <div className="head">
                                    Citizenship No :
                                </div>
                                <div className="value">
                                    483159-38984
                                </div>
                            </div>




                           
                        </div>
                        <button className="edit_btn">
                           
                           <div><img src="images/edit.svg"/></div>
                           <div>Edit</div>
                        </button>

                      



                    </div>

                </div>

            </div>



        );
    }
}

export default Dashboard;