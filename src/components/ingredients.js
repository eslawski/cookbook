import React from "react";
import {Container, Form} from "react-bootstrap";
import {faListAlt} from "@fortawesome/free-solid-svg-icons/index";
import ingredientsStyles from "../styles/ingredients.module.css"
import {IconLabel} from "./iconLabel";


export const Ingredients = ({ingredients}) => {
    return (
        <Container fluid className={ingredientsStyles.container}>
            <h3 className={ingredientsStyles.header}>
                <IconLabel faIcon={faListAlt} label="Ingredients" iconColor="#1f2a65" textColor="#000000"/>
            </h3>
            <div className={ingredientsStyles.list}>
                {ingredients.map((ingredient) => <Form.Check label={ingredient}/>)}
            </div>
        </Container>
    );
};

