import { Link } from "react-router-dom";

function Home({ items, setNewItem }) {
  return (
    <>
      <header className="header">
        <h1>Panel</h1>
        <Link to="/form1" className="add-item-btn">
          Add Item
        </Link>
      </header>
      <main className="main">
        {items.map((item) => {
          return (
            <div className="cart" key={item.id}>
              <h2 className="title">Product : {item.product}</h2>
              <p className="product-info-txt">Brand: {item.brand}</p>
              <p className="product-info-txt">Color: {item.color}</p>
              <p className="product-info-txt">Model: {item.model}</p>
              <p className="product-info-txt">Summery: {item.summery}</p>
              <p className="product-info-txt">Type: {item.type}</p>
              <p className="product-info-txt">Size: {item.size}</p>
              <p className="product-info-txt">Price: {item.price}</p>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default Home;
