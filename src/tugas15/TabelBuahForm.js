import React, {useContext, useState} from "react"
import {TabelBuahContext} from "./TabelBuahContext"
import axios from 'axios';

const TabelBuahForm = () =>{
    const [dataHargaBuah, setDataHargaBuah] = useContext(TabelBuahContext)
    const [input, setInput] = useContext(TabelBuahContext)
    const [statusForm, setStatusForm] = useContext(TabelBuahContext)
    const [selectId, setSelectedId] = useContext(TabelBuahContext)

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

const handleChange = (event) => {
    let typeOfInput = event.target.name

    switch (typeOfInput){
      case "name":
      {
        setInput({...input, name: event.target.value});
        break
      }
      case "price":
      {
        setInput({...input, price: event.target.value});
        break
      }
      case "weight":
      {
        setInput({...input, weight: event.target.value});
          break
      }
    default:
      {break;}
    }
}


const handleSubmit = (event) => {
    event.preventDefault()
    if(input['name'].replace(/\s/g, '') !== "" && input['price'].toString().replace(/\s/g, '') !== "" && input['weight'].toString().replace(/\s/g, '') !== "" ){
        if(statusForm === "create"){
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, input)
                .then(res => {
                    console.log(res.data)
                    setDataHargaBuah([...dataHargaBuah, {name: res.data.name, price: res.data.price, weight: res.data.weight}])
                })


        }else if(statusForm === "edit"){
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectId}`, input)
                .then(res => {
                    let buah = dataHargaBuah.find(el => el.id === selectId)
                    buah['name'] = input.name
                    buah['price'] = input.price
                    buah['weight'] = input.weight
                    setDataHargaBuah([...dataHargaBuah])
                })
        }

        setStatusForm("create")
        setSelectedId(0)
        setInput({
            name: "",
            price: "",
            weight: ""
        })
    }
}

return(
        <>
        <h1>Form Buah</h1>
            <div id="form-content">
            <form onSubmit={handleSubmit}>
                <label>Buah : </label>          
                <input type="text" name='name'  onChange={handleChange}/><br/>
                <label>Harga : </label>
                <input type="number" name='price'  onChange={handleChange}/><br/>
                <label>Berat : </label>
                <input type="number" name='weight'  onChange={handleChange}/><br/>
                <button>submit</button>
            </form>
            </div>
        </>
    )
}

export default TabelBuahForm