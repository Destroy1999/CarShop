import React from 'react'
import './Section2.css'

export default ()=>{
    const inventoryCars = [
        {id:0,
            CarImg:'https://i.ytimg.com/vi/_adJBzQgfsg/maxresdefault.jpg',
            Alt:'car1',
            CarName:'BMW',
            Transmission:true,
            Mileage:'100,000',
            Price:'$350,000',
            YearOfBirth:'2016',
            Series:'3',
            Exterior:'Silver',
            Interior:'Black',
            Model:'325i',
            Class:'None'},
        {id:1,
            CarImg:'https://profile.ru/wp-content/uploads/2019/09/Ford-GT-2017--1200x675.jpg',
            Alt:'car2',
            CarName:'AUDI',
            Transmission:false,
            Mileage:'125,000',
            Price:'$250,000',
            YearOfBirth:'2018',
            Series:'1',
            Exterior:'Emerald',
            Interior:'White',
            Model:'325i',
            Class:'None'},
        {id:2,
            CarImg:'https://c4.wallpaperflare.com/wallpaper/787/18/502/cars-hd-widescreen-high-quality-desktop-wallpaper-preview.jpg',
            Alt:'car3',
            CarName:'RENAULT',
            Transmission:true,
            Mileage:'132,000',
            Price:'$150,000',
            YearOfBirth:'2015',
            Series:'4',
            Exterior:'Red',
            Interior:'Red-Black',
            Model:'325i',
            Class:'None'},
        {id:3,
            CarImg:'https://www.ag-motoyama.com/lamborghini/aventador_lp700-4_2012_1/pic/mainimage.jpg?1210',
            Alt:'car4',
            CarName:'HYUNDAI',
            Transmission:false,
            Mileage:'143,000',
            Price:'$425,000',
            YearOfBirth:'2020',
            Series:'1',
            Exterior:'Ora.-Red-Gradient',
            Interior:'Black',
            Model:'325i',
            Class:'None'},
        {id:4,
            CarImg:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2018-09-05-at-9-23-55-am-1536153859.png',
            Alt:'car5',
            CarName:'HYUNDAI',
            Transmission:true,
            Mileage:'150,000',
            Price:'$320,000',
            YearOfBirth:'2018',
            Series:'2',
            Exterior:'Ora.-Yel.-Gradient',
            Interior:'Black',
            Model:'325i',
            Class:'None'},
        {id:5,
            CarImg:'https://wallpaperaccess.com/full/4419766.jpg',
            Alt:'car6',
            CarName:'HYUNDAI',
            Transmission:false,
            Mileage:'165,000',
            Price:'$150,000',
            YearOfBirth:'2019',
            Series:'4',
            Exterior:'Yellow',
            Interior:'Black',
            Model:'325i',
            Class:'None'},
        {id:6,
            CarImg:'https://wallpapercave.com/wp/qG7kFeQ.jpg',
            Alt:'car7',
            CarName:'HYUNDAI',
            Transmission:true,
            Mileage:'400,000',
            Price:'$425,000',
            YearOfBirth:'2010',
            Series:'1',
            Exterior:'Dark Blue',
            Interior:'Black',
            Model:'325i',
            Class:'None'},
        {id:7,
            CarImg:'https://s1.cdn.autoevolution.com/images/news/le-mansory-the-insane-ford-gt-full-conversion-could-be-yours-for-21-million-147411_1.jpg',
            Alt:'car8',
            CarName:'HYUNDAI',
            Transmission:false,
            Mileage:'325,000',
            Price:'$320,000',
            YearOfBirth:'2020',
            Series:'6',
            Exterior:'Blue',
            Interior:'Black',
            Model:'325i',
            Class:'None'}
    ]
    return(
        <section>
            <div className="sec2ItemsContainer">
                {
                    inventoryCars.map((e,i)=>{
                        return(
                            <div className={"sec2Items"}>
                                <img width={"100%"} height={"300px"} src={e.CarImg} alt={e.Alt}/>
                                <div className={"sec2TextCont"}>
                                <div className={"sec2ItemTextLeft"}>
                                    <h3>{e.YearOfBirth} {e.CarName} <br/> {e.Series}-Series {e.Model} {e.Class}</h3>
                                    <h3>Price: <span style={{color:'red'}}>{e.Price}</span></h3>
                                </div>
                                <div className={"sec2TLine"}></div>
                                <div className={"sec2ItemTextRight"}>
                                    <h3>Exterior: <span style={{color:'red'}}>{e.Exterior}</span></h3>
                                    <h3>Interior: <span style={{color:'red'}}>{e.Interior}</span></h3>
                                    <h3>Transmission: <span style={e.Transmission ? {color:'lime'} : {color:'orange'}}>{e.Transmission ? "Automatic" : "Mechanical"}</span></h3>
                                    <h3>Mileage: <span style={{color:'red'}}>{e.Mileage}</span> miles</h3>
                                    <button className={"sec2ItemBTN"}>INQUIRE</button>
                                </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </section>
    )
}