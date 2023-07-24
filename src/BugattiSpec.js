import bts from "./bug25.webp";
import bts2 from "./bug31.webp";
import bts3 from "./bug35.webp";
import { Link } from "react-router-dom";
export const BugSpecial = [
    {
        "id":1,
        "image": bts,
        "title": <Link to="/bugattichironleslegendes">Chiron Sport “Les Légendes Du Cie”</Link> 
    },
    {
        "id":2,
        "image": bts2,
        "title": <Link to="/bugattichironeditionnore">CHIRON EDITION NOIRE</Link> 
    },
    {
        "id":3,
        "image": bts3,
        "title": <Link to="/bugattichironsupersport">CHIRON SUPER SPORT 300+</Link> 
    },
]

