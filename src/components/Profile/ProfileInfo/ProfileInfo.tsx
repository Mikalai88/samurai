import React from 'react';
import classes from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div><img className={classes.bgImg} src='https://www.ferienhaus.de/uploads/sf-header.jpg'/></div>
            <div className={classes.descriptionBlock}>ava + description</div>
        </div>
    );
};
