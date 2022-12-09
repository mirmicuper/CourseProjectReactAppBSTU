import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../ComponentsPage/header';
import Footer from '../ComponentsPage/footer';
import { useSelector } from 'react-redux';
import {GoLocation} from 'react-icons/go';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
import CatalogDataJSON from '../Catalog.json'
import '../Style/PageStyles/CatalogItemPageStyle.css';

export default function CatalogItemPage() {
    //инициализация переменной lang хранящей язык из store
    const lang = useSelector((state) => state.languages.langIS)
    //инициализация переменной item хранящей товар из store
    const item = useSelector((state) => state.items.itemIS)
    //инициализация состояния dataCurrPage, которое
    //хранит данные из JSON для текущей страницы
    let dataCurrPage = [
        CatalogDataJSON.CatalogRU[item].Name, //0
        CatalogDataJSON.CatalogRU[item].Location, //1
        CatalogDataJSON.CatalogRU[item].NumFeedBack, //2
        CatalogDataJSON.CatalogRU[item].Price, //3
        CatalogDataJSON.CatalogRU[item].Stars, //4
        CatalogDataJSON.CatalogRU[item].Discription, //5
        CatalogDataJSON.CatalogRU[item].Type, //6
        CatalogDataJSON.CatalogRU[item].Time, //7
        CatalogDataJSON.CatalogRU[5].button,
        CatalogDataJSON.CatalogRU[6].timeValue,
        CatalogDataJSON.CatalogRU[8].feedBack,
        CatalogDataJSON.CatalogRU[9].discript
    ];
    //инициализация массива пустых звезд
    let arr_stars = [
        <AiOutlineStar/>,
        <AiOutlineStar/>,
        <AiOutlineStar/>,
        <AiOutlineStar/>,
        <AiOutlineStar/>
    ];
    //заполнение массива звезд звездами в зависимости от количества
    for(let i = 0; i < dataCurrPage[4]; i++) {
        arr_stars[i] = <AiFillStar />;
    }
    //массив изображений
    const arrImg = [
        require('../images/zamok.jpeg'),
        require('../images/kostel.jpeg'),
        require('../images/carch.jpeg'),
        require('../images/lidbeerbar.jpeg'),
        require('../images/park.jpeg'),
    ]
    //обработка языка
    switch (lang) {
        case "en":
            dataCurrPage[0] = CatalogDataJSON.CatalogEN[item].Name;
            dataCurrPage[1] = CatalogDataJSON.CatalogEN[item].Location;
            dataCurrPage[2] = CatalogDataJSON.CatalogEN[item].NumFeedBack;
            dataCurrPage[3] = CatalogDataJSON.CatalogEN[item].Price;
            dataCurrPage[4] = CatalogDataJSON.CatalogEN[item].Stars;
            dataCurrPage[5] = CatalogDataJSON.CatalogEN[item].Discription;
            dataCurrPage[6] = CatalogDataJSON.CatalogEN[item].Type;
            dataCurrPage[7] = CatalogDataJSON.CatalogEN[item].Time;
            dataCurrPage[8] = CatalogDataJSON.CatalogEN[5].button;
            dataCurrPage[9] = CatalogDataJSON.CatalogEN[6].timeValue
            dataCurrPage[10] = CatalogDataJSON.CatalogEN[8].feedBack
            dataCurrPage[11] = CatalogDataJSON.CatalogEN[9].discript
            break;
        case "ru":
            dataCurrPage[0] = CatalogDataJSON.CatalogRU[item].Name;
            dataCurrPage[1] = CatalogDataJSON.CatalogRU[item].Location;
            dataCurrPage[2] = CatalogDataJSON.CatalogRU[item].NumFeedBack;
            dataCurrPage[3] = CatalogDataJSON.CatalogRU[item].Price;
            dataCurrPage[4] = CatalogDataJSON.CatalogRU[item].Stars;
            dataCurrPage[5] = CatalogDataJSON.CatalogRU[item].Discription;
            dataCurrPage[6] = CatalogDataJSON.CatalogRU[item].Type;
            dataCurrPage[7] = CatalogDataJSON.CatalogRU[item].Time;
            dataCurrPage[8] = CatalogDataJSON.CatalogRU[5].button
            dataCurrPage[9] = CatalogDataJSON.CatalogRU[6].timeValue
            dataCurrPage[10] = CatalogDataJSON.CatalogRU[8].feedBack
            dataCurrPage[11] = CatalogDataJSON.CatalogRU[9].discript
            break;
        case "by":
            dataCurrPage[0] = CatalogDataJSON.CatalogBY[item].Name;
            dataCurrPage[1] = CatalogDataJSON.CatalogBY[item].Location;
            dataCurrPage[2] = CatalogDataJSON.CatalogBY[item].NumFeedBack;
            dataCurrPage[3] = CatalogDataJSON.CatalogBY[item].Price;
            dataCurrPage[4] = CatalogDataJSON.CatalogBY[item].Stars;
            dataCurrPage[5] = CatalogDataJSON.CatalogBY[item].Discription;
            dataCurrPage[6] = CatalogDataJSON.CatalogBY[item].Type;
            dataCurrPage[7] = CatalogDataJSON.CatalogBY[item].Time;
            dataCurrPage[8] = CatalogDataJSON.CatalogBY[5].button
            dataCurrPage[9] = CatalogDataJSON.CatalogBY[6].timeValue
            dataCurrPage[10] = CatalogDataJSON.CatalogBY[8].feedBack
            dataCurrPage[11] = CatalogDataJSON.CatalogBY[9].discript
            break;
        default:
            break;
    }
    return(
        <div>
            <Header color="black"/>
            <div className="allBlock">
                <div className="genBlokItem">
                    <img className="imgCatalogItem" src={arrImg[item]}/>
                    <div className="div">
                        <h1>{dataCurrPage[0]}</h1>
                        <h4><GoLocation/>{dataCurrPage[1]}</h4>
                        <h4>{dataCurrPage[6]}</h4>
                        <div className="divInner">
                            <div className="blockInGenBlock">
                                <h3>{dataCurrPage[3]} BYN</h3>
                                <h3>{dataCurrPage[7]} {dataCurrPage[9]}</h3>
                            </div>
                            <div className="feedbackBlock">
                                <h3>{dataCurrPage[2]} {dataCurrPage[10]}</h3>
                                <h3>{arr_stars}</h3>
                            </div>
                        </div>
                        <button className="ButtonItemPage">
                            <Link to="/form">{dataCurrPage[8]}</Link>
                        </button>
                    </div>
                </div>
                <div className="aboutCatalogItem">
                    <h2>{dataCurrPage[11]}</h2>
                    <p>{dataCurrPage[5]}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
