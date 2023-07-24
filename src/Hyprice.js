import porshe from './hyp1.jpg';
import pagani from "./hyp2.jpg";
import mgtr from "./hyp3.jpg";
import lambo from "./hyp4.jpg";
import { Link } from 'react-router-dom';



export const HyperType= [
    {
        "id":1,
        "name": "PORSCHE 911",
        "image": porshe ,
        "title": <Link to="/porsche911gt">PORSCHE 911</Link>,
    },
    {
        "id":2,
        "name": "PAGANI ZONDA",
        "image":pagani,
        "title": <Link to="/paganizonda">PAGANI ZONDA</Link>,
    },
    {
        "id":3,
        "name": "MERCEDES-AMG GTR",
        "image": mgtr,
        "title":<Link to="/mercedesgtr">MERCEDES-AMG GTR</Link>,
    },
    {
        "id":4,
        "name": "LAMBORGHINI HURACAN",
        "image": lambo,
        "title": <Link to="/lamborghinihuracanhyper">LAMBORGHINI HURACAN</Link>,
    },
 
   

]