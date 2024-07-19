import { useState } from "react";
import './App.css';
import FinanceDashboard from "./components/FinanceDashboard";
import Stocklist from "./components/Stocklist";
import FinanceContext from "./contexts/FinanceContext";

function App() {

  const [stockSymbol, setstockSymbol] = useState("IBM");
  const [quantity, setQuantity] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [price, setPrice] = useState("");

  return (
    <>
        <FinanceContext.Provider value = {{
      stockSymbol, setstockSymbol, quantity, setQuantity, purchasePrice, setPurchasePrice, price, setPrice
      }}>
      <h1>Finance Dashboard</h1>
      {<FinanceDashboard />}
      </FinanceContext.Provider>
    </>
  )
}

export default App;