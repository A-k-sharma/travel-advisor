import axios from "axios";

import {constData} from './const';



export const getPlacesData = async (type,sw, ne)=>{
    try{
        const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`
        const { data : { data }} = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY
            }
        });
        if(data){
            return data;
        }
        else{
            return constData.data;
        }
    }
    catch (e) {
        console.log(e)
        return constData.data;
    }
}