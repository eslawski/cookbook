import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const defaultColor = "rgba(0,0,0,.6)";

export const IconLabel = ({faIcon,
                          label,
                          block=true,
                          iconColor=defaultColor,
                          textColor=defaultColor}) => {

    const Element = block ? 'div' : 'span';
    return (
        <Element>
            <FontAwesomeIcon icon={faIcon} style={{
                color: iconColor,
                marginRight: 5
            }}/>
            <span style={{color: textColor}}>{label}</span>
        </Element>
    );
};

