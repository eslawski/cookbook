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
            frontmatter: {
                title,
                date,
                image: {
                    childImageSharp: {fluid: fluidImage}
                }
            }
        }
    }) => {
        return (
            <Col lg={3} md={3} sm={4} xs={6} style={{
                paddingBottom: 30
            }}>
                <Link to={slug}>
                    <Card style={{height: "100%"}}>
                        <Img style={{borderRadius: "5px 5px 0 0"}} fluid={fluidImage}/>
                        <Card.Body style={{padding: 10}}>
                            <h6>{title}</h6>
                            <Card.Text>
                                <div style={{
                                    fontSize: "1vmax",
                                    color: "rgba(0,0,0,.6)"
                                }}><FontAwesomeIcon icon={faUsers}/> 5-7</div>
                                <div style={{
                                    fontSize: "1vmax",
                                    color: "rgba(0,0,0,.6)"
                                }}><FontAwesomeIcon icon={faClock}/> 45 minutes</div>
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

