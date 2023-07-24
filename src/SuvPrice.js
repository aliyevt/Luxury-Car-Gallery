import urusPrice from './suvurusprice.jpg';
import g63amgPrice from './suvg63amgprice.jpg';
import bentaygaPrice from './suvbentaygaprice.jpg';
import cadillacPrice from './suvcadillacprice.jpg';
import { Link } from 'react-router-dom';
import CadillacEscalade from './CadillacEscalade';



export const JustSuv= [
    {
        "id":1,
        "image": urusPrice,
        "title": <Link to="/lamborghiniurus">LAMBORGHINI URUS</Link>,
    },
    {
        "id":2,
        "image": g63amgPrice,
        "title": <Link to="/mercedesg63amg">MERCEDES-AMG G63</Link>,
    },
    {
        "id":3,
        "image": bentaygaPrice,
        "title":<Link to="/bentley">BENTLEY BENTAYGA</Link>,
    },
    {
        "id":4,
        "image": cadillacPrice,
        "title": <Link to="/cadillacescalade">CADILLAC ESCALADE</Link>,
    },
]