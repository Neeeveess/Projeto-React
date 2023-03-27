import React, { useState } from "react";
import JS from './gerarNumeros.js'
import './Mega.css'

function Mega () {

    const [valor, setValor] = useState(1);

    function quandoMudar(e) {
        setValor(e.target.value);
      }

      const valorJSX = JS(valor).map((num) => {
        return (
          <li>
            {num}
          </li>
        );
      });


    return ( 
        <div className="Mega">
          <h1>Mega</h1>
            <input type="number" value={valor} onChange={quandoMudar} />
            <ul>{valorJSX}</ul>
        </div>
     );
}

export default Mega;