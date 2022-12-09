import '../Style/review.css'
import imgReview from '../images/IMG_4905.JPG'
import data from '../Data.json'
import React from 'react';
import { useSelector } from 'react-redux'

export default function Review() {
    //инициализация переменной lang хранящей язык из store
    const lang = useSelector((state) => state.languages.langIS)
    //инициализация состояния dataCurrPage, которое
    //хранит данные из JSON для текущей страницы
    let dataCurrPage = [data.dataPageRU[2].reviewH,data.dataPageRU[2].reviewP];
    //обработка языка
    switch (lang) {
        case "en":
            dataCurrPage[0] = data.dataPageEN[2].reviewH;
            dataCurrPage[1] = data.dataPageEN[2].reviewP;
            break;
        case "ru":
            dataCurrPage[0] = data.dataPageRU[2].reviewH;
            dataCurrPage[1] = data.dataPageRU[2].reviewP;
            break;
        case "by":
            dataCurrPage[0] = data.dataPageBY[2].reviewH;
            dataCurrPage[1] = data.dataPageBY[2].reviewP;
            break;
        default:
            break;
    }
    return(
        <div className="reviewPage">
            <h2>{dataCurrPage[0]}</h2>
            <p>&rdquo;{dataCurrPage[1]}&bdquo;</p>
            <img src={imgReview} alt="review" />
        </div>
    );
}