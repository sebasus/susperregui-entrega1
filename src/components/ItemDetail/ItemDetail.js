import Counter from "../Counter/Counter";

const ItemDetail = () =>{
    return (
        <div className="conteiner">
      <div className="row">
        <div className="col-6" >
          <div className="card">
            <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <img className="card-img" src={item.img}  alt=""/>
                <p>{item.detail}</p>
                <hr/>
                <p>{item.price}</p>
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