
import './App.css';
import Nav from './components/Navbar/Nav';
import Container from './components/Container_new/Container'
import Allcontainer from './components/Allmovies/Allmovies'
import Modal from './components/Modal/Modal'
import React,{useState} from 'react'
import {useModal} from './context/Modals'

function App() {
  console.log(useModal())
  const {openmodal,setopenmodal}=useModal()
  
  return (
    <div className="App">
      <Nav/>
       <Container/>
       { openmodal && <Modal/> }
       <Allcontainer/>
       </div>
  );
}

export default App;
