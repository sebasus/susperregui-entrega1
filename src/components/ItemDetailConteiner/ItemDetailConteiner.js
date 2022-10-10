/* import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail.js";
import Producto from "../Productos/Producto";

const ItemDetailConteiner = () =>{
    const [cat, setCat] = useState();

    useEffect (() =>{
        const getCat = new Promise((resolve) => {
            resolve(Producto)
        });
        getCat.then(res => setCat(res));

    });

    return(
        <ItemDetail cat={cat}/>
    )
}

export default ItemDetailConteiner; */
