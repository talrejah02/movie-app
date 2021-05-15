import React,{useEffect,useState} from 'react'
import './Nav.css' 
 import {useModal} from '../../context/Modals'
function Nav() {
    const{searchTerm,setSearchTerm}=useModal()
    // const[handler,setHandler]= useState()
    const[input,setinput]=useState(null)


  function updatesearch(e) {
      e.preventDefault()
    

        setSearchTerm(input)
    
  }
        console.log(searchTerm)
     
    return (
        <div className="nav">
            <span className="nav-head">MOVIE</span><span className="nav-head-b">HUB</span>
            <div className="nav-btn">
                <button><svg  className="down-svg" width="1.8rem" height="1.8rem" viewBox="0 0 20 20"><g ><path d="M10.707 2.293a1 1 0 0 0-1.414 0l-7 7a1 1 0 0 0 1.414 1.414L4 10.414V17a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6.586l.293.293a1 1 0 0 0 1.414-1.414l-7-7z" ></path></g></svg> <p>Home</p> </button>
                <button><svg className="down-svg" width="1.8rem" height="1.8rem" viewBox="0 0 24 24"><path d="M19 22V4c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v18l7-4.666L19 22zM8.006 8.056c0-.568.224-1.083.585-1.456c.361-.372.86-.603 1.412-.603c0 0 .996-.003 1.997 1.029c1.001-1.032 1.997-1.029 1.997-1.029c.552 0 1.051.23 1.412.603s.585.888.585 1.456s-.224 1.084-.585 1.456L12 13.203L8.591 9.512a2.083 2.083 0 0 1-.585-1.456z" ></path></svg> <p>Bookmark</p> </button>
                <button><svg className="down-svg" width="1.8rem" height="1.8rem" viewBox="0 0 24 24"><path d="M18 11c.34 0 .67.03 1 .08V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.26A6.995 6.995 0 0 1 18 11zm-10.24-.45a.5.5 0 0 1-.76-.43V4h5v6.12a.5.5 0 0 1-.76.43L9.5 9.5l-1.74 1.05z" ></path><path d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zm-1.25 6.6v-3.2c0-.39.43-.63.76-.42l2.56 1.6c.31.2.31.65 0 .85l-2.56 1.6c-.33.2-.76-.04-.76-.43z" ></path></svg><p>Playlist</p></button>
                <form onSubmit={ (e) => updatesearch(e)}>
                 <input className="nav-search" type="text" placeholder="search"  onChange={ (e)=> setinput(e.target.value) }   />

                </form>
                {/* <button><svg width="1.8rem" height="1.8rem" viewBox="0 0 24 24"><path d="M6 2h9a2 2 0 0 1 2 2v2h-2V4H6v16h9v-2h2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" ></path><path d="M16.09 15.59L17.5 17l5-5l-5-5l-1.41 1.41L18.67 11H9v2h9.67z" ></path></svg><p>Logout</p></button> */}
            </div>
        </div>
    )
}

export default Nav
