const ProductItem = (props) => {
  return (
    <>
      <img class="product-img" src={props.image} alt="logo"></img>
      <h5>{props.name}</h5>
      <h5>{props.price}</h5>
    </>
  );
};

export default ProductItem;
