import React from 'react';
import '../Style/footer.css';
import { useSelector } from 'react-redux'
import data from '../Data.json'
import inst from '../images/socNetworks/inst.svg';
import vk from '../images/socNetworks/vk.svg';
import fb from '../images/socNetworks/fb.svg';
import tw from '../images/socNetworks/tw.svg';

export default function Footer() {
    //инициализация переменной lang хранящей язык из store
    const lang = useSelector((state) => state.languages.langIS)
    //инициализация состояния dataCurrPage, которое
    //хранит данные из JSON для текущей страницы
    let dataCurrPage = [
        data.dataPageRU[7].MainFormH,
        data.dataPageRU[7].placeholderName,
        data.dataPageRU[7].placeholderPhone,
        data.dataPageRU[7].footerButton,
        data.dataPageRU[7].a1,
        data.dataPageRU[7].a2,
        data.dataPageRU[7].a3,
        data.dataPageRU[7].p
    ];
    //массив изображений
    const arrImg = [
        require('../images/logo2.png')
    ]
    //обработка языка
    switch (lang) {
        case "en":
            dataCurrPage[0] = data.dataPageEN[7].MainFormH
            dataCurrPage[1] = data.dataPageEN[7].placeholderName
            dataCurrPage[2] = data.dataPageEN[7].placeholderPhone
            dataCurrPage[3] = data.dataPageEN[7].footerButton
            dataCurrPage[4] = data.dataPageEN[7].a1
            dataCurrPage[5] = data.dataPageEN[7].a2
            dataCurrPage[6] = data.dataPageEN[7].a3
            dataCurrPage[7] = data.dataPageEN[7].p
            break;
        case "ru":
            dataCurrPage[0] = data.dataPageRU[7].MainFormH
            dataCurrPage[1] = data.dataPageRU[7].placeholderName
            dataCurrPage[2] = data.dataPageRU[7].placeholderPhone
            dataCurrPage[3] = data.dataPageRU[7].footerButton
            dataCurrPage[4] = data.dataPageRU[7].a1
            dataCurrPage[5] = data.dataPageRU[7].a2
            dataCurrPage[6] = data.dataPageRU[7].a3
            dataCurrPage[7] = data.dataPageRU[7].p
            break;
        case "by":
            dataCurrPage[0] = data.dataPageBY[7].MainFormH
            dataCurrPage[1] = data.dataPageBY[7].placeholderName
            dataCurrPage[2] = data.dataPageBY[7].placeholderPhone
            dataCurrPage[3] = data.dataPageBY[7].footerButton
            dataCurrPage[4] = data.dataPageBY[7].a1
            dataCurrPage[5] = data.dataPageBY[7].a2
            dataCurrPage[6] = data.dataPageBY[7].a3
            dataCurrPage[7] = data.dataPageBY[7].p
            break;
        default:
            break;
    }
    return(
        <div className="footer">
            <img className="footerLogo" src={arrImg[0]} alt="logo" />
            <div className="mimiFormFooter">
                <h2>{dataCurrPage[0]}</h2>
                <form action="" className="footerForm">
                    <input type="text" placeholder={dataCurrPage[1]}/>
                    <input type="phone" placeholder={dataCurrPage[2]}/>
                </form>
                <a className="footerBut" href="/">{dataCurrPage[3]}</a>
            </div>
            <div className="socNetFooter">
                    <a href="https://instagram.com"><img width="30" src={inst} alt="instagram"/></a>
                    <a href="https://vk.com"><img width="30" src={vk} alt="vk"/></a>
                    <a href="https://facebook.com"><img width="30" src={fb} alt="facebook"/></a>
                    <a href="https://twittor.com"><img width="30" src={tw} alt="twitter"/></a>
            </div>
            <div className="navBarFooter">
                <a href="/">{dataCurrPage[4]}</a>
                <a href="/">{dataCurrPage[5]}</a>
                <a href="/">{dataCurrPage[6]}</a>
            </div>
            <div className="infoAboutProjectFooter">
                <p>{dataCurrPage[7]}</p>
            </div>
        </div>
    );
}