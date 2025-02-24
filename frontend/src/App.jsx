import { useState, useEffect } from 'react'
// import './App.css'
// import About from './LandingPage/AboutUs/About.jsx'
// import Header from './Header'
// import ParticleEffect from './LandingPage/particleEffect'
import Resource from './LandingPage/Resources/Resource.jsx'
// import First from './LandingPage/Home/First.jsx'
import MembershipForm from "./LandingPage/membership/MembershipForm.jsx"
import Hero from "./LandingPage/membership/Hero"
// import LoadingPage from './LoadingPage.jsx'
import Contact from './LandingPage/ContactUs/contact.jsx'



function App() {

  return (
    <>
    {/* <First/> */}
    <Resource/>
<Contact/>
<Hero/>
<MembershipForm/> 
{/* <About/> */}
     
   
 {/*
  <Resource /> //<Hero/> 
           <h1 className='text-black'>membershipForm</h1>
          <MembershipForm/> 
           
           
        
      </> */} 
      </>
  )
}

export default App
