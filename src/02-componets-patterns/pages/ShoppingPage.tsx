import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";

import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard
        className="bg-dark text-white"
        key={product.id}
        product={product}
        initialValue={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({
          count,
          increaseBy,
          isMaxCountReached,
          product,
          reset,
          maxCount,
        }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" activeClass="active" />
            <ProductButtons className="custom-buttons" />

            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}
            <span>
              counter: {count} - max-count: {maxCount}
            </span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
