import axios from "axios";



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
                'x-rapidapi-key': 'a221e1be42msh0851618bae5d3c5p1edfeejsnf605eab19577'
            }
        });
        return data;
    }
    catch (e) {
        console.log(e)
    }
}