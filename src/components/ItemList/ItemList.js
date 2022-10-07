import Card from "../Card/Card";

const ItemList = ({info}) => {
    console.log(info);
    return (
        info.map(Producto => <Card  item={Producto}/>)
    );}


export default ItemList;