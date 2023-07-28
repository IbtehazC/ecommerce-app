import Navbar from "./features/navbar/Navbar";
import ProductGrid from "./features/products/ProductGrid";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center">
        <ProductGrid />
      </div>
    </>
  );
}

export default App;
