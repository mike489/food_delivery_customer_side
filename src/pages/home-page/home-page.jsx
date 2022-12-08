import React, { useState } from "react";
import Search from "../../components/search/search";
import Card from "../../components/card/card";
import {Link} from "react-router-dom";

const HomePage = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Yetsom firfir", picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Taita_fit-fit.jpg/1200px-Taita_fit-fit.jpg" },
    { id: 2, name: "Special Burger", picture: "https://thumbs.dreamstime.com/z/special-burger-19990869.jpg" },
    { id: 3, name: "Margherita Pizza", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEqKtD_W2Kh0JualZ-VYp999jTGs1FFSiUFw&usqp=CAU" },
    { id: 4, name: "Lasagna", picture: "https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550-500x375.jpg" },
    { id: 5, name: "Tibs", picture: "https://d2j6dbq0eux0bg.cloudfront.net/images/16648100/1676984151.jpg" },
    { id: 6, name: "Ergo", picture: "https://www.recetin.com/wp-content/uploads/2015/06/yogurt.jpg" },
    { id: 7, name: "Kizen", picture: "https://askthescientists.com/wp-content/uploads/2021/04/AdobeStock_240042551-scaled.jpeg" },
    { id: 8, name: "Beer", picture: "https://www.eatthis.com/wp-content/uploads/sites/4/2022/02/Beer-flight.jpg?quality=82&strip=all" },
  ]);

  return (
    <>
      <div className="container-fluid text-center bg-light-slate d-flex flex-column p-5 justify-content-around">
        <span className='display-1 text-slate mb-2'>E N I B L A</span>
        <span className='text-slate'>Get the food of your choice on your finger tip</span>
        <Search />
        <div className='mb-3'>
          <Link className="btn btn-large btn-outline-slate" to='/sign-up'>SIGN UP</Link>
        </div>
        <h6 className='text-slate' >
          Already have an account? &nbsp;<Link className='text-dark' to='/sign-in' >sign in</Link>
        </h6>
      </div>
      <hr/>
      <div className="container">
        <div className="d-flex flex-row justify-content-evenly flex-wrap">
          {items.map((item) => (
            <div key={item.id} className="flex-fill m-2">
              <Card src={item.picture} title={item.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
