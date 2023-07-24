import rollsbr from './phantombritish.jpg';
import bentleybr from './bentleybritish.jpg';
import maybegr from './maybachgerman.jpg';
import sbmw from "./sbmw.jpg";
import { Link } from 'react-router-dom';

export const TypeSedan= [
    {
        "id":1,
        "image": rollsbr,
        "title": <Link to="/rollsroycephantom">ROLLS-ROYCE PHANTOM</Link> 
    },
    {
        "id":2,
        "image": bentleybr,
        "title": <Link to="/bentleymulsanne">BENTLEY MULSANNE</Link> 
    },
    {
        "id":3,
        "image": sbmw,
        "title": <Link to="/bmw7series">BMW 7 SERIES</Link> ,
    },
    {
        "id":4,
        "image": maybegr,
        "title": <Link to="/mercedesmaybach">"MERCEDES MAYBACH"</Link>  ,
    },
]