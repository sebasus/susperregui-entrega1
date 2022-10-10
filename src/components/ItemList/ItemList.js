import Item from "../Item/Item";

const ItemList = ({info}) => {
    return (
        info.map(Producto => <Item  item={Producto}/>)
    );}


export default ItemList;