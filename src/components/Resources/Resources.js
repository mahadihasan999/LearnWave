import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import "./Resources.css"
const Resources = () => {
    return (
        <div className="container">
            <h3 className="text-center m-2"> Resources </h3>
            <CardGroup className="h-100vh">
                <Card className="m-2">
                    <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/d-man-human-resources-word-steps-illustration-climbing-text-concept-person-character-white-people-49483089.jpg" height="250px" width="150" />
                    <Card.Body>
                        <Card.Title>Blended learning: the new normal for corporate language training and why it’s here to stay</Card.Title>
                        <Card.Text>
                            Blended learning: the new normal for corporate language training and why it’s here to stay
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className="m-2">
                    <Card.Img variant="top" src="https://www.teachstarter.com/wp-content/uploads/2020/01/English_WebBanner.png" height="250px" width="150" />
                    <Card.Body>
                        <Card.Title>  5 reasons language learning supports employee engagement Engaging employees has never been more important</Card.Title>
                        <Card.Text>
                            . Millennials now expect learning and development opportunities from their employer, not just a high salary and room for career advancement.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 21 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className="m-2">
                    <Card.Img variant="top" src="https://3.imimg.com/data3/QP/DV/MY-10277451/english-speaking-500x500.jpg" height="250px" width="150" />
                    <Card.Body>
                        <Card.Title>How language training creates an inclusive workplace</Card.Title>
                        <Card.Text>

                            Ensuring inclusion in the workplace is now as important as fostering productivity, with workplace language training you can demonstrate a conscious effort towards DI.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </div>
    );
};

export default Resources;