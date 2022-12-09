import React from 'react';
import '../Style/filterStyle.css'
import data from '../Data.json'
import { useSelector } from 'react-redux'

export default function FilterAD({onChange}) {
    //инициализация переменной lang хранящей язык из store
    const lang = useSelector((state) => state.languages.langIS)
    //функция передачи состояния порядка сортировки из компонента
    const handleOnChangeSortBy = (event) => {
        onChange(event.target.value)
    }
    //инициализация состояния dataCurrPage, которое
    //хранит данные из JSON для текущей страницы
    let dataCurrPage = [
        data.dataPageRU[5].asc, 
        data.dataPageRU[5].desc
    ];
    //обработка языка
    switch (lang) {
        case "en":
            dataCurrPage[0] = data.dataPageEN[5].asc;
            dataCurrPage[1] = data.dataPageEN[5].desc;
            break;
        case "ru":
            dataCurrPage[0] = data.dataPageRU[5].asc;
            dataCurrPage[1] = data.dataPageRU[5].desc;
            break;
        case "by":
            dataCurrPage[0] = data.dataPageBY[5].asc;
            dataCurrPage[1] = data.dataPageBY[5].desc;
            break;
        default:
            break;
    }
    return(
        <div className="filter">
            <select name="sortByAD" className="AD" id="filterSortByAD" onChange={handleOnChangeSortBy}>
                <option value="asc" selected="selected">{dataCurrPage[0]}</option>
                <option value="desc">{dataCurrPage[1]}</option>
            </select>
        </div>
    );
}