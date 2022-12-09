import React from 'react';
import '../Style/aboutLida.css'
import data from '../Data.json'
import { useSelector } from 'react-redux'

export default function AboutLida() {
    //инициализация переменной lang хранящей язык из store
    const lang = useSelector((state) => state.languages.langIS)
    //инициализация состояния dataCurrPage, которое
    //хранит данные из JSON для текущей страницы
    let dataCurrPage = [
        data.dataPageRU[1].h1,
        data.dataPageRU[1].p,
        data.dataPageRU[1].boxes[0].h,
        data.dataPageRU[1].boxes[0].p,
        data.dataPageRU[1].boxes[1].h,
        data.dataPageRU[1].boxes[1].p,
        data.dataPageRU[1].boxes[2].h,
        data.dataPageRU[1].boxes[2].p,
        data.dataPageRU[1].boxes[3].h,
        data.dataPageRU[1].boxes[3].p,
        data.dataPageRU[1].boxes[4].h,
        data.dataPageRU[1].boxes[4].p
    ];
    //обработка языка
    switch (lang) {
        case "en":
            dataCurrPage[0] = data.dataPageEN[1].h1
            dataCurrPage[1] = data.dataPageEN[1].p
            dataCurrPage[2] = data.dataPageEN[1].boxes[0].h
            dataCurrPage[3] = data.dataPageEN[1].boxes[0].p
            dataCurrPage[4] = data.dataPageEN[1].boxes[1].h
            dataCurrPage[5] = data.dataPageEN[1].boxes[1].p
            dataCurrPage[6] = data.dataPageEN[1].boxes[2].h
            dataCurrPage[7] = data.dataPageEN[1].boxes[2].p
            dataCurrPage[8] = data.dataPageEN[1].boxes[3].h
            dataCurrPage[9] = data.dataPageEN[1].boxes[3].p
            dataCurrPage[10] = data.dataPageEN[1].boxes[4].h
            dataCurrPage[11] = data.dataPageEN[1].boxes[4].p
            break;
        case "ru":
            dataCurrPage[0] = data.dataPageRU[1].h1
            dataCurrPage[1] = data.dataPageRU[1].p
            dataCurrPage[2] = data.dataPageRU[1].boxes[0].h
            dataCurrPage[3] = data.dataPageRU[1].boxes[0].p
            dataCurrPage[4] = data.dataPageRU[1].boxes[1].h
            dataCurrPage[5] = data.dataPageRU[1].boxes[1].p
            dataCurrPage[6] = data.dataPageRU[1].boxes[2].h
            dataCurrPage[7] = data.dataPageRU[1].boxes[2].p
            dataCurrPage[8] = data.dataPageRU[1].boxes[3].h
            dataCurrPage[9] = data.dataPageRU[1].boxes[3].p
            dataCurrPage[10] = data.dataPageRU[1].boxes[4].h
            dataCurrPage[11] = data.dataPageRU[1].boxes[4].p
            break;
        case "by":
            dataCurrPage[0] = data.dataPageBY[1].h1
            dataCurrPage[1] = data.dataPageBY[1].p
            dataCurrPage[2] = data.dataPageBY[1].boxes[0].h
            dataCurrPage[3] = data.dataPageBY[1].boxes[0].p
            dataCurrPage[4] = data.dataPageBY[1].boxes[1].h
            dataCurrPage[5] = data.dataPageBY[1].boxes[1].p
            dataCurrPage[6] = data.dataPageBY[1].boxes[2].h
            dataCurrPage[7] = data.dataPageBY[1].boxes[2].p
            dataCurrPage[8] = data.dataPageBY[1].boxes[3].h
            dataCurrPage[9] = data.dataPageBY[1].boxes[3].p
            dataCurrPage[10] = data.dataPageBY[1].boxes[4].h
            dataCurrPage[11] = data.dataPageBY[1].boxes[4].p
            break;
        default:
            break;
    }
    return(
        <div className="aboutLida">
            <h3>{dataCurrPage[0]}</h3>
            <div className="phka">
                <p>{dataCurrPage[1]}</p>
            </div>
            <div className="boxNum">
                <div className="boxNumInner">
                    <h2>{dataCurrPage[2]}</h2>
                    <p>{dataCurrPage[3]}</p>
                </div>
                <div className="boxNumInner">
                    <h2>{dataCurrPage[4]}</h2>
                    <p>{dataCurrPage[5]}</p>
                </div>
                <div className="boxNumInner">
                    <h2>{dataCurrPage[6]}</h2>
                    <p>{dataCurrPage[7]}</p>
                </div>
                <div className="boxNumInner">
                    <h2>{dataCurrPage[8]}</h2>
                    <p>{dataCurrPage[9]}</p>
                </div>
                <div className="boxNumInner">
                    <h2>{dataCurrPage[10]}</h2>
                    <p>{dataCurrPage[11]}</p>
                </div>
            </div>
        </div>
    );
}