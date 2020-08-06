import React from 'react';
import './App.css';
import TabelBuah from './tugas11/TabelBuah.js';
import ClockCount from './tugas12/ClockCount.js';
import Listx from './tugas14/Listx.js';

function App() {
  return (
  	<div align="center">
  	<h1>Tabel Harga Buah</h1>
  	<TabelBuah/>
  	<ClockCount startCount = {100}/>
	<Listx/>
    </div>
  );
}


export default App;