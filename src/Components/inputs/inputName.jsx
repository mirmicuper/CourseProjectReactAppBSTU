import React from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";
import data from '../../Data.json'

function InputName() {
    //получаем состояние языка из стора в переменную lang
    const lang = useSelector((state) => state.languages.langIS)
    //инициализация состаяния Name с помощью useState
    let dataCurrPage = [
        data.dataPageRU[11].name
    ]
    const [name,setName] = useState("");
        //обработка языка
        switch (lang) {
            case "ru":
                dataCurrPage[0] = data.dataPageRU[11].name;
                break;
            case "en":
                dataCurrPage[0] = data.dataPageEN[11].name;
                break;
            case "by":
                dataCurrPage[0] = data.dataPageBY[11].name;
                break;
            default:
                break;
        }
    return(
        <div className="inputNameDiv">
            <input className="inputName"
             type="text" 
             placeholder={dataCurrPage[0]}
             onChange={(e) => {
                setName(e.target.value)
             }}/>
        </div>
    );
}

export default InputName;