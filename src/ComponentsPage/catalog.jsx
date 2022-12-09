import { useState } from 'react'
import React from 'react';
import CatalogItem from '../Components/catalogItem.jsx'
import Filters from '../ComponentsPage/filters.jsx'
import FilterAD from '../ComponentsPage/filterAD.jsx'
import CatalogJSON from '../Catalog.json'
import '../Style/catalog.css'
import { useSelector } from 'react-redux'


export default function Catalog() {
    //инициализация переменной lang хранящей язык из store
    const lang = useSelector((state) => state.languages.langIS)
    //инициализация состояния типа фильтра default => "filterLocation"
    const [sortType, setSortType] = useState("filterLocation");
    //инициализация состояния порядок фильтра default => "asc"
    const [sortBy, setSortBy] = useState("asc");
    //массив изображений
    const arrImg = [
        require('../images/zamok.jpeg'),
        require('../images/kostel.jpeg'),
        require('../images/carch.jpeg'),
        require('../images/lidbeerbar.jpeg'),
        require('../images/park.jpeg'),
    ]
    //инициализация массива массивов с данными 
    const  [arrCatalogItems, setCatalogItem] = useState([
        [
            arrImg[0], 
            CatalogJSON.CatalogRU[0].Name,
            CatalogJSON.CatalogRU[0].Location, 
            CatalogJSON.CatalogRU[0].NumFeedBack, 
            CatalogJSON.CatalogRU[0].Price, 
            CatalogJSON.CatalogRU[0].Stars, 
            CatalogJSON.CatalogRU[0].Discription, 
            CatalogJSON.CatalogRU[0].Time, 
            CatalogJSON.CatalogRU[0].id
        ],
        [
            arrImg[1], 
            CatalogJSON.CatalogRU[1].Name, 
            CatalogJSON.CatalogRU[1].Location, 
            CatalogJSON.CatalogRU[1].NumFeedBack, 
            CatalogJSON.CatalogRU[1].Price, 
            CatalogJSON.CatalogRU[1].Stars, 
            CatalogJSON.CatalogRU[1].Discription, 
            CatalogJSON.CatalogRU[1].Time, 
            CatalogJSON.CatalogRU[1].id
        ],
        [
            arrImg[2], 
            CatalogJSON.CatalogRU[2].Name, 
            CatalogJSON.CatalogRU[2].Location, 
            CatalogJSON.CatalogRU[2].NumFeedBack, 
            CatalogJSON.CatalogRU[2].Price, 
            CatalogJSON.CatalogRU[2].Stars, 
            CatalogJSON.CatalogRU[2].Discription, 
            CatalogJSON.CatalogRU[2].Time, 
            CatalogJSON.CatalogRU[2].id
        ],
        [
            arrImg[3], 
            CatalogJSON.CatalogRU[3].Name, 
            CatalogJSON.CatalogRU[3].Location, 
            CatalogJSON.CatalogRU[3].NumFeedBack, 
            CatalogJSON.CatalogRU[3].Price, 
            CatalogJSON.CatalogRU[3].Stars, 
            CatalogJSON.CatalogRU[3].Discription, 
            CatalogJSON.CatalogRU[3].Time, 
            CatalogJSON.CatalogRU[3].id
        ],
        [
            arrImg[4],
            CatalogJSON.CatalogRU[4].Name, 
            CatalogJSON.CatalogRU[4].Location, 
            CatalogJSON.CatalogRU[4].NumFeedBack, 
            CatalogJSON.CatalogRU[4].Price, 
            CatalogJSON.CatalogRU[4].Stars, 
            CatalogJSON.CatalogRU[4].Discription, 
            CatalogJSON.CatalogRU[4].Time, 
            CatalogJSON.CatalogRU[4].id
        ]
    ])
    //инициализация состояния dataCurrPage, которое
    //хранит данные из JSON для текущей страницы
    const [dataCurrPage, SetDataCurrPage] = useState([
        CatalogJSON.CatalogRU[7].tours
    ]);
    //функция получения типа сортировки из компонента
    const handleSortType = (sortType) => {
        setSortType(sortType);
        sortFilter(sortType, sortBy, arrCatalogItems);
    }
    //функция получения порядка сортировки из компонента
    const handleSortBy = (sortBy) => {
        setSortBy(sortBy);
        sortFilter(sortType, sortBy, arrCatalogItems);
    }
    //функция сортироки
    const sortFilter = (sortType, sortBy, arrCatalogItems) => {
        let bin = [];
        //default возрастание
        console.log(sortBy)
        switch (sortBy) {
            case "asc":
                console.log(sortType)
                switch (sortType) {
                    case "filterLocation":
                        for(let i = 0; i < 5; i++) {
                            for(let j = 0; j < 5; j++) {
                                if (arrCatalogItems[i][2] < arrCatalogItems[j][2]) {
                                        bin = arrCatalogItems[i];
                                        arrCatalogItems[i] = arrCatalogItems[j];
                                        arrCatalogItems[j] = bin;
                                  };
                            }
                        }
                        break;
                    case "filterPrice":
                        for(let i = 0; i < 5; i++) {
                            for(let j = 0; j < 5; j++) {
                                if (parseInt(arrCatalogItems[i][4]) < parseInt(arrCatalogItems[j][4])) {
                                        bin = arrCatalogItems[i];
                                        arrCatalogItems[i] = arrCatalogItems[j];
                                        arrCatalogItems[j] = bin;
                                    };
                            }
                        }
                        break;
                    case "filterName":
                        for(let i = 0; i < 5; i++) {
                            for(let j = 0; j < 5; j++) {
                                if (arrCatalogItems[i][1] < arrCatalogItems[j][1]) {
                                        bin = arrCatalogItems[i];
                                        arrCatalogItems[i] = arrCatalogItems[j];
                                        arrCatalogItems[j] = bin;
                                    };
                            }
                        }
                        break;
                    default:
                        break;
                }
                break;
            case "desc":
                switch (sortType) {
                    case "filterLocation":
                        for(let i = 0; i < 5; i++) {
                            for(let j = 0; j < 5; j++) {
                                if (arrCatalogItems[i][2] > arrCatalogItems[j][2]) {
                                        bin = arrCatalogItems[i];
                                        arrCatalogItems[i] = arrCatalogItems[j];
                                        arrCatalogItems[j] = bin;
                                    };
                            }
                        }
                    break;
                    case "filterPrice":
                        for(let i = 0; i < 5; i++) {
                            for(let j = 0; j < 5; j++) {
                                if (parseInt(arrCatalogItems[i][4]) > parseInt(arrCatalogItems[j][4])) {
                                        bin = arrCatalogItems[i];
                                        arrCatalogItems[i] = arrCatalogItems[j];
                                        arrCatalogItems[j] = bin;
                                    };
                            }
                        }
                        break;
                    case "filterName":
                        for(let i = 0; i < 5; i++) {
                            for(let j = 0; j < 5; j++) {
                                if (arrCatalogItems[i][1] > arrCatalogItems[j][1]) {
                                        bin = arrCatalogItems[i];
                                        arrCatalogItems[i] = arrCatalogItems[j];
                                        arrCatalogItems[j] = bin;
                                    };
                            }
                        }
                    break;
                default:
                    break;
                }
        default:
            break;
        }
    }
    //обработка языка
    switch (lang) {
        case "en":
            dataCurrPage[0] = CatalogJSON.CatalogEN[7].tours;
            break;
        case "ru":
            dataCurrPage[0] = CatalogJSON.CatalogRU[7].tours;
            break;
        case "by":
            dataCurrPage[0] = CatalogJSON.CatalogBY[7].tours;
            break;
        default:
            break;
    }
    return(
        <div id="catalog">
            <div className="h2">
                <h2>{dataCurrPage[0]}</h2>
            </div>
            <div className="filtr">
                <FilterAD onChange={handleSortBy}/>
                <Filters onChange={handleSortType}/>
            </div>
            <div className="CatalogItems">
            <CatalogItem
                img={arrCatalogItems[0][0]} 
                name={arrCatalogItems[0][1]} 
                price={arrCatalogItems[0][4]}
                time={arrCatalogItems[0][7]}
                stars={arrCatalogItems[0][5]}
                id={arrCatalogItems[0][8]}
            />
            <CatalogItem
                img={arrCatalogItems[1][0]} 
                name={arrCatalogItems[1][1]} 
                price={arrCatalogItems[1][4]}
                time={arrCatalogItems[1][7]}
                stars={arrCatalogItems[1][5]}
                id={arrCatalogItems[1][8]}
            />
            <CatalogItem
                img={arrCatalogItems[2][0]} 
                name={arrCatalogItems[2][1]} 
                price={arrCatalogItems[2][4]}
                time={arrCatalogItems[2][7]}
                stars={arrCatalogItems[2][5]}
                id={arrCatalogItems[2][8]}
            />
            <CatalogItem
                img={arrCatalogItems[3][0]} 
                name={arrCatalogItems[3][1]} 
                price={arrCatalogItems[3][4]}
                time={arrCatalogItems[3][7]}
                stars={arrCatalogItems[3][5]}
                id={arrCatalogItems[3][8]}
            />
            <CatalogItem
                img={arrCatalogItems[4][0]} 
                name={arrCatalogItems[4][1]} 
                price={arrCatalogItems[4][4]}
                time={arrCatalogItems[4][7]}
                stars={arrCatalogItems[4][5]}
                id={arrCatalogItems[4][8]}
            />
            </div>
        </div>
    );
}


