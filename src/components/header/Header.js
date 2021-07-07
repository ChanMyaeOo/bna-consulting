import React from "react";
import useStyles from "./styles";

const Header = () => {
    const classes = useStyles();
    return <div className={classes.header}>header</div>;
};

export default Header;
