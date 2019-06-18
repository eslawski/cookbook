import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import {Grid, Card, Image, Checkbox} from "semantic-ui-react";
import Img from "gatsby-image"


const RecipePage = ({data}) => {
    console.log(data);

    return (
        <Layout>
            <div>
                <Grid divided='vertically' stackable>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Card fluid style={{minWidth: "350px"}}>
                                <Card.Content>
                                    <Image floated={"left"}>
                                        <Img style={{borderRadius: "5px"}} fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed}/>
                                    </Image>
                                    <Card.Header>
                                        <h3>Banana Bread</h3>
                                    </Card.Header>

                                    <Card.Meta>serves 5-7</Card.Meta>
                                    <Card.Meta><i class="clock icon"></i>45 minutes</Card.Meta>

                                    <Card.Description>
                                        <h3>Ingredients</h3>
                                        <div><Checkbox label={"2 cups all-purpose flour"} /></div>
                                        <div><Checkbox label={"1 teaspoon baking soda"} /></div>
                                        <div><Checkbox label={"1/4 teaspoon salt"} /></div>
                                        <div><Checkbox label={"1/2 cup butter"} /></div>
                                        <div><Checkbox label={"3/4 cup brown sugar"} /></div>
                                        <div><Checkbox label={"2 eggs, beaten"} /></div>
                                        <div><Checkbox label={"2 1/3 cups mashed overripe bananas"} /></div>
                                    </Card.Description>
                                </Card.Content>


                            </Card>
                        </Grid.Column>
                        <Grid.Column stretched>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
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
            fixed(height: 150, width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;