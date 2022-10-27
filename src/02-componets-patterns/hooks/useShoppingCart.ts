import { useState } from "react";
import { ProductInCart, Product } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProdcutCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShopingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShopingCart;
        return { ...rest };
      }

      return {
        ...oldShopingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    shoppingCart,
    onProdcutCountChange,
  };
};
