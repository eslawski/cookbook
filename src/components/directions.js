import React from "react";
import {faThList} from "@fortawesome/free-solid-svg-icons/index";
import directionsStyles from "../styles/directions.module.css"
import {IconLabel} from "./iconLabel";


export const Directions = ({directions}) => {
    return (
        <>
            <h3 className={directionsStyles.header}>
                <IconLabel faIcon={faThList} label="Directions" iconColor="#1f2a65" textColor="#000000"/>
            </h3>
            <ol className={directionsStyles.list}>
                {directions.map((direction) => <li><p>{direction}</p></li>)}
            </ol>
        </>
    );
};

