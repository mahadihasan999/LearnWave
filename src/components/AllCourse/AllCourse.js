import React, { useEffect, useState } from "react";
import Rating from 'react-rating';
import "./AllCourse.css";

//import font awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faClock} />
const AllCourse = () => {

    const [course, setAllCourse] = useState([]);

    const url = "fakedata.json"
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllCourse(data));
    }, []);


    return (
        <div className="container all-info">
            <div className="row">
                {course?.map(course =>
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
                                            fullSymbol="fa fa-star icon-color">
                                        </Rating>
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
    );
};

export default AllCourse;