import { Link } from "react-router-dom";

function Home({ items, setNewItem }) {
  console.log(items);

  return (
    <>
      <header className="header">
        <h2>Panel</h2>
        <Link to="/form1" className="add-item-btn">
          Add Item
        </Link>
      </header>
      <main className="main">
        {items.map((item) => {
          return (
            <div className="cart" key={item.id}>
              <h2 className="title">{item.product}</h2>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default Home;
