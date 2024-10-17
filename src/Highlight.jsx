import React, { useEffect, useState } from 'react'
import Header from './Header'
import { InputText } from 'primereact/inputtext';
import {Button} from 'primereact/button';

export default function Highlight() {
    let [value,setValue] = useState('')
    let [storeData,setStoreData] = useState([]);

    useEffect(() => {
        // searchData();
    },[])

    let searchData = async() => {
        await fetch(`https://www.omdbapi.com/?s=${value}&page=2&apikey=9c13a4dc`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res.Search);
            setStoreData(res.Search);
        })
    }

    let list = storeData.map((item,i) => {
        return(
            <div key={i}>
                <h3 >{item.Title}</h3> 
                {/* <img src={item.Poster} alt='Not found'></img> */}
                {
                    value === '' ? <h2>Please enter movie name</h2> : <img src={item.Poster} alt='Not found'></img>
                }
            </div>
        )
    })

  return (
    <>
        <Header></Header>
        <h4>Highlight</h4>
        <div style={{display:'flex', margin:'2rem', gap:'1rem'}}>
            <InputText style={{flexBasis:'60%'}} value={value} onChange={(e) => setValue(e.target.value)}></InputText>
            <Button style={{flexBasis:'40%'}} label="Submit" onClick={searchData}></Button>
        </div>

        <div className='card-container'>
            {list}
        </div>
    </>
  )
}
