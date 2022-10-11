import { Link } from "react-router-dom";


const Item = ({item}) =>{
  return (
    <div className="conteiner">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img className="card-img" src={item.img}  alt=""/>
            <div className="card-body">
              <h3 className="card-title">{item.title}</h3>
              <div>
                <Link to= {`/Detalle/${item.id}`}> Ver detalle </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item;