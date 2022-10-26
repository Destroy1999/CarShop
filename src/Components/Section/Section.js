import React from 'react'
import './Section.css'

export default ()=>{
    const carList = [
        {id:0,
            CarImg:'https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg',
            Alt:'car1',
            CarName:'BMW',
            Transmission:true,
            Mileage:'100,000',
            Price:'$350,000',
            YearOfBirth:'2016',
            Series:'3'},
        {id:1,
            CarImg:'https://profile.ru/wp-content/uploads/2019/09/Ford-GT-2017--1200x675.jpg',
            Alt:'car2',
            CarName:'AUDI',
            Transmission:false,
            Mileage:'125,000',
            Price:'$250,000',
            YearOfBirth:'2018',
            Series:'1'},
        {id:2,
            CarImg:'https://c4.wallpaperflare.com/wallpaper/787/18/502/cars-hd-widescreen-high-quality-desktop-wallpaper-preview.jpg',
            Alt:'car3',
            CarName:'RENAULT',
            Transmission:true,
            Mileage:'132,000',
            Price:'$150,000',
            YearOfBirth:'2015',
            Series:'4'},
        {id:3,
            CarImg:'https://www.ag-motoyama.com/lamborghini/aventador_lp700-4_2012_1/pic/mainimage.jpg?1210',
            Alt:'car4',
            CarName:'HYUNDAI',
            Transmission:false,
            Mileage:'143,000',
            Price:'$425,000',
            YearOfBirth:'2020',
            Series:'1'}
    ]
    return(
        <section>
            <div className={"hotLot"}>
                <h2>Hot On The Lot</h2>
                <div className={"hotLine"}></div>
            </div>
        <div className={"itemsContainer"}>
            {
            carList.map((e,i)=>{
            return(
                    <div className={"items"}>
                        <img width={"100%"} height={"150px"} src={e.CarImg} alt={e.Alt}/>
                        <div className={"itemTextUp"}>
                        <h3>{e.YearOfBirth} {e.CarName} <br/> {e.Series}-Series</h3>
                        </div>
                        <div className={"itemTextDown"}>
                            <h3>Transmission: <span style={e.Transmission ? {color:'lime'} : {color:'orange'}}>{e.Transmission ? "Automatic" : "Mechanical"}</span></h3>
                            <h3>Mileage: <span style={{color:'red'}}>{e.Mileage}</span> miles</h3>
                        <h3>Price: <span style={{color:'red'}}>{e.Price}</span></h3>
                        </div>
                        <button className={"itemBTN"}>See Details</button>
                </div>
            )
        })}
        </div>
        </section>
    )
}