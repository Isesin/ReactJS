import "./ItemCount.css"
import React, { useState } from "react";



const ItemCount = (initial, stock, onAdd) => {
    stock = 5;
    initial = 1;
    const [initial, onAdd] = useState(1);
    const onAdd = (initial<=4) {
        initial+1;
    } 


    function onAdd () => {
        if (initial <=5) {
            initial+=1;
        }
        else {
            false
        }
        
 
    function takeAway () {
        if (initial >1) {
            initial-=1;
        }
        else {
            false
        }
        
    };
    
    
    

  return( 
  <div className='ItemCount'>
    <button  onClick={() => setCounter(counter - 1)}>Take away item</button>
    <p>{initial}</p>
    <button  onClick={this.onAdd}> Add item</button>
  </div>
  );
}

export default ItemCount;






