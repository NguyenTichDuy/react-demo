import ShopAll from "Components/templates/ShopAll";
import { usePexelsProducts } from "Hooks/use-pexels-products";

const Sale = () => {
  const { products, isLoading, isError, error, refetch } =
    usePexelsProducts("fashion sale");

  const handleRetry = () => {
    void refetch();
  };

  return (
    <ShopAll
      products={products}
      title="SALE"
      isLoading={isLoading}
      isError={isError}
      error={error}
      onRetry={handleRetry}
    />
  );
};

export default Sale;
