import React from 'react'
import './Navbar.css'


export default ()=>{
    const list = [
        {id:0,
            name:"HOME"},
        {id:1,
            name:"INVENTORY"},
        {id:2,
            name:"FINANCING"},
        {id:3,
            name:"ABOUT-US"},
        {id:4,
            name:"CONTACT"}
            ]
    return(
        <div className={"navContainer"}>
        <div className={"contactController"}>
            <div className={"contactControls"}>
                <button className={"contBTN"}>CALL US TODAY 1-800-000-0000</button>
                <div className={"contIcons"}>
                     <a className={"contactF"} href="#"><i className={"fab fa-facebook-f"}></i></a>
                     <a className={"contactT"} href="#"> <i className={"fab fa-twitter"}></i></a>
                </div>
        </div>
        </div>
    <nav>
        <h1><span style={{color:'red'}}>Pre</span>Owned Cars</h1>
        <ul>
            {
            list.map((e,i)=>{
                return(
                    <li><a href={e.name} id={e.name}>{e.name}</a></li>
                )
        })}
        </ul>
    </nav>
            </div>
    )
}