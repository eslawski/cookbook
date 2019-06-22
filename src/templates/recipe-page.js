import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import {Container, Row, Col} from "react-bootstrap";
import {RecipeInfoCard} from "../components/recipeInfoCard";
import {Ingredients} from "../components/ingredients";
import {Directions} from "../components/directions";

const RecipePage = ({data}) => {
    const {
        recipesJson: {
            name,
            serves,
            time,
            ingredients,
            directions,
            image: {
                childImageSharp: {fluid: fluidImage}
            }
        }
    } = data;

    return (
        <Layout>
            <Container fluid>
                <Row>
                    <Col lg={6} md={6} s={6} xs={12}>
                        <RecipeInfoCard name={name} image={fluidImage} serves={serves} time={time}/>
                        <Ingredients ingredients={ingredients}/>
                    </Col>

                    <Col lg={6} md={6} s={6} xs={12}>
                        <Directions directions={directions}/>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default RecipePage;

export const query = graphql`
  query($slug: String!) {
    recipesJson(fields: { slug: { eq: $slug } }) {
      name,
      serves,
      time,
      ingredients,
      directions,
      image {
        childImageSharp {
          fluid(maxHeight: 300, maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;