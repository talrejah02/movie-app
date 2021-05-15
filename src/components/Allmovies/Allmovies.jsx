import React,{useEffect,useState} from 'react'
import './Allmovies.css'
import Card from '../Card/Card'

function Allmovies() {
    const movies ="https://api.themoviedb.org/3/discover/movie?api_key=1405a1f891cebbc2c994512c2be9caa8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate"
       const[Allmovies,setAllmovies] = useState([])
     
         useEffect(() =>{
             fetch(movies)
             .then((res)=>res.json())
             .then((data)=>setAllmovies(data.results))
     
         },[])
    return (
        <div className="allmovie-container">
            <h2>NEW ITEMS</h2>
          <div className="container-nav">
              <button className="container-nav-btn">NEW RELEASES</button>
              <button className="container-nav-btn">TV SERIES</button>
          </div>
          <span className="line"></span>

          <div className='container'>
          <div className="card-container">
            {Allmovies.map((movie) =>{
                
                return  <Card movie={movie} key={movie.id} />
                
            }
            
            )}
        </div>

        </div>

          

        </div>
    )
}

export default Allmovies
