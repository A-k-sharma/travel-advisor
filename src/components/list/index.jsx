import React from 'react';
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select  } from "@material-ui/core";

import PlaceDetails from "../placeDetails/index.jsx";

import useStyle from './styles';

const List = ({ places,type, setType, rating, setRating }) => {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <Typography variant='h4'>
            </Typography>
            <Grid container spacing={2} className={classes.filtersContainer}>
                <Grid item md={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Type</InputLabel>
                        <Select value={type} onChange={(e)=>setType(e.target.value)}>
                            <MenuItem value={"restaurants"}>Restaurants</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="attractions">Attractions</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>
                <Grid item md={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Rating</InputLabel>
                        <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
                            <MenuItem value="0">All</MenuItem>
                            <MenuItem value="3">Above 3</MenuItem>
                            <MenuItem value="4">Above 4</MenuItem>
                            <MenuItem value="4.5">Above 4.5</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.list}>
                {
                    places?.map((place,i)=>{
                        return <Grid item key={i} xs={12}>
                            <PlaceDetails place={place} />
                        </Grid>
                    })
                }
            </Grid>
        </div>
    )
}

export default List;