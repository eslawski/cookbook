import React from "react";
import {Link} from "gatsby";
import Img from "gatsby-image"
import {Container, Row, Col, Card, Form, Image} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faClock } from '@fortawesome/free-solid-svg-icons'
import "../styles/card.css"


const mapRecipesToCards = recipes => {
    return recipes.map(({
        node: {
            id,
            fields: {slug},
            name,
            image: {
                childImageSharp: {fluid: fluidImage}
            }
        }
    }) => {
        return (
            <Col className="custom-gutters" key={id} lg={3} md={3} sm={4} xs={6}>
                <Link to={slug}>
                    <Card style={{height: "100%"}}>
                        <Img style={{borderRadius: "5px 5px 0 0"}} fluid={fluidImage}/>
                        <Card.Body style={{padding: 10, backgroundColor: "#F4F4F4"}}>
                            <h5>{name}</h5>
                            <Card.Text style={{
                                position: "absolute",
                                bottom: 5
                            }}>
                                    <span style={{
                                        color: "rgba(0,0,0,.6)"
                                    }}><FontAwesomeIcon icon={faUsers}/> 5-7</span>
                                    <span style={{
                                        margin: "0 5px",
                                        height: "100%",
                                        borderRight: "1px solid rgba(0,0,0,.6)"
                                    }}></span>
                                    <span style={{
                                        color: "rgba(0,0,0,.6)"
                                    }}><FontAwesomeIcon icon={faClock}/> 45min</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        );
    })
};


export const RecipeList = ({recipes}) => {
    return (
        <Container>
            <Row>
                {
                    mapRecipesToCards(recipes)
                }
            </Row>
        </Container>
    );
};

