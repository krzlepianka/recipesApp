import React from 'react'; 
import { Grid, makeStyles } from '@material-ui/core/';
import ReceipeItem from './receipeItem/';
import LoadingSpinner from '../../shared/LoadingSpinner/';
import withHandleError from '../../shared/hoc/withHandleError';
import withLoading from '../../shared/hoc/withLoading';

const ReceipeList = ({recipes, handleExpand, handlerRemove}) => {
    const useStyles = makeStyles({
        gridContainer: {
            padding: '50px'
        }
    })
    const classes = useStyles();
    return <Grid 
        container 
        className={classes.gridContainer}
        spacing={4}
        >
            {recipes.map(({id, title, prepareTime, difficulty, cuisineType, image, expand}) => (
                <ReceipeItem 
                    key={id}
                    id={id}
                    title={title}
                    prepareTime={prepareTime}
                    difficulty={difficulty}
                    cuisineType={cuisineType}
                    image={image}
                    expand={expand}
                    handleExpand={handleExpand}
                />
            ))}
        </Grid>
};
 
export default withHandleError(withLoading(ReceipeList));