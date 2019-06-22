import React from "react";
import {Link} from "gatsby";
import Img from "gatsby-image"
import {Col, Card} from "react-bootstrap";
import {faUsers, faClock} from '@fortawesome/free-solid-svg-icons'
import recipeCardStyles from "../styles/recipeCard.module.css"
import {Divider} from "./divider";
import {IconLabel} from "./iconLabel";


export const RecipeCard = ({slug, name, image, serves, time}) => {
    return (
        <Col lg={3} md={3} sm={4} xs={6} className={recipeCardStyles.cardColumn}>
            <Link to={slug}>
                <Card className={recipeCardStyles.card}>
                    <Img className={recipeCardStyles.image} fluid={image}/>
                    <Card.Body className={recipeCardStyles.cardBody}>
                        <h5>{name}</h5>
                        <Card.Text className={recipeCardStyles.cardText}>
                            <IconLabel faIcon={faUsers} label={serves} block={false}/>
                            <Divider/>
                            <IconLabel faIcon={faClock} label={time} block={false}/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

