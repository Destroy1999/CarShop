import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Section from './Components/Section/Section'
import Header2 from './Components/Header2/Header2'
import Section2 from './Components/Section2/Section2'
import Header3 from './Components/Header3/Header3'
import Section3 from './Components/Section3/Section3'
import Header4 from './Components/Header4/Header4'
import Section4 from './Components/Section4/Section4'
import Header5 from './Components/Header5/Header5'
import Section5 from './Components/Section5/Section5'
import Footer from './Components/Footer/Footer'

export default ()=>{
    return(
        <div className={"appContainer"}>
            <Navbar/>
            <Header/>
            <Section/>
            <Header2/>
            <Section2/>
            <Header3/>
            <Section3/>
            <Header4/>
            <Section4/>
            <Header5/>
            <Section5/>
            <Footer/>
        </div>
    )
}

