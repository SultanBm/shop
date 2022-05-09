import productlist from "./product.js";

function Products(props) {
  return (
    <div>
      <img src={props.image} />
      <h1>{props.name}</h1>
      <p>{props.price}</p>
    </div>
  );
}
function Component() {
  const products = productlist.map((item) => (
    <Products name={item.name} price={item.price} image={item.image} />
  ));
  return (
    <div className="App">
      <div class="title">
        <h1 text-align="center"> los pollos Hermanos</h1>
        <h4 text-align="center">we sell everything</h4>
        <img src="https://towarzystwoizerskie.org/img/restaurants/89/is-breaking-bads-los-pollos-hermanos-real-restaurant.jpg" />
      </div>

      <div class="products">
        {productlist.map((item) => {
          return <div class="item">{item}</div>;
        })}
      </div>
    </div>
  );
}
const componentlist = <Component />;
export default componentlist;
