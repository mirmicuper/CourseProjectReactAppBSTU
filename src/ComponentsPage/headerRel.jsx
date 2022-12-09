import React from 'react';
import data from '../Data.json'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import SelectLang from '../Components/selectLang'
import { RxHamburgerMenu } from 'react-icons/rx'
import '../Style/rel.css';

function HeaderRel(props) {
    let currLogo;
    //массив логотипов
    let arrImg = [
        require('../images/logo.png'), // black logo
        require('../images/logo2.png') // light logo 
    ];
    //обработка цвета логотипа
    props.color == "black" ? currLogo = arrImg[1] : currLogo = arrImg[0];
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
        <header className="headerClassrel">
            <img alt="logo" src={currLogo}/>
            <div className="headerLinksrel">
                <Link to="/">{dataCurrPage[0]}</Link>
                <Link to="/">{dataCurrPage[1]}</Link>
                <Link to="/">{dataCurrPage[2]}</Link>
            </div>
            <div className="selectLangHeaderrel">
                <SelectLang />
            </div>
            {/* <IconContext.Provider value={{ padding: "20px" }}> */}
                <div className="burgetMenurel">
                    <a onClick={()=>{alert("Ебаная панченко!!!!!")}}><RxHamburgerMenu size={"50px"} className={"menu"}/></a>
                </div>
            {/* </IconContext.Provider> */}
        </header>    
    );
}
export default HeaderRel