import React from 'react';
import classes from './Navbar.module.css';

export const Navbar = () => {
    return (
            <nav className={classes.nav}>
                <div className={classes.item}>
                    Profile
                </div>
                <div className={`${classes.item} ${classes.active}`}>
                    Messages
                </div>
                <div className={classes.item}>
                    News
                </div>
                <div className={classes.item}>
                    Music
                </div>
            </nav>
    );
};
