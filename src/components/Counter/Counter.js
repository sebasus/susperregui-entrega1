import { useState } from 'react';



const Counter = ({stock}) => {
  const [Contador, setcontador] = useState(0);

  const Sumar = () => {
    setcontador(Contador + 1);   
  };
  const Restar = () =>{
    setcontador(Contador - 1)

  } 

  return (

    <div>
      <button disabled={Contador <= 1} onClick={Restar}>-</button>
        <span>{Contador}</span>
      <button disabled={Contador >= stock} onClick={Sumar}>+</button>  
      <div>
        < button disabled={stock <= 0} >Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Counter;
