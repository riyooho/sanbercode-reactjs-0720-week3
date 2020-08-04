import React from 'react';
import './App.css';
import TabelBuah from './tugas11/TabelBuah.js';
import ClockCount from './tugas12/ClockCount.js';

function App() {
  return (
  	<div align="center">
      <h1>Tabel Harga Buah</h1>
      <TabelBuah/>
	  <ClockCount startCount = {101}/>      
    </div>
  );
}


export default App;