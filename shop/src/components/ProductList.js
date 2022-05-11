import products from "../product";
import ProductItem from "./ProductItem";
const ProductList = () => {
  return (
    <div class="list">
      {products.map((item) => {
        return (
          <center>
            <div class="item">
              <ProductItem
                name={item.name}
                image={item.image}
                price={item.price}
              />
            </div>
          </center>
        );
      })}
    </div>
  );
};

export default ProductList;
