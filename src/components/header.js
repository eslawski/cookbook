import { Link } from "gatsby"
import React from "react"
import {faUtensils} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import headerStyles from "../styles/header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.background}>
      <h1 className={headerStyles.text}>
        <Link to="/" className={headerStyles.link}>
            <FontAwesomeIcon icon={faUtensils} className={headerStyles.icon}/>
            {siteTitle}
        </Link>
      </h1>
  </header>
);

export default Header
