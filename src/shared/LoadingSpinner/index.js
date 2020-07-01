import React from 'react';
import { makeStyles } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

const LoadingSpinner = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > * + *': {
            marginLeft: theme.spacing(2),
          },
        },
      }));
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    );
}
 
export default LoadingSpinner;