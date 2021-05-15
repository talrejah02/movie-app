import React, { useEffect, useState } from 'react'
import './container.css'
import Card from '../Card/Card'
import {useModal} from '../../context/Modals'

const Allmovies ="https://api.themoviedb.org/3/discover/movie?api_key=1405a1f891cebbc2c994512c2be9caa8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate"
function Container() {
    const[movies,setmovies]=useState([])
    const{searchTerm,setSearchTerm} = useModal()
    
    const search_api=`https://api.themoviedb.org/3/search/movie?api_key=1405a1f891cebbc2c994512c2be9caa8&language=en-US&query=${searchTerm}&page=1&include_adult=false`
     
    useEffect(()=>{

        if(searchTerm !== null){
        
            fetch(search_api)
            .then((res)=>res.json())
            .then((data)=>setmovies(data.results))
        }
    },[searchTerm])
    
    // 

 

    useEffect(() =>{
        fetch(Allmovies)
        .then((res)=>res.json())
        .then((data)=>setmovies(data.results))
        
        
    },[])
    
    // console.log(movies)



    return (
        <div className="container-new">
            <div className="head">

           <span className="container-head">MOVIE</span><span className="container-head-b">HUB</span>
            </div>
            <span className="container-new-head">Recommendations</span>
        <div className="card-container">
            {movies.map((movie,key) =>{

                if(key<=5){
                    return  <Card movie={movie} key={movie.id} />
                }return null;
            }

           )}

        </div>
    </div>
    )
}
export default Container
