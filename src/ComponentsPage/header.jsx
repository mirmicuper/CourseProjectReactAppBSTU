import data from '../Data.json'
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { RxHamburgerMenu } from 'react-icons/rx'
import SelectLang from '../Components/selectLang'
import { IconContext } from "react-icons";
import '../Style/header.css';

function Header(props) {
    let currLogo;
    let currHeaderLink;
    //массив логотипов
    let arrImg = [
        require('../images/logo.png'), // black logo
        require('../images/logo2.png') // light logo 
    ];
    //обработка цвета логотипа
    props.color == "black" ? currLogo = arrImg[1] : currLogo = arrImg[0];
    //инициализация массива ссылок
    const linkArrIds = [
        "#mainpage",
        "#aboutUs",
        "#catalog"
    ]
    const linkArrLinks = [
        "/",
        "/",
        "/"
    ]
    // 0 => links; 1 => ids;
    props.links == "0" ? currHeaderLink = linkArrLinks : currHeaderLink = linkArrIds;
    //инициализация переменной lang хранящей язык из store
    const lang = useSelector((state) => state.languages.langIS)
    //инициализация состояния dataCurrPage, которое
    //хранит данные из JSON для текущей страницы
    let dataCurrPage = [
        data.dataPageRU[6].a1, 
        data.dataPageRU[6].a2, 
        data.dataPageRU[6].a3
    ];
    //обработка языка
    switch (lang) {
        case "en":
            dataCurrPage[0] = data.dataPageEN[6].a1
            dataCurrPage[1] = data.dataPageEN[6].a2
            dataCurrPage[2] = data.dataPageEN[6].a3
            break;
        case "ru":
            dataCurrPage[0] = data.dataPageRU[6].a1
            dataCurrPage[1] = data.dataPageRU[6].a2
            dataCurrPage[2] = data.dataPageRU[6].a3
            break;
        case "by":
            dataCurrPage[0] = data.dataPageBY[6].a1
            dataCurrPage[1] = data.dataPageBY[6].a2
            dataCurrPage[2] = data.dataPageBY[6].a3
            break;
        default:
            break;
    }
    return(
        <header className="headerClass">
            <img alt="logo" src={currLogo}/>
            <div className="headerLinks">
                <Link to={currHeaderLink[0]}>{dataCurrPage[0]}</Link>
                <Link to={currHeaderLink[1]}>{dataCurrPage[1]}</Link>
                <Link to={currHeaderLink[2]}>{dataCurrPage[2]}</Link>
            </div>
            <div className="selectLangHeader">
                <SelectLang />
            </div>
            <label class="burgerMenu" for="q1">
                <ul>
                    <a href="#">
                        <li class="el" id="menu">
                        <RxHamburgerMenu 
                            size={"50px"} 
                            className={"menu"}/>
                        </li>
                    </a>
                    <Link to={currHeaderLink[0]}><li class="el qwea w1">{dataCurrPage[0]}</li></Link>
                    <Link to={currHeaderLink[1]}><li class="el qwea w2">{dataCurrPage[1]}</li></Link>
                    <Link to={currHeaderLink[2]}><li class="el qwea w3">{dataCurrPage[2]}</li></Link>
                </ul>
            </label>
        </header>   
    );
}
export default Header;