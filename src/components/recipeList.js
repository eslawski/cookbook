import React from "react";
import {Container, Row} from "react-bootstrap";
import {RecipeCard} from "./recipeCard";


const mapRecipesToCards = recipes => {
    return recipes.map(({
        node: {
            id,
            fields: {slug},
            name,
            serves,
            time,
            image: {
                childImageSharp: {fluid: fluidImage}
            }
        }
    }, index) => {
        return (
            <RecipeCard key={index}
                        slug={slug}
                        name={name}
                        image={fluidImage}
                        serves={serves}
                        time={time}
            />
        );
    })
};


export const RecipeList = ({recipes}) => {
    return (
        <Container>
            <Row>
                {mapRecipesToCards(recipes)}
            </Row>
        </Container>
    );
};

