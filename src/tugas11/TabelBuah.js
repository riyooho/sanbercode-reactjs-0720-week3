import React from 'react';

class NamaTabel extends React.Component {
  render() {
    return <>{this.props.nama}</>;
  }
}

class HargaTabel extends React.Component {
  render() {
    return <>{this.props.harga}</>;
  }
}

class BeratTabel extends React.Component {
  render() {
    return <>{this.props.berat / 1000} kg</>;
  }
}

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]

class TabelBuah extends React.Component {
  render() {
    return (
      <>
      	<table style={{border: "1px solid #000", width: "100%"}}>
          	<tr style={{backgroundColor: "#ccc", padding: "10px"}}>
          		<th>Nama</th>
          		<th>Harga</th>
          		<th>Berat</th>
          	</tr>
	          	
	    {dataHargaBuah.map(d=> {
          return (
          	<>
          		<tr style={{backgroundColor: "#F06464", padding: "10px"}}>
	          		<td><NamaTabel nama={d.nama}/></td>
	          		<td><HargaTabel harga={d.harga}/></td>
	          		<td><BeratTabel berat={d.berat}/></td>
	      		</tr>
	      	</>
	          		)
	          	})}
	          	
	          </table>
      </>
    )
  }
}

export default TabelBuah