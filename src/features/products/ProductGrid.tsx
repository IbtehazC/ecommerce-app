import { FC } from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const ProductGrid: FC = () => {
  const productsFromStore = useSelector(
    (state: RootState) => state.product.products
  );
  return (
    <div className="flex flex-wrap justify-around p-6">
      {productsFromStore.map((product) => (
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg m-4"
          key={product.id}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
