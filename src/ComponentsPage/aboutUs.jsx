import '../Style/aboutUs.css'
import data from '../Data.json'
import React from 'react';
import { useSelector } from 'react-redux'


export default function AboutUs() {
    //инициализация переменной lang хранящей язык из store
    const lang = useSelector((state) => state.languages.langIS)
    //инициализация состояния dataCurrPage, которое
    //хранит данные из JSON для текущей страницы
    let dataCurrPage = [
        data.dataPageRU[3].mainH,
        data.dataPageRU[3].boxes[0].h,
        data.dataPageRU[3].boxes[0].p,
        data.dataPageRU[3].boxes[1].h,
        data.dataPageRU[3].boxes[1].p,
        data.dataPageRU[3].boxes[2].h,
        data.dataPageRU[3].boxes[2].p
    ];
    //обработка языка
    switch (lang) {
        case "en":
            dataCurrPage[0] = data.dataPageEN[3].mainH;
            dataCurrPage[1] = data.dataPageEN[3].boxes[0].h;
            dataCurrPage[2] = data.dataPageEN[3].boxes[0].p;
            dataCurrPage[3] = data.dataPageEN[3].boxes[1].h;
            dataCurrPage[4] = data.dataPageEN[3].boxes[1].p;
            dataCurrPage[5] = data.dataPageEN[3].boxes[2].h;
            dataCurrPage[6] = data.dataPageEN[3].boxes[2].p;
            break;
        case "ru":
            dataCurrPage[0] = data.dataPageRU[3].mainH;
            dataCurrPage[1] = data.dataPageRU[3].boxes[0].h;
            dataCurrPage[2] = data.dataPageRU[3].boxes[0].p;
            dataCurrPage[3] = data.dataPageRU[3].boxes[1].h;
            dataCurrPage[4] = data.dataPageRU[3].boxes[1].p;
            dataCurrPage[5] = data.dataPageRU[3].boxes[2].h;
            dataCurrPage[6] = data.dataPageRU[3].boxes[2].p;
            break;
        case "by":
            dataCurrPage[0] = data.dataPageBY[3].mainH;
            dataCurrPage[1] = data.dataPageBY[3].boxes[0].h;
            dataCurrPage[2] = data.dataPageBY[3].boxes[0].p;
            dataCurrPage[3] = data.dataPageBY[3].boxes[1].h;
            dataCurrPage[4] = data.dataPageBY[3].boxes[1].p;
            dataCurrPage[5] = data.dataPageBY[3].boxes[2].h;
            dataCurrPage[6] = data.dataPageBY[3].boxes[2].p;
            break;
        default:
            break;
    }
    return(
        <div className="aboutUs" id="aboutUs">
                <h3>{dataCurrPage[0]}</h3>
                <div className="aboutUsContainer">
                    <div className="box1">
                        <h3>{dataCurrPage[1]}</h3>
                        <p>{dataCurrPage[2]}</p>
                    </div>
                    <div className="box2">
                        <h3>{dataCurrPage[3]}</h3>
                        <p>{dataCurrPage[4]}</p>
                    </div>
                    <div className="box3">
                        <h3>{dataCurrPage[5]}</h3>
                        <p>{dataCurrPage[6]}</p>
                    </div>
                </div>
            </div>
    );
}