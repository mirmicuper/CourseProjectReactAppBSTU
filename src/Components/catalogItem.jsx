import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
import '../Style/catalogItemStyle.css'
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectItem } from '../features/ItemSlice';
import CatalogDataJSON from '../Catalog.json'

function CatalogItem({img, name, stars, price, time, id}) {
    //инициализация dispatch и смежных переменных
    const dispatch = useDispatch();
    //инициализация переменной lang хранящей язык из store
    const lang = useSelector((state) => state.languages.langIS)
    let dataCurrPage = [
        CatalogDataJSON.CatalogRU[id].Name, //0
        CatalogDataJSON.CatalogRU[id].Location, //1
        CatalogDataJSON.CatalogRU[id].NumFeedBack, //2
        CatalogDataJSON.CatalogRU[id].Price, //3
        CatalogDataJSON.CatalogRU[id].Stars, //4
        CatalogDataJSON.CatalogRU[id].Discription, //5
        CatalogDataJSON.CatalogRU[id].Type, //6
        CatalogDataJSON.CatalogRU[id].Time, //7
        CatalogDataJSON.CatalogRU[5].button, //8
        CatalogDataJSON.CatalogRU[6].timeValue //8
    ];
    const currency = "BYN";
    let unitTime = "Часа"
    //инициализация массива пустых звезд
    let arr_stars = [
        <AiOutlineStar/>,
        <AiOutlineStar/>,
        <AiOutlineStar/>,
        <AiOutlineStar/>,
        <AiOutlineStar/>
    ];
    //заполнение массива звезд звездами в зависимости от количества
    for(let i = 0; i < stars; i++) {
        arr_stars[i] = <AiFillStar />;
    }
    switch (lang) {
        case "en":
            dataCurrPage[0] = CatalogDataJSON.CatalogEN[id].Name;
            dataCurrPage[1] = CatalogDataJSON.CatalogEN[id].Location;
            dataCurrPage[2] = CatalogDataJSON.CatalogEN[id].NumFeedBack;
            dataCurrPage[3] = CatalogDataJSON.CatalogEN[id].Price;
            dataCurrPage[4] = CatalogDataJSON.CatalogEN[id].Stars;
            dataCurrPage[5] = CatalogDataJSON.CatalogEN[id].Discription;
            dataCurrPage[6] = CatalogDataJSON.CatalogEN[id].Type;
            dataCurrPage[7] = CatalogDataJSON.CatalogEN[id].Time;
            dataCurrPage[8] = CatalogDataJSON.CatalogEN[5].button;
            dataCurrPage[9] = CatalogDataJSON.CatalogEN[6].timeValue;
            break;
        case "ru":
            dataCurrPage[0] = CatalogDataJSON.CatalogRU[id].Name;
            dataCurrPage[1] = CatalogDataJSON.CatalogRU[id].Location;
            dataCurrPage[2] = CatalogDataJSON.CatalogRU[id].NumFeedBack;
            dataCurrPage[3] = CatalogDataJSON.CatalogRU[id].Price;
            dataCurrPage[4] = CatalogDataJSON.CatalogRU[id].Stars;
            dataCurrPage[5] = CatalogDataJSON.CatalogRU[id].Discription;
            dataCurrPage[6] = CatalogDataJSON.CatalogRU[id].Type;
            dataCurrPage[7] = CatalogDataJSON.CatalogRU[id].Time;
            dataCurrPage[8] = CatalogDataJSON.CatalogRU[5].button;
            dataCurrPage[9] = CatalogDataJSON.CatalogRU[5].timeValue;
            break;
        case "by":
            dataCurrPage[0] = CatalogDataJSON.CatalogBY[id].Name;
            dataCurrPage[1] = CatalogDataJSON.CatalogBY[id].Location;
            dataCurrPage[2] = CatalogDataJSON.CatalogBY[id].NumFeedBack;
            dataCurrPage[3] = CatalogDataJSON.CatalogBY[id].Price;
            dataCurrPage[4] = CatalogDataJSON.CatalogBY[id].Stars;
            dataCurrPage[5] = CatalogDataJSON.CatalogBY[id].Discription;
            dataCurrPage[6] = CatalogDataJSON.CatalogBY[id].Type;
            dataCurrPage[7] = CatalogDataJSON.CatalogBY[id].Time;
            dataCurrPage[8] = CatalogDataJSON.CatalogBY[5].button;
            dataCurrPage[9] = CatalogDataJSON.CatalogEN[6].timeValue;
            break;
        default:
            break;
    }
    return(
        <div className="catalogItem">
            <img className="catalogItemImg"
                 src={img} 
                alt="alt"/>
            <div className="NameItem">
                <h3>{dataCurrPage[0]}</h3>
            </div>
            <div className="infoAboutItem">
                <p className="p1">{dataCurrPage[3]} {currency}</p>
                <p className="p2">{dataCurrPage[7]} {dataCurrPage[9]}</p>
                <p className="p3">{arr_stars}</p>
            </div>
            <button className="ButtonItem">
                <Link to="/item" 
                    onClick={() => {
                        dispatch(selectItem(id))}
                    }>
                        {dataCurrPage[8]}
                </Link>
                
            </button>
        </div>
    );
}

export default CatalogItem;