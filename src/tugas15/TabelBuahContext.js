import React, { useState, createContext } from "react";

export const TabelBuahContext = createContext();

export const TabelBuahProvider = props => {
    const [dataHargaBuah, setDataHargaBuah] = useState(null);
    const [input, setInput] = useState({
      name: "",
      price: "",
      weight: ""
    })
    const [statusForm, setStatusForm] = useState("create")
    const [selectId, setSelectedId] = useState(0)

  return (
    <TabelBuahContext.Provider value={[dataHargaBuah, setDataHargaBuah, input, setInput, statusForm, setStatusForm, selectId, setSelectedId]}>
      {props.children}
    </TabelBuahContext.Provider>
  );
};

export default TabelBuahProvider