import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {RecipeList} from "../components/recipeList";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <RecipeList recipes={data.allMarkdownRemark.edges}/>
  </Layout>
);

export default IndexPage


export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
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
    }
  }
`;