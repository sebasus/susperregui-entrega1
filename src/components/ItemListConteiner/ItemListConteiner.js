import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Producto from "../Productos/producto";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [info, setInfo] = useState([]);
    const{categoryId} = useParams ();
    
    
    useEffect(() => {
        const promiseProductos = new Promise (resolve =>{
            setTimeout(() => {
                resolve (Producto)
            }, 2000)
        });
        promiseProductos.then((res)=>{
            if (!categoryId) {
                setInfo(res);
            } else {
                setInfo(Producto.filter((item)=>item.cat === categoryId));  
            }
        })
    }, [categoryId]);

    return(
        <ItemList info={info}/>
        );
}

export default ItemListContainer;