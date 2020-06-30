import React from 'react';
import { makeStyles } from '@material-ui/core/';
import { AppBar } from '@material-ui/core/';
import { Toolbar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    buttonStyle: {
        color: '#FFF',
        marginRight: '30px'
    },
    title: {
        flexGrow: 1
    }
})

const Navigation = () => {
    const classes = useStyles();
    return (
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <Typography className={classes.title}>
                        Aplikacja moje przepisy
                    </Typography>
                    <Button className={classes.buttonStyle}>Dodaj przepis</Button>
                    <Button className={classes.buttonStyle}>Wyloguj</Button>
                </Toolbar>
            </AppBar>
    );
}
 
export default Navigation;