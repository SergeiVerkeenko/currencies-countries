import { useState, useEffect } from 'react'
import style from './DropdownList.module.css'
import axios from 'axios';
import CountryItem from './CountryItem'



function DropdownList() {

  const [countries, setCountries] = useState([])
  const [active, setActive] = useState()


  async function getData() {
    let response = await axios.get('https://www.nbrb.by/API/ExRates/Currencies')
    setCountries(response.data)
  }

  function activeCountry(event) {
    setActive(event.target.textContent)

  }

  useEffect(() => { getData() })

  return (
    <>
      <div >
        <div className={style['choice']}>
          <div >{active}</div>
          <div className={style['wrapper-2']}>
          </div>
        </div>
        <div className={style['select-occupation']}>
          <p >Select Occupation</p>
          <div ></div>
        </div>
        <div onClick={activeCountry} className={style['wrapper']}>
          {countries.map((el) => <CountryItem key={el.Cur_ID} title={el.Cur_Name} abr={el.Cur_Abbreviation} />)}
        </div>
      </div>
    </>
  );
}

export default DropdownList;