import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip, Collapse} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from "@material-ui/lab/Rating";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

import useStyle from './styles';

const PlaceDetails = ({place, selected, refProp}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const classes = useStyle();
    return (
        <Card className={classes.cardContainer}>
            <CardMedia
                style={{height: 250}}
                image={place?.photo?.images?.medium?.url || 'https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/191611823814573.jpg'}
                title={place.title}
            />
            <CardContent>
                <Typography className={classes.cardHeading} gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between" my={2}>
                    <Rating name="read-only" value={Number(place.rating)} className={classes.rating} readOnly />
                    <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography component="legend">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.price_level}
                    </Typography>
                </Box>
                {/*<Box display="flex" justifyContent="space-between">*/}
                {/*    <Typography component="legend">Ranking</Typography>*/}
                {/*    <Typography gutterBottom variant="subtitle1">*/}
                {/*        {place.ranking}*/}
                {/*    </Typography>*/}
                {/*</Box>*/}

            </CardContent>
            <CardActions className={classes.cardAction}>
                <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                    Trip Advisor
                </Button>
                <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                    Website
                </Button>
                <IconButton
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon style={{ color: '#4059B5' }} />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <div className={classes.chipsContainer}>
                        {
                            place?.cuisine?.map(({ name },index) => {
                                if (index < 5) {
                                    return <Chip key={name} size="small" label={name} className={classes.chip}/>
                                }
                            })
                        }
                    </div>

                    {
                        place.address && (
                            <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                                <LocationOnIcon style={{ color: '#4059B5' }} />{place.address}
                            </Typography>
                        )
                    }
                    {place.phone && (
                        <Typography variant="body2" color="textSecondary" className={classes.spacing}>
                            <PhoneIcon style={{ color: '#4059B5' }} />{place.phone}
                        </Typography>
                    )}
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default PlaceDetails;