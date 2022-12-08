import React from 'react';

const Card = ({src, title}) => {
return (
    <div className="card" style={{width: "18rem"}}>
      <img style={{height: '271px', maxHeight: '336px', maxWidth: '18rem', width: '18rem'}} src={src} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-slate">{title}</h5>
        <a href="#" className="btn btn-slate">Order</a>
      </div>
</div>
)
}

export default Card;
