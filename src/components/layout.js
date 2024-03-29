/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import "../utils/fixFontAwesome"

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import {Container} from "react-bootstrap";
import Header from "./header"
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/global.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
          <Container fluid>
              {children}
          </Container>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
