import '../Style/filterStyle.css'
import data from '../Data.json'
import React from 'react';
import { useSelector } from 'react-redux'

function Filters({onChange}) {
    //инициализация переменной lang хранящей язык из store
    const lang = useSelector((state) => state.languages.langIS)
    //функция передачи состояния типа сортировки из компонента
    const handleOnChangeSort = (event) => {
        onChange(event.target.value)
    }
    //инициализация состояния dataCurrPage, которое
    //хранит данные из JSON для текущей страницы
    let dataCurrPage = [
        data.dataPageRU[4].filterLoc, 
        data.dataPageRU[4].filterPr, 
        data.dataPageRU[4].filterNm
    ];
    //обработка языка
    switch (lang) {
        case "en":
            dataCurrPage[0] = data.dataPageEN[4].filterLoc;
            dataCurrPage[1] = data.dataPageEN[4].filterPr;
            dataCurrPage[2] = data.dataPageEN[4].filterNm;
            break;
        case "ru":
            dataCurrPage[0] = data.dataPageRU[4].filterLoc;
            dataCurrPage[1] = data.dataPageRU[4].filterPr;
            dataCurrPage[2] = data.dataPageRU[4].filterNm;
            break;
        case "by":
            dataCurrPage[0] = data.dataPageBY[4].filterLoc;
            dataCurrPage[1] = data.dataPageBY[4].filterPr;
            dataCurrPage[2] = data.dataPageBY[4].filterNm;
            break;
        default:
            break;
    }
    return(
        <div className="filter">
            <select name="sortBy" className="ADSimple" id="filterSortBy" onChange={handleOnChangeSort}>  
                <option value="filterLocation">{dataCurrPage[0]}</option>
                <option value="filterPrice">{dataCurrPage[1]}</option>
                <option value="filterName" selected="selected">{dataCurrPage[2]}</option>
            </select>
        </div>
    );
}
export default Filters;