import React from 'react';
import '../Style/inputs.css'
import '../Style/PageStyles/FormPageStyle.css'
import InputName from '../Components/inputs/inputName';
import InputPhone from '../Components/inputs/inputPhone';
import InputTextArea from '../Components/inputs/inputTextarea';
import InputEmail from '../Components/inputs/inputEmail';
import InputCount from '../Components/inputs/inputCount';
import InputDate from '../Components/inputs/inputDate';
import SelectTour from '../Components/inputs/selectTours';
import IMG from '../images/lidbeerbar.jpeg'
import { useSelector } from "react-redux";
import { useState } from 'react';
import HeaderRel from '../ComponentsPage/headerRel';
import Footer from '../ComponentsPage/footer';
import data from '../Data.json'

export default function FormPage() {
    //инициализация переменной lang хранящей язык из store
    const lang = useSelector((state) => state.languages.langIS)
    //инициализация переменной item хранящей товар из store
    const item = useSelector((state) => state.items.itemIS)
    //инициализация состояния dataCurrPage, которое
    //хранит данные из JSON для текущей страницы
    let dataCurrPage = [
        data.dataPageRU[8].h1,
        data.dataPageRU[8].button,
    ];
    
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
            dataCurrPage[0] = data.dataPageEN[8].h1;
            dataCurrPage[1] = data.dataPageEN[8].button;
            break;
        case "ru":
            dataCurrPage[0] = data.dataPageRU[8].h1;
            dataCurrPage[1] = data.dataPageRU[8].button;
            break;
        case "by":
            dataCurrPage[0] = data.dataPageBY[8].h1;
            dataCurrPage[1] = data.dataPageBY[8].button;
            break;
        default:
            break;
    }
    return(
        <div>
            <HeaderRel color="black" links="0"/>
            <div className="formPage">
                <h1>{dataCurrPage[0]}</h1>
                <div className="formsComponents">
                    <InputName />
                    <InputPhone />
                    <InputEmail />
                    <SelectTour />
                    <InputDate />
                    <InputCount />
                    <InputTextArea />
                    <button className="formsSubmitButton" 
                        type="submit">
                        {dataCurrPage[1]}
                    </button>
                </div>
                <div className="formImg">
                    <img className="formImgClass" 
                        src={arrImg[item]} 
                        alt="image"/>
                </div>
            </div>
            <Footer />
        </div>
    );
}