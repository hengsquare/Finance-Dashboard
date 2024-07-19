import { useContext, useEffect, useState } from "react";
import FinanceContext from "../contexts/FinanceContext";

function Stocklist() {
    // console.log(props);

    const { stockSymbol, setstockSymbol, quantity, setQuantity, purchasePrice, setPurchasePrice, price, setPrice } = useContext(FinanceContext);

    function Calculate() { 
        
        const profit__loss = document.querySelector(".profit__loss"); 
        const nothing = document.querySelector(".nothing"); 

        profit__loss.innerHTML = ""; 
        nothing.innerHTML = ""; 
        
        if (price > purchasePrice) { 
          const profit = (price*quantity) - (purchasePrice*quantity); 
        
          profit__loss.innerHTML = "Profit : " + profit; 
   
        } 
        if (price < purchasePrice) { 
          const loss = (purchasePrice*quantity) - (price*quantity); 

        
          profit__loss.innerHTML = "Loss : " + loss; 

        } 
        if (price == purchasePrice) { 
          nothing.innerHTML = "No Profit No Loss"; 
        } 
      };


    return (
        <div id="addResults">
            <h2>Stock List</h2>
            <br></br>
            <p>Symbol: {stockSymbol}</p>
            <p>Quantity: {quantity}</p>
            <p>Purchase Price: {purchasePrice}</p>
            <p>Current Price: {price}</p>
            <p>Profit/Loss:</p>     


            <h2 class="profit__loss"></h2> 
            <h2 class="nothing"></h2> 
        </div>
    )

}

export default Stocklist;