import { useDispatch } from "react-redux";
import React from 'react';
import '../Style/selectLang.css'
import { selectLanguage } from "../features/LangSlice";
import { useSelector } from "react-redux";

function SelectLang() {
    //инициализация dispatch и смежных переменных
    const dispatch = useDispatch();
    //получаем состояние языка из стора в переменную lang
    const lang = useSelector((state) => state.languages.langIS)
    return(
        <div className="selectLang">
            <select defaultValue={lang} onChange={(e) => {
                dispatch(selectLanguage(e.target.value))
                
            }}>
                <option value="ru">RU</option>
                <option value="en">EN</option>
                <option value="by">BY</option>
            </select>
        </div>
    );
}

export default SelectLang;