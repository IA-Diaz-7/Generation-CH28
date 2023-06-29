import { useEffect, useState } from "react";
import './Astros.css';

const API_URL = 'http://api.open-notify.org/astros.json';


//useState contador que importamos 
const Astros = () => {
    const [astros, setAstros] = useState([]); //

    const fetchData = () => { //funcion flecha siempre regresa return
        fetch(API_URL)
            .then(res => res.json()) //then = cuando hagas esto pasalo a formato JSON
            .then(data => setAstros(data.people)) // vamos a guardar con setData
            .catch(err => console.error(err)); //atrapar errores del servidor
    }

    useEffect(() => { //controlar array de datos se mantenga en sintonia
        fetchData();
    }, []);
    
    const astrosCards = astros.map((astro, index) => (
        <div className="astro--card" key={astro.text}>
            <h1 className="astro--name">
                {astro.name}
            </h1>
            <h3 className="astro--craft">
                {astro.craft}
            </h3>
        </div>
    ))  

    return(
        <div className="astros--cards">
            {astrosCards}
        </div>
    )

    //console.log(data);

}

export default Astros;




