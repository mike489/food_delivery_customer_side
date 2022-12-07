import React from 'react';

const Card = ({src, title}) => {
return (
    <div className="card" style={{width: "18rem"}}>
  <img src={src} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <a href="#" className="btn btn-primary">Order</a>
  </div>
</div>
)
}

export default Card;