import React from 'react'; 
import { Grid, makeStyles } from '@material-ui/core/';
import ReceipeItem from './receipeItem/';

const ReceipeList = ({recipes, handlerRemove}) => {
    const recipesList = recipes.map(recipe => {
        return (
            <ReceipeItem 
                key={recipe.id} 
                recipe={recipe}
            />
        )
    });
    const useStyles = makeStyles({
        gridContainer: {
            padding: '50px'
        }
    })
    const classes = useStyles();
    return (
        <Grid 
            container 
            spacing={4}
            className={classes.gridContainer}
            >
            {recipesList}
        </Grid>
    );
}
 
export default ReceipeList;