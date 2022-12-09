import React from 'react';
import {useState} from 'react'
import { useSelector } from "react-redux";
import data from '../../Data.json'

function InputPhone() {
    const lang = useSelector((state) => state.languages.langIS)
    //инициализация состаяния Phone с помощью useState
    let dataCurrPage = [
        data.dataPageRU[12].phone
    ]
    //обработка языка
    switch (lang) {
        case "ru":
            dataCurrPage[0] = data.dataPageRU[12].phone;
            break;
        case "en":
            dataCurrPage[0] = data.dataPageEN[12].phone;
            break;
        case "by":
            dataCurrPage[0] = data.dataPageBY[12].phone;
            break;
        default:
            break;
    }
    const [phone, setPhone] = useState("")
    return(
        <div>
            <input className="inputPhone" 
            type="phone" 
            placeholder={dataCurrPage[0]}
            onChange={(e) => {
                setPhone(e.target.value)
            }}/>
        </div>
    );
}

export default InputPhone;