import { createContext, useContext, useState } from "react"
const Modalcontext= createContext()

export function ModalProvider({children}) {

    const[openmodal,setopenmodal]=useState(false)
    const[movieid,setMovieid]=useState('')
    const[searchTerm,setSearchTerm]=useState(null)
    const[movieDetails,setMoviedetails]=useState({
        title:'',
        desciption:'',
        language:'',
        vote_average:'',
        date:'',
        adult:null,
        poster:'',
    })
    

   
    return (
        <Modalcontext.Provider value={{openmodal,setopenmodal,movieid,setMovieid,movieDetails,setMoviedetails,searchTerm,setSearchTerm}}>
            {
                children
            }

        </Modalcontext.Provider>
    )
}

export function useModal(){
    return useContext(Modalcontext)
}