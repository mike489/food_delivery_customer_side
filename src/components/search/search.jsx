import React from 'react';

const Search = () => {
  return (
    <>
    <div className="row" style={{padding: '5em'}}>
      <div className="col-10">
            <input type="search" className="form-control" />
      </div>
      <div className="col-2">
            <button className="btn btn-outline-primary">Search</button>
      </div>
    </div>
    </>
  )
}

export default Search;