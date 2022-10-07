import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import Producto from "../Productos/Producto";


const ItemListContainer = () => {
    const [info, setInfo] = useState([]);

useEffect(() => {
    const getInfo = new Promise (resolve =>{
        setTimeout(() => {
            resolve (Producto)
        }, 3000)
    });
    getInfo.then(res => setInfo(res));
    
    }, [])

    return(
        <ItemList info={info}/>
        );
}

export default ItemListContainer;