import React from 'react'
import './Section3.css'

export default ()=>{
    const financing = [
        {id:1,
            textTitle:"I'm a title. Click to edit me.",
            textPar:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Click “Edit Text” or double click me and you can start adding your own content and make changes to the font. I’m a great place for you to let your users know a little more about you. If you want to delete me just click on me and press delete."},
        {id:2,
            textTitle:"I'm a title. Click to edit me.",
            textPar:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Click “Edit Text” or double click me and you can start adding your own content and make changes to the font. I’m a great place for you to let your users know a little more about you. If you want to delete me just click on me and press delete."},
        {id:3,
            textTitle:"I'm a title. Click to edit me.",
            textPar:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Click “Edit Text” or double click me and you can start adding your own content and make changes to the font. I’m a great place for you to let your users know a little more about you. If you want to delete me just click on me and press delete."},
        {id:4,
            textTitle:"I'm a title. Click to edit me.",
            textPar:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Click “Edit Text” or double click me and you can start adding your own content and make changes to the font. I’m a great place for you to let your users know a little more about you. If you want to delete me just click on me and press delete."},
        {id:5,
            textTitle:"I'm a title. Click to edit me.",
            textPar:"I'm a paragraph. Click here to add your own text and edit me. It’s easy. Click “Edit Text” or double click me and you can start adding your own content and make changes to the font. I’m a great place for you to let your users know a little more about you. If you want to delete me just click on me and press delete."}
    ]
    return(
        <section>
        <div className={"sec3Container"}>
            {
        financing.map((e,i)=>{
            return(
                <div className={"sec3Item"}>
                    <h2><span style={{color:'red'}}>0{e.id}</span> {e.textTitle}</h2>
                    <h3>{e.textPar}</h3>
                </div>
            )
        })}
        <button className={"sec3FinBTN"}>ONLINE FINANCING</button>
        </div>
        </section>
    )
}