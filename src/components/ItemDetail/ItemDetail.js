import Counter from "../Counter/Counter";

const ItemDetail = ({info}) =>{
 
  return (
        <div className="conteiner">
      <div className="row">
        <div className="col-6" >
          <div className="card">
            <div className="card-body">
                <h3 className="card-title">{info.title}</h3>
                <img className="card-img" src={info.img}  alt=""/>
                <p>{info.detail}</p>
                <hr/>
                <p>{info.price}</p>
                <Counter/>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ItemDetail;