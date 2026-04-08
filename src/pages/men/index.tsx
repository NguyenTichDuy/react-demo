import ShopAll from "Components/templates/ShopAll";
import { usePexelsProducts } from "Hooks/use-pexels-products";

const Men = () => {
  const { products, isLoading, isError, error, refetch } =
    usePexelsProducts("men fashion");

  const handleRetry = () => {
    void refetch();
  };

  return (
    <ShopAll
      products={products}
      title="MEN"
      isLoading={isLoading}
      isError={isError}
      error={error}
      onRetry={handleRetry}
    />
  );
};

export default Men;
