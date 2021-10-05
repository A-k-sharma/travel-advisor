import React, {useEffect, useState} from 'react';
import {CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api/api";
import Header from "./components/header/index.jsx";
import List from "./components/list/index.jsx";
import Map from "./components/map/index.jsx";

const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);
    const [autocomplete, setAutocomplete] = useState(null);
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    // useEffect(() => {
    //     const filtered = places.filter((place) => Number(place.rating) > rating);
    //
    //     setFilteredPlaces(filtered);
    // }, [rating]);

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{
            setCoordinates({lat: latitude, lng: longitude});
        })
    })

    useEffect(()=>{
        setTimeout(()=>getPlacesData(type, bounds?.sw, bounds?.ne)
            .then((data)=>{
               setPlaces(data);
            }),3000)
    }, [bounds, coordinates, type, rating]);

    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete?.getPlace()?.geometry?.location?.lat();
        const lng = autocomplete?.getPlace()?.geometry?.location?.lng();

        setCoordinates({ lat, lng });
    };

    return (
        <>
            <CssBaseline/>
            <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad}/>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={6}>
                    <List
                        isLoading={isLoading}
                        childClicked={childClicked}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        setChildClicked={setChildClicked}
                        places={filteredPlaces.length ? filteredPlaces : places}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default App;