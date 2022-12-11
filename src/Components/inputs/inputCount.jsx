import React from "react";
import { useSelector } from "react-redux";
import data from '../../Data.json'

function InputCount() {
    //получаем состояние языка из стора в переменную lang
    const lang = useSelector((state) => state.languages.langIS)
    //инициализируем константы
    const numSeats = 20;
    const countSeats = [];
    //
    let dataCurrPage = [
        data.dataPageRU[10].count
    ]
    //заполняем массив
    for(let i = 0; i < numSeats; i++) {
        countSeats[i] = i + 1;
    }
    //распаковываем массив в option
    const arrSeat = countSeats.map((n) => 
        <option>{n}</option>
    )
    //обработка языка
    switch (lang) {
        case "ru":
            dataCurrPage[0] = data.dataPageRU[10].count;
            break;
        case "en":
            dataCurrPage[0] = data.dataPageEN[10].count;
            break;
        case "by":
            dataCurrPage[0] = data.dataPageBY[10].count;
            break;
        default:
            break;
    }
    return(
        <>
            <label htmlFor="inputCount">{dataCurrPage[0]}</label>
            <select className="inputCount" 
                name="inputCount" 
                id="inputCount">
                {arrSeat}
            </select>
        </>
    );
}

export default InputCount;