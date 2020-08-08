import React, {useContext, useState} from "react"
import {TabelBuahContext} from "./TabelBuahContext"
import axios from 'axios';

const TabelBuahForm = () =>{
    const [dataHargaBuah, setDataHargaBuah] = useContext(TabelBuahContext)
    const [input, setInput] = useContext(TabelBuahContext)
    const [statusForm, setStatusForm] = useContext(TabelBuahContext)
    const [selectId, setSelectedId] = useContext(TabelBuahContext)


  const handleEdit = (event) =>{
    let idDataBuah = parseInt(event.target.value)
    let dataBuah = dataHargaBuah.find(x=> x.id === idDataBuah)
    setInput({name: dataBuah.name, price: dataBuah.price, weight: dataBuah.weight})
    setSelectedId(idDataBuah)
    setStatusForm("edit")
  }

  const handleChange = (event) =>{
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

  const handleSubmit = (event) =>{
    // menahan submit
    event.preventDefault()

    let name = input.name
    let price = input.price.toString()
    

    if (name.replace(/\s/g,'') !== "" && price.replace(/\s/g,'') !== ""){      
      if (statusForm === "create"){        
        axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name: input.name, price: input.price, weight: input.weight})
        .then(res => {
            setDataHargaBuah([
              ...dataHargaBuah, 
              { id: res.data.id, 
                name: input.name, 
                price: input.price,
                weight: input.weight
              }])
        })
      }else if(statusForm === "edit"){
        axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectId}`, {name: input.name, price: input.price, weight: input.weight})
        .then(() => {
            let dataBuah = dataHargaBuah.find(el=> el.id === selectId)
            dataBuah.name = input.name
            dataBuah.price = input.price
            dataBuah.weight = input.weight
            setDataHargaBuah([...dataHargaBuah])
        })
      }
      
      setStatusForm("create")
      setSelectedId(0)
      setInput({name: "", price: "", weight: 0})
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