import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const { onProdcutCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            className="bg-dark text-white"
            key={product.id}
            onChange={(event) => onProdcutCountChange(event)}
            product={product}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" activeClass="active" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shoppineg-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{
              width: "130px",
            }}
            value={product.count}
            onChange={(event) => onProdcutCountChange(event)}
          >
            <ProductImage className="custom-image" />
            <ProductTitle
              activeClass="active"
              className="text-bold"
              style={{ fontSize: "10px" }}
            />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
