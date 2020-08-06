import React , {useState, useEffect} from 'react';
import axios from 'axios';

const Listx = () => {
	const [dataHargaBuah, setDataHargaBuah] = useState(null)
	const [input, setInput] = useState({
		name: "",
		price: "",
		weight: ""
	})
	const [statusForm, setStatusForm] = useState("create")
	const [selectId, setSelectedId] = useState(0)

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

	const handleChange = (event) => {
		const { name, value } = event.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
		}))
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
		<h1>Form Buah</h1>
		<div id="form-content">
		<form onSubmit={handleSubmit}>
			<label> Nama Buah : </label>          
			<input type="text" name='name' value={input.name} onChange={handleChange}/><br/><br/>
			<label>Harga Buah : </label>
			<input type="text" name='price' value ={input.price} onChange={handleChange}/><br/><br/>
			<label>Berat Buah : </label>
			<input type="text" name='weight' value={input.weight} onChange={handleChange}/><br/><br/>
			<button>submit</button>
		</form>
		</div>
		</>
	);
}

export default Listx;