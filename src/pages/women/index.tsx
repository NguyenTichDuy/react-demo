import ShopAll from "Components/templates/ShopAll";
import { usePexelsProducts } from "Hooks/use-pexels-products";

const Women = () => {
  const { products, isLoading, isError, error, refetch } =
    usePexelsProducts("women fashion");

  const handleRetry = () => {
    void refetch();
  };

  return (
    <ShopAll
      products={products}
      title="WOMEN"
      isLoading={isLoading}
      isError={isError}
      error={error}
      onRetry={handleRetry}
    />
  );
};

export default Women;
