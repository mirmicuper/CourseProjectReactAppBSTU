import React from 'react';
import {useState} from 'react'
import { useSelector } from "react-redux";
import data from '../../Data.json'

function InputDate() {
    //получаем состояние языка из стора в переменную lang
    const lang = useSelector((state) => state.languages.langIS)
    //инициализируем состяния через useState
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(2022);
    //инициализируем массив состояний
    let dataCurrPage = [
        data.dataPageRU[9].day,
        data.dataPageRU[9].month,
        data.dataPageRU[9].year,
    ]
    //инициализируем переменные для арифметических вычислений
    let numAllDay = 0;
    let numMonth = 12;
    let numYear = 2024;
    //арифметические вычисления:
    //на нечетные месяцы года 
    if(month % 2 != 0) {
        numAllDay = 31;
    }
    //на четный месяцы года кроме февраля
    if (month % 2 == 0 && month != 2) {
        numAllDay = 30;
    }
    //для февраля 
    if (month == 2) {
        //на високосный год
        if (year % 2 == 0) {
            numAllDay = 28;
        }
        //на обычный год
        else{
            numAllDay = 29;
        }
    }
    //инициализация массивов для хранения данных в select
    const arrDay = []
    const arrMonth = []
    const arrYear = []
    //заполнение массивов
    for(let i = 0; i < numAllDay; i++) {
        arrDay[i] = i + 1;
    }
    for(let i = 0; i < numMonth; i++) {
        arrMonth[i] = i + 1;
    }
    for(let i = 2022; i < numYear; i++) {
        arrYear[i] = i;
    }
    //распаковка с помощью .map()
    const tempDays = arrDay.map((d) => 
        <option value={d}>{d}</option>
    )
    const tempMonths = arrMonth.map((m) => 
        <option value={m}>{m}</option>
    )
    const tempYears = arrYear.map((y) => 
        <option value={y}>{y}</option>
    )
    //обработка языка
    switch (lang) {
        case "ru":
            dataCurrPage[0] = data.dataPageRU[9].day
            dataCurrPage[1] = data.dataPageRU[9].month
            dataCurrPage[2] = data.dataPageRU[9].year
            break;
        case "en":
            dataCurrPage[0] = data.dataPageEN[9].day
            dataCurrPage[1] = data.dataPageEN[9].month
            dataCurrPage[2] = data.dataPageEN[9].year
            break;
        case "by":
            dataCurrPage[0] = data.dataPageBY[9].day
            dataCurrPage[1] = data.dataPageBY[9].month
            dataCurrPage[2] = data.dataPageBY[9].year
            break;
        default:
            break;
    }
    return(
        <>
            <div className="boxForInputs">
                <label htmlFor="inputDay">{dataCurrPage[0]}</label>
                <select className="date" name="inputDay" id="inputDay" onChange={
                    (e) => {
                        setDay(e.target.value)
                    }}>
                {tempDays}
                </select>
            </div>
            <div className="boxForInputs">
                <label htmlFor="inputMonth">{dataCurrPage[1]}</label>
                <select className="date" 
                    name="inputMonth" 
                    id="inputMonth" 
                    onChange={(e) => {
                        setMonth(e.target.value)
                    }}>
                    {tempMonths}
                </select>
            </div>
            <div className="boxForInputs">
                <label htmlFor="inputYear">{dataCurrPage[2]}</label>
                <select className="date" 
                    name="inputYear"
                    id="inputYear" 
                    onChange={(e) => {
                        setYear(e.target.value)
                    }}>
                    {tempYears}
                </select>
            </div>
        </>
    );
}

export default InputDate;