import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    cardContainer: {
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    },
    chip: {
        margin: '5px 5px 5px 0', padding: '2px',boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',backgroundColor:'#4059B5', color: "white"
    },
    subtitle: {
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', textAlign: 'right'
    },
    spacing: {
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    },
    cardHeading: {
        fontWeight: '600',
    },
    cardAction: {
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    },
    chipsContainer: {
        display: 'flex', alignItems: 'center',flexWrap: 'wrap'
    },
    rating: {

    }
}));