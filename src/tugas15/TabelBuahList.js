import React, {useContext, useEffect, useState} from "react"
import {TabelBuahContext} from "./TabelBuahContext"
import axios from 'axios';
import TabelBuahForm from "./TabelBuahForm"

const TabelBuahList = () =>{
  const [dataHargaBuah, setDataHargaBuah] = useContext(TabelBuahContext)
  const [input, setInput] = useContext(TabelBuahContext)
  const [statusForm, setStatusForm] = useContext(TabelBuahContext)
  const [selectId, setSelectedId] = useContext(TabelBuahContext)
    useEffect(() =>{
        if(dataHargaBuah === null){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
                .then(res => {
                    setDataHargaBuah(res.data.map(el => {return {id:el.id, name:el.name, price:el.price, weight:el.weight }}))
                })
        }
    },[dataHargaBuah])

    const handleDelete = (event) => {
        let id = Number(event.target.value)
        let newDataBuah = dataHargaBuah.filter(el => el.id !== id)
    
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
            .then(res => {
                console.log(res)
            })
        setDataHargaBuah([...newDataBuah])
    }
    
    const handleEdit = (event) => {
        let id = Number(event.target.value)
        console.log(dataHargaBuah)
        let buah = dataHargaBuah.find(x => x.id === id)
        setInput({name: buah.name, price: buah.price, weight: buah.weight})
        setSelectedId(id)
        setStatusForm("edit")
    }

    return ( 
        <>
        <h1>Tabel Harga Buah</h1>
        <table style={{border: "1px solid #000", width: "100%"}}>
        <thead>
            <tr style={{backgroundColor: "#ccc", padding: "10px"}}>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {dataHargaBuah !== null && dataHargaBuah.map((val,index) =>{
                return(
            <tr style={{backgroundColor: "#F06464", padding: "10px"}}>
                <td>{val.name}</td>
                <td>{val.price}</td>
                <td>{val.weight/1000} kg</td>
                <td>
                <button onClick={handleEdit} value={val.id}>Ubah</button>
                <button onClick={handleDelete} value={val.id}>Hapus</button>
                </td>
            </tr>
                )
            })}
        </tbody>
        </table>
        </>
    )
}
        

export default TabelBuahList