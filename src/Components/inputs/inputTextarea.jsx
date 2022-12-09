import React from 'react'
import {useState} from 'react'
import { useSelector } from "react-redux";
import data from '../../Data.json'

function InputTextArea() {
    const lang = useSelector((state) => state.languages.langIS)
    //инициализация состаяния Textarea с помощью useState
    const [textArea, setTextArea] = useState("")
    let dataCurrPage = [
        data.dataPageRU[14].textArea
    ]
    //обработка языка
    switch (lang) {
        case "ru":
            dataCurrPage[0] = data.dataPageRU[14].textArea;
            break;
        case "en":
            dataCurrPage[0] = data.dataPageEN[14].textArea;
            break;
        case "by":
            dataCurrPage[0] = data.dataPageBY[14].textArea;
            break;
        default:
            break;
    }
    return(
        <div>
            <textarea className="textArea"
             name="textA" 
             id="textA" 
             cols="30" 
             rows="10"
             placeholder={dataCurrPage[0]}
             onChange={(e) => {
                 setTextArea(e.target.value)
             }}>
            </textarea>
        </div>
    );
}

export default InputTextArea;