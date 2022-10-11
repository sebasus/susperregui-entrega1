import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProduct from "../Productos/producto";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () =>{
    const[detalle, setDetalle] = useState({});
    const {productId} = useParams();
    console.log(productId);
    useEffect(() =>{
        getProduct(productId).then((res)=>{
            setDetalle(res)
        })
    },[productId]);
        return (<ItemDetail info = {detalle}/>)
    };

export default ItemDetailContainer;