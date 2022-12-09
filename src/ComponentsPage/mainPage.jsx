import React from 'react';
import "../Style/mainPageStyles.css";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import data from '../Data.json'
import inst from '../images/socNetworks/inst.svg';
import vk from '../images/socNetworks/vk.svg';
import fb from '../images/socNetworks/fb.svg';
import tw from '../images/socNetworks/tw.svg';

export default function MainPage() {
    //инициализация переменной lang хранящей язык из store
    const lang = useSelector((state) => state.languages.langIS)
    //инициализация состояния dataCurrPage, которое
    //хранит данные из JSON для текущей страницы
    let dataCurrPage = [data.dataPageRU[0].genButton];
    //обработка языка
    switch (lang) {
        case "en":
            dataCurrPage[0] = data.dataPageEN[0].genButton;
            break;
        case "ru":
            dataCurrPage[0] = data.dataPageRU[0].genButton;
            break;
        case "by":
            dataCurrPage[0] = data.dataPageBY[0].genButton;
            break;
        default:
            break;
    }
    return (
            <div className="MainPage" id="mainpage">
                <a className="MainPageButton" href="/form">{dataCurrPage[0]}</a>
                <div className="socBar">
                    <a href="https://instagram.com">
                        <img className="socNet" 
                        width="30" 
                        src={inst} 
                        alt="instagram"/>
                    </a>
                    <a href="https://vk.com">
                        <img className="socNet" 
                        width="30" 
                        src={vk} 
                        alt="vk"/>
                    </a>
                    <a href="https://facebook.com">
                        <img className="socNet" 
                        width="30" 
                        src={fb} 
                        alt="facebook"/>
                    </a>
                    <a href="https://twittor.com">
                        <img className="socNet" 
                        width="30" 
                        src={tw} 
                        alt="twitter"/>
                    </a>
                </div>
            </div>   

    );
}