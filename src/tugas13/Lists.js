import React, {Component} from "react"

class Lists extends Component {
  constructor(props){
    super(props)
    this.state ={
      daftar : [
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}],
      input :{
        nama: "",
        harga: "",
        berat: ""
      },
      indexOfForm: -1
    }
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this); 
    }
  
    handleChange(event){
    let input = {...this.state.input}
    input[event.target.name] = event.target.value
    this.setState({
      input
    });
    }
  
    handleSubmit(event){
    event.preventDefault()

    let input = this.state.input
    if(input['nama'].replace(/\s/g, '') !== "" && input['harga'].toString().replace(/\s/g, '') !== "" && input['berat'].toString().replace(/\s/g, '') !== "" ){
      let xdaftar = this.state.daftar
      let index = this.state.indexOfForm
      console.log(index)
      if (index === -1){
        xdaftar = [...xdaftar, input]
      }else{
        xdaftar[index] = input
      }
      this.setState({
        daftar: xdaftar,
        input :{
          nama:"",
          harga: "",
          berat: ""
        },
        indexOfForm: -1
      })
    }
    }

    handleEdit(event){
    let index = event.target.value
    let buah = this.state.daftar[index]
    this.setState({
      input :{
        nama: buah.nama,
        harga: buah.harga,
        berat: buah.berat       
      }, 
      indexOfForm: index
    })
    }
  
    handleDelete(event){
    let index = event.target.value
    let xdaftar = this.state.daftar
    let edaftar = xdaftar[this.state.indexOfForm]
    xdaftar.splice(index, 1)
  
    if (edaftar !== undefined){
      var newIndex = xdaftar.findIndex((val) => val === edaftar)
      this.setState({daftar: xdaftar, indexOfForm: newIndex})
    }else{
      this.setState({daftar: xdaftar})
    }
    }

  render(){
    return(
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
              {
                this.state.daftar.map((val, index)=>{
                  return(                    
                    <tr style={{backgroundColor: "#F06464", padding: "10px"}}>
                      <td>{val.nama}</td>
                      <td>{val.harga}</td>
                      <td>{val.berat/1000} kg</td>
                      <td>
                      <button onClick={this.handleEdit} value={index}>Ubah</button>
                      <button onClick={this.handleDelete} value={index}>Hapus</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        {/* Form */}
        <h1>Form Penambahan Buah</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Nama: </label>
          <input type="text" name="nama" id="form" value={this.state.input.nama} onChange={this.handleChange}/><br/>
          <label>Harga: </label>
          <input type="text" name="harga" id="form" value={this.state.input.harga} onChange={this.handleChange}/><br/>          
          <label>Berat: </label>
          <input type="text" name="berat" id="form" value={this.state.input.berat} onChange={this.handleChange}/><br/>
          <button>submit</button>
        </form>
      </>
    )
  }
}

export default Lists