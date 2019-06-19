/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

/**
 * Implementing Gatsby API function to add 'slug' field to markdown nodes for later use.
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "RecipesJson") {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return graphql(`
    {
      allRecipesJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `
    ).then(result => {
        result.data.allRecipesJson.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/recipe-page.js`),
                context: {
                    slug: node.fields.slug,
                },
            });
        });
    });
};
