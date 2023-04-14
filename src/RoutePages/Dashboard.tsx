import React from "react";
import '../index'
import '../App'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Button } from "react-bootstrap";

const Dashboard = () =>{
    return (
        <div>
        <Card className="shadow card-main">
            <div className="card-class">
            <img className="card-image" src="/grocery-img.jpg" />
            <Card.Body className="mt-3">
                <Card.Title>Variety of Groceries</Card.Title>
                <article className="mr-3">
                    Some quick example text to build on the card <br></br>
                    title and make up the bulk of the card's content.<br></br>
                    Some quick example text to build on the card <br></br>
                    title and make up the bulk of the card's content.<br></br>
                    Some quick example text to build on the card <br></br>
                    title and make up the bulk of the card's content.
                </article>
            </Card.Body>
            </div>
        </Card>

        <Card className="shadow card-main">
            <div className="card-class">
            <Card.Body className="mt-3">
                <Card.Title>Faster Chekout</Card.Title>
                <article>
                    Some quick example text to build on the card <br></br>
                    title and make up the bulk of the card's content.<br></br>
                    Some quick example text to build on the card <br></br>
                    title and make up the bulk of the card's content.<br></br>
                    Some quick example text to build on the card <br></br>
                    title and make up the bulk of the card's content.
                </article>
            </Card.Body>
            <img className="card-image" src="/online-payment.jpg" />
            </div>
        </Card>
        </div>
    );
}

export default Dashboard