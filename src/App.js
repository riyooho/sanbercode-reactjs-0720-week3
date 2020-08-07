import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import TabelBuah from './tugas11/TabelBuah.js';
import ClockCount from './tugas12/ClockCount.js';
import Lists from './tugas13/Lists.js';
import Listx from './tugas14/Listx.js';
import TabelBuahx from './tugas15/TabelBuah.js';
import Routes from './tugas15/Routes.js'

function App() {
  return (
	<div>
		<Router>
			<Routes/>
		</Router>
	</div>
  	// <div align="center">
  	// <h1>Tabel Harga Buah</h1>
  	// <TabelBuah/>
  	// <ClockCount startCount = {100}/>
	// <Listx/>
    // </div>
  );
} 


export default App;