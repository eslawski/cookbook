import React from "react";
import {Link} from "gatsby";
import Img from "gatsby-image"
import {Container, Row, Col, Card, Form, Image} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faClock } from '@fortawesome/free-solid-svg-icons'


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
            <Col key={id} lg={3} md={3} sm={4} xs={6} style={{
                paddingBottom: 30
            }}>
                <Link to={slug}>
                    <Card style={{height: "100%"}}>
                        <Img style={{borderRadius: "5px 5px 0 0"}} fluid={fluidImage}/>
                        <Card.Body style={{padding: 10, minHeight: 100, backgroundColor: "#F4F4F4"}}>
                            <h5>{name}</h5>
                            <Card.Text style={{
                                fontSize: ".75em",
                                position: "absolute",
                                bottom: 5
                            }}>
                                    <span style={{
                                        color: "rgba(0,0,0,.6)"
                                    }}><FontAwesomeIcon icon={faUsers}/> 5-7</span>
                                    <span style={{
                                        border: ".5px solid rgba(0,0,0,.6)",
                                        margin: "0 5px"
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

