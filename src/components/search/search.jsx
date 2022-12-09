import React from 'react';
import './search.scss';

const Search = () => {
  return (
    <>
    <form className="d-flex p-5 justify-content-center" role="search">
        <input className="fs-3 text-slate text-center form-control me-2 w-50" type="search" placeholder="Search your craving" aria-label="Search" />
        <button className="btn btn-outline-slate" type="submit">Search</button>
    </form>
    </>
  )
}

export default Search;
    {/*<div className="d-flex justify-content-center flex-row" style={{padding: '5em'}}>*/}
    {/*  <input className='search-input form-control fs-3 text-slate text-center m-3' type="search" placeholder='search your craving' />*/}
    {/*  <button className="btn btn-large fw-light fs-3 btn-outline-slate search-button flex-shrink-1 m-3">Search</button>*/}
    {/*</div>*/}
