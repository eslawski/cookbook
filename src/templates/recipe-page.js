import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Img from "gatsby-image"
import {Container, Row, Col, Card, Form, Image} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faClock } from '@fortawesome/free-solid-svg-icons'

const RecipePage = ({data}) => {
    console.log(data);

    return (
        <Layout>
            <Container fluid>
                <Row>
                    <Col lg={6} md={6} s={6} xs={12}>
                        <Container fluid style={{
                            padding: 0,
                            border: "1px solid darkgrey",
                            borderRadius: 5
                        }}>

                            <Row>
                                <Col lg={5} md={6} sm={6} xs={6}>
                                    <Img style={{borderRadius: "5px"}} fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid}/>
                                </Col>
                                <Col lg={7} md={6} sm={6} xs={6} style={{padding: "0 5px 0 0"}}>
                                    <h2 style={{
                                        fontSize: "3vmax"
                                    }}>Banana Bread</h2>
                                    <div style={{
                                        fontSize: "1.5vmax",
                                        color: "rgba(0,0,0,.4)"
                                    }}><FontAwesomeIcon icon={faUsers}/> 5-7</div>
                                    <div style={{
                                        fontSize: "1.5vmax",
                                        color: "rgba(0,0,0,.4)"
                                    }}><FontAwesomeIcon icon={faClock}/> 45 minutes</div>
                                </Col>
                            </Row>
                        </Container>

                        <Container fluid style={{
                            paddingTop: 15
                        }}>
                            <h3 style={{borderBottom: "1px solid darkgrey"}}>Ingredients</h3>
                            <Form.Check label="2 cups all-purpose flour" />
                            <Form.Check label="3/4 cup brown sugar" />
                            <Form.Check label="1 teaspoon baking soda" />
                            <Form.Check label="2 eggs, beaten" />
                            <Form.Check label="1/4 teaspoon salt" />
                            <Form.Check label="2 1/3 cups mashed overripe bananas" />
                            <Form.Check label="1/2 cup butter" />

                        </Container>
                    </Col>

                    <Col lg={6} md={6} s={6} xs={12}>
                        <h3 style={{
                            paddingTop: 15,
                            borderBottom: "1px solid darkgrey"
                        }}>Steps</h3>
                        <ol>
                            <li><p>
                                Preheat oven to 350 degrees F (175 degrees C). Lightly grease a 9x5 inch loaf pan.
                            </p></li>

                            <li><p>
                                In a large bowl, combine flour, baking soda and salt. In a separate bowl, cream together butter and brown sugar. Stir in eggs and mashed bananas until well blended. Stir banana mixture into flour mixture; stir just to moisten. Pour batter into prepared loaf pan.
                            </p></li>

                            <li><p>
                                Bake in preheated oven for 60 to 65 minutes, until a toothpick inserted into center of the loaf comes out clean. Let bread cool in pan for 10 minutes, then turn out onto a wire rack.
                            </p></li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default RecipePage;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        image {
          childImageSharp {
            fluid(maxHeight: 300, maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;