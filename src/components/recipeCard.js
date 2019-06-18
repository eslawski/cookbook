import React from "react";
import {Link} from "gatsby";
import Img from "gatsby-image"


export const RecipeCard = ({recipe}) => {
    return (
        <div>
            <Link to={recipe.fields.slug} key={recipe.id}>
                <Img fluid={recipe.frontmatter.image.childImageSharp.fluid}/>
            </Link>
        </div>
    );
};

