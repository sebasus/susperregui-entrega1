import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Producto from "../Productos/Producto";
import { useParams } from "react-router-dom";
//import { Link } from "react-router-dom";

const ItemListContainer = () => {
    const [info, setInfo] = useState([]);
    const{cat} = useParams ();
    
    
    useEffect(() => {
        const promiseProductos = new Promise (resolve =>{
            setTimeout(() => {
                resolve (Producto)
            }, 2000)
        });
        promiseProductos.then((res)=>{
            if (!cat) {
                setInfo(res);
            } else {
                setInfo(Producto.filter((item)=>item.cat == {cat}));  
            }
        })
    }, [cat]);

    return(
        <ItemList info={info}/>
        );
}

export default ItemListContainer;