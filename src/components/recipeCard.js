import React from "react";
import {Link} from "gatsby";
import Img from "gatsby-image"
import {Col, Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faClock } from '@fortawesome/free-solid-svg-icons'
import "../styles/recipeCard.css"
import {Divider} from "./divider";


export const RecipeCard = ({id, slug, name, image}) => {
    return (
        <Col key={id} lg={3} md={3} sm={4} xs={6}>
            <Link to={slug}>
                <Card>
                    <Img fluid={image}/>
                    <Card.Body>
                        <h5>{name}</h5>
                        <Card.Text>
                            <span><FontAwesomeIcon icon={faUsers}/> 5-7</span>
                            <Divider/>
                            <span><FontAwesomeIcon icon={faClock}/> 45min</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

