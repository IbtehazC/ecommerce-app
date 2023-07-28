import React from "react";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "./poductSlice";
import { Product } from "./Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, image } = product;
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const product = {
      id,
      name,
      price,
      image,
    };
    dispatch(addProduct(product));
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="bg-white shadow rounded overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 space-y-2">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-500">${price}</p>
        <div className="space-x-4">
          <button
            onClick={handleAddProduct}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
          <button
            onClick={handleRemoveProduct}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
