import React from 'react'
import './Header.css'

export default ()=>{
    const slaidShowCars = [
        {id:0,
            img:'https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg',
            alt:'car1'},
        {id:1,
            img:'https://profile.ru/wp-content/uploads/2019/09/Ford-GT-2017--1200x675.jpg',
            alt:'car2'},
        {id:2,
            img:'https://c4.wallpaperflare.com/wallpaper/787/18/502/cars-hd-widescreen-high-quality-desktop-wallpaper-preview.jpg',
            alt:'car3'},
        {id:3,
            img:'https://www.ag-motoyama.com/lamborghini/aventador_lp700-4_2012_1/pic/mainimage.jpg?1210',
            alt:'car4'}
    ]
    return(
        <header>
            <div className={"imgContainer"}>
                <div className={"hImgText"}>
                    <p>0.9% APR FINANCING AVAILABLE FOR UP TO 24 MONTHS</p>
                </div>
                <div className={"hImgBTN"}>
                    <button>SEE DETAILS</button>
                </div>
                {slaidShowCars.map((e,i)=>{
                return(
                <img src={e.img} alt={e.alt} width={"100%"} height={"600px"}/>
                 )
              })}
        </div>
        </header>
    )
}
