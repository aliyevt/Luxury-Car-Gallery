import suvFordF150 from './msafari4.jpeg';
import suvCullinanchoices from './cullinanmansory.jpeg';
import { Link } from 'react-router-dom';




export const JustType= [
    {
        "id":1,
        "image": suvCullinanchoices,
        "title": <Link to="/luxurysuv">LUXURY SUV</Link>,
    },
    {
        "id":2,
        "image": suvFordF150,
        "title": <Link to="/offroadsuv">OFF-ROAD SUV</Link>,
    },
]