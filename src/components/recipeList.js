import React from "react";
import {Card} from 'semantic-ui-react'
import {Link} from "gatsby";
import Img from "gatsby-image"


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
        return {
            as: Link,
            height: 200,
            to: slug,
            childKey: id,
            image: <Img fluid={fluidImage}/>,
            header: title,
            meta: <Card.Meta style={{color: 'dimgray'}}>{date}</Card.Meta>
        }
    })
};


export const RecipeList = ({recipes}) => {
    return (
        <Card.Group items={mapRecipesToCards(recipes)} itemsPerRow={4} stackable />
    );
};

