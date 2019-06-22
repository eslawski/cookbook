import React from "react";
import Img from "gatsby-image"
import {Col, Row, Container} from "react-bootstrap";
import {faUsers, faClock} from '@fortawesome/free-solid-svg-icons'
import recipeInfoCardStyles from "../styles/recipeInfoCard.module.css"
import {IconLabel} from "./iconLabel";


export const RecipeInfoCard = ({name, image, serves, time}) => {
    return (
        <Container fluid className={recipeInfoCardStyles.container}>
            <Row>
                <Col lg={5} md={6} sm={6} xs={6}>
                    <Img className={recipeInfoCardStyles.image} fluid={image}/>
                </Col>
                <Col lg={7} md={6} sm={6} xs={6} style={{paddingTop: ".5em"}}>
                    <h2>{name}</h2>
                    <IconLabel faIcon={faUsers} label={serves}/>
                    <IconLabel faIcon={faClock} label={time}/>
                </Col>
            </Row>
        </Container>
    );
};

