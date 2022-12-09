import React from 'react';
import {useState} from 'react'
import { useSelector } from "react-redux";
import data from '../../Data.json'

function InputEmail() {
    const lang = useSelector((state) => state.languages.langIS)
    //инициализация состаяния Email с помощью useState
    const [email, setEmail] = useState("");
    let dataCurrPage = [
        data.dataPageRU[13].email
    ]
    //обработка языка
    switch (lang) {
        case "ru":
            dataCurrPage[0] = data.dataPageRU[13].email
            break;
        case "en":
            dataCurrPage[0] = data.dataPageEN[13].email
            break;
        case "by":
            dataCurrPage[0] = data.dataPageBY[13].email
            break;
        default:
            break;
    }
    return(
        <div>
            <input className="inputEmail"
            type="email" 
            placeholder={dataCurrPage[0]}
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            />
        </div>
    );
}

export default InputEmail;