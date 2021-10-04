import React, { useContext, useEffect, useState } from "react";
import { NavLink } from 'react-bootstrap';
//import font awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { TextContext } from "../../App";
import "./Home.css"
//import react rating
import Rating from "react-rating";
const element = <FontAwesomeIcon icon={faClock} />
const Home = () => {
    const text = useContext(TextContext)
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
            {/* show contex api */}
            <div className="items">
                <NavLink className="discount-text text-light p-2 text-center">{text}</NavLink>
            </div>
            {/* show single cart */}
            <div className="container all-info">
                <div className="row">
                    {course?.slice(0, 4).map(course =>
                        <div className="col-md-3">
                            <div className="cart">
                                <div className="p-3">
                                    <img src={course.image} alt="" height="150px" width="250px" />
                                    <h4>{course.name.slice(0, 15)}</h4>
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
        </>
    );
};

export default Home;