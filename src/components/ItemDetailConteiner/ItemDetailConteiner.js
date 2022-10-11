import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Producto from "../Productos/Producto";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () =>{
    const[detalle, setDetalle] = useState([])
    const {idProducto} = useParams();
    
    useEffect(() =>{
        const promiseProductos = new Promise((resolve) => {
            resolve(Producto)
        });
        promiseProductos.then((res)=>{
            setDetalle(Producto.find(res.id === idProducto))
        })
    },[]);

    return (<ItemDetail detalle = {detalle}/>)
};

export default ItemDetailContainer;