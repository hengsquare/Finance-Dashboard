import { useContext, useEffect, useState } from "react";
import "./CurrencyStyling.css";
import Stocklist from "./Stocklist"
import FinanceContext from "../contexts/FinanceContext.js";

function FinanceDashboard() {

  //  const [stockSymbol, setstockSymbol] = useState("IBM");
  //  const [quantity, setQuantity] = useState("");
  //  const [purchasePrice, setPurchasePrice] = useState("");
  const { stockSymbol, setstockSymbol, quantity, setQuantity, purchasePrice, setPurchasePrice, price, setPrice } = useContext(FinanceContext);
  // const [price, setPrice] = useState("");

  useEffect(() => {
    fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="
      +
      stockSymbol
      +
      "&apikey=20GHGWMHJKVQL224")
      .then((res) => res.json())
      .then((data) => setPrice(data["Global Quote"]["03. high"]));
  }, []);

   console.log(price)


  function handlestockSymbolChange(event) {
    setstockSymbol(event.target.value);
  }
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  function handlePurchasePriceChange(event) {
    setPurchasePrice(event.target.value);
  }
  function handlePrice(event) {
    setPrice(event.target.value);
  }

  return (
    <>
      <div className="currency-converter-container">
        <input
          value={stockSymbol}
          placeholder="Stock Symbol"
          className="converter-input"
          onChange={handlestockSymbolChange}
        ></input>
        <input
          value={quantity}
          placeholder="Quantity"
          className="converter-input"
          onChange={handleQuantityChange}
        ></input>
        <input
          value={purchasePrice}
          placeholder="Purchase Price"
          className="converter-input"
          onChange={handlePurchasePriceChange}
        ></input>
        <button className="addButton"
          onClick="Calculate()"
        >
          Click Me
        </button>
      </div>
      <br></br>
      <Stocklist />
    </>
  );


}
export default FinanceDashboard;