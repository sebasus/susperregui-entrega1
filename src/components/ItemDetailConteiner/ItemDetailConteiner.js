import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Producto from "../Productos/Producto";


const ItemDetailContainer = () =>{
    const[detalle, setDetalle] = useState([])
    const {id} = useParams();
    
    useEffect(() =>{
        const promiseProductos = new Promise((resolve) => {
            resolve(Producto)
        });
        promiseProductos.then((res)=>{
            setDetalle(Producto.find(prod.id === id))
        })
    },[]);

    return (<ItemDetail detalle = {detalle}/>)
};

export default ItemDetailContainer;