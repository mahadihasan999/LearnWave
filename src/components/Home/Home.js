import React, { useContext, useEffect, useState } from "react";
import { NavLink } from 'react-bootstrap';
//import font awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import "./Home.css"
//import react rating
import Rating from "react-rating";
const element = <FontAwesomeIcon icon={faClock} />
const Home = () => {

    const [course, setAllCourse] = useState([]);
    //data loading
    const url = "fakedata.json"
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllCourse(data));
    }, []);


    return (
        <>
            <div className="container section">
                <h2 className="text-center most-popular">Most Popular Courses</h2>
                <div className="container all-info">
                    <div className="row">
                        {course?.slice(0, 4).map(course =>
                            <div className="col-md-3  py-3 ">
                                <div className="cart">
                                    <div className="py-3">
                                        <img src={course.image} alt="" height="150px" width="250px" className="" />
                                        <h4 className="justify-content-center">{course.name}</h4>
                                        <p>{course.mentor}</p>

                                        <div className="d-flex justify-content-around">
                                            <p>{element} {course.duration}</p>

                                            {
                                                //use rating for dynamicaly
                                                <Rating
                                                    readonly
                                                    initialRating={course.rating}
                                                    emptySymbol="far fa-star icon-color"
                                                    fullSymbol="fa fa-star icon-color"
                                                ></Rating>
                                            }
                                        </div>
                                        <button className="button">Start Now</button>

                                    </div>
                                </div>
                            </div>

                        )
                        }

                    </div>

                </div >


                <div className="d-flex language ">
                    <div className="m-2">
                        <img src="https://img.emg-services.net/HtmlPages/HtmlPage15092/940-header.jpg" alt="" className="img-fluid" />
                    </div>

                    <div className="m-2">
                        <small>LAST UPDATED: 7/30/2021</small>
                        <h3>8 Myths About Learning A Language Online</h3>
                        <p>Are you studying abroad anytime soon? Are you afraid of the language barrier but unsure about how to learn a new language on your own? There is a way to master a language without going into a classroom - learning a language online. Before you disregard it completely, let’s break some myths about online learning!</p>
                    </div>
                </div>

            </div>
            <div className="text-center next">
                <h3 className="py-3">
                    Are you ready to take the next step toward your future?
                </h3>
                <input type="text" placeholder="Give us your feedback" className="input-box" />
            </div>

        </>
    );

};

export default Home;