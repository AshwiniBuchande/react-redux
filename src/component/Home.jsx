import React from "react";

function Home() {
  return (
    <div>
        <div className="add-to-cart">
            <img src="https://t3.ftcdn.net/jpg/07/97/42/64/360_F_797426494_ZTXgDGUVFlPDOWjnzzQ9xUZwQW2efFH5.jpg" alt="" srcset="" />
        </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://images.unsplash.com/photo-1650580809796-39361e4d77f6?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price = $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
