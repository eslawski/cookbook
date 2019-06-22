import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {faUtensils} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ siteTitle }) => (
  <header
    style={{
        background: '#1f2a65',
        marginBottom: 15
    }}
  >
      <h1 style={{
          margin: 0,
          padding: "10px 0 10px 30px"
      }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
            <FontAwesomeIcon icon={faUtensils} style={{marginRight: 10}}/>{siteTitle}
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
