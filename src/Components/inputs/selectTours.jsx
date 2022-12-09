import React from "react";
import Select from 'react-select'
import CatalogDataJSON from '../../Catalog.json'
import { useSelector } from "react-redux";
import { useState } from "react";

function SelectTour() {

  const lang = useSelector((state) => state.languages.langIS)

  const item = useSelector((state) => state.items.itemIS)
  //создание options для компонента <Select />
  const optionsRU = [
      { value: CatalogDataJSON.CatalogRU[0].Name, label: CatalogDataJSON.CatalogRU[0].Name },
      { value: CatalogDataJSON.CatalogRU[1].Name, label: CatalogDataJSON.CatalogRU[1].Name },
      { value: CatalogDataJSON.CatalogRU[2].Name, label: CatalogDataJSON.CatalogRU[2].Name },
      { value: CatalogDataJSON.CatalogRU[3].Name, label: CatalogDataJSON.CatalogRU[3].Name },
      { value: CatalogDataJSON.CatalogRU[4].Name, label: CatalogDataJSON.CatalogRU[4].Name }
  ];
  const optionsEN = [
    { value: CatalogDataJSON.CatalogEN[0].Name, label: CatalogDataJSON.CatalogEN[0].Name },
    { value: CatalogDataJSON.CatalogEN[1].Name, label: CatalogDataJSON.CatalogEN[1].Name },
    { value: CatalogDataJSON.CatalogEN[2].Name, label: CatalogDataJSON.CatalogEN[2].Name },
    { value: CatalogDataJSON.CatalogEN[3].Name, label: CatalogDataJSON.CatalogEN[3].Name },
    { value: CatalogDataJSON.CatalogEN[4].Name, label: CatalogDataJSON.CatalogEN[4].Name }
  ];
  const optionsBY = [
      { value: CatalogDataJSON.CatalogBY[0].Name, label: CatalogDataJSON.CatalogBY[0].Name },
      { value: CatalogDataJSON.CatalogBY[1].Name, label: CatalogDataJSON.CatalogBY[1].Name },
      { value: CatalogDataJSON.CatalogBY[2].Name, label: CatalogDataJSON.CatalogBY[2].Name },
      { value: CatalogDataJSON.CatalogBY[3].Name, label: CatalogDataJSON.CatalogBY[3].Name },
      { value: CatalogDataJSON.CatalogBY[4].Name, label: CatalogDataJSON.CatalogBY[4].Name }
  ];

  let options = optionsRU;
  //обработка языка 
  switch (lang) {
    case "ru":
      options = optionsRU
      break;
    case "by":
      options = optionsBY
      break;    
    case "en":
      options = optionsEN
      break;
    default:
      break;
  }
  //создание кастомных стилей для компонента <Select />
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid black',
      color: state.isSelected ? 'black' : 'black',
      backgroundColor: state.isSelected ? '#9C6CEB' : 'white'
    }),
    control: (provided) => ({
      ...provided,
      maxWidth: '250px',
      opacity: '0.7'
    })
  }
  return(
      <div className="selectTourMargin">
        <Select 
            styles={customStyles}
            options={options}
            defaultValue={options[item]}/>
      </div>
  );
}

export default SelectTour;