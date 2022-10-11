import Counter from "../Counter/Counter";

const ItemDetail = ({detalle}) =>{
    return (
        <div className="conteiner">
      <div className="row">
        <div className="col-6" >
          <div className="card">
            <div className="card-body">
                <h3 className="card-title">{detalle.title}</h3>
                <img className="card-img" src={detalle.img}  alt=""/>
                <p>{detalle.detail}</p>
                <hr/>
                <p>{detalle.price}</p>
                <Counter/>
              <button>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ItemDetail;