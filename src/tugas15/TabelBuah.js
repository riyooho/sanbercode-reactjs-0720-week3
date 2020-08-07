import React from "react"
import {TabelBuahProvider} from "./TabelBuahContext"
import TabelBuahList from "./TabelBuahList"
import TabelBuahForm from "./TabelBuahForm"

const TabelBuahx = () =>{
  return(
    <TabelBuahProvider>
      <TabelBuahList/>
      <TabelBuahForm/>
    </TabelBuahProvider>
  )
}

export default TabelBuahx