import React from 'react';
import {Card, 
        CardContent, 
        CardActions, 
        CardHeader,
        CardMedia,
        Typography, 
        Button, 
        Grid,
        makeStyles,
        Collapse,
        IconButton} from '@material-ui/core/';

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%', 
    },
})

const ReceipeItem = ({recipe}) => {
    const { id, title, prepareTime, difficulty, cuisineType, image } = recipe;
    const classes = useStyles();
    return (  
        <Grid item xs={12} sm={6} lg={4}>
            <Card>
                    <CardHeader 
                        title={title}
                    />
                    <CardMedia 
                        className={classes.media}
                        image={image}
                    />
                    <CardContent>
                        <Typography>
                            czas przygotowania: {prepareTime}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography>
                            poziom trudności: {difficulty}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography>
                            kuchnia: {cuisineType}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton
                            aria-label="show more">
                                pokaż więcej
                        </IconButton>
                    </CardActions>
                    <Collapse>
                        <Typography>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Typography>
                    </Collapse>
            </Card>
        </Grid>
    );
}
 
export default ReceipeItem;