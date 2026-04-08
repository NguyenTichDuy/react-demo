import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import ShopAll from "Components/templates/ShopAll";
import { ProductItemProps } from "Components/molecules/product-item";
import { fetchData } from "Config/fetch-api";

interface PexelsPhoto {
  id: number;
  alt: string;
  photographer: string;
  src: ProductItemProps["src"];
}

interface ProductsItemResponse {
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
}

const DEMO_PRICE = "$12.00";
const INITIAL_VISIBLE_PRODUCTS = 8;
const LOAD_MORE_STEP = 5;

const Home = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_PRODUCTS);
  const params = {
    query: "tshirt",
    per_page: "24",
    size: "medium",
    orientation: "portrait",
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["products", params],
    queryFn: () =>
      fetchData({
        params,
        method: "GET",
        pathname: "search",
      }) as Promise<ProductsItemResponse>,
  });

  const products: ProductItemProps[] = useMemo(
    () =>
      data?.photos?.map((photo) => ({
        id: photo.id,
        src: photo.src,
        alt: photo.alt || photo.photographer || "Photo",
        price: DEMO_PRICE,
      })) ?? [],
    [data]
  );
  const visibleProducts = useMemo(
    () => products.slice(0, visibleCount),
    [products, visibleCount]
  );
  const hasMoreProducts = visibleCount < products.length;

  const handleRetry = () => {
    void refetch();
  };
  const handleLoadMore = () => {
    setVisibleCount((previous) => previous + LOAD_MORE_STEP);
  };

  return (
    <ShopAll
      products={visibleProducts}
      title="SHOP ALL"
      isLoading={isLoading}
      isError={isError}
      error={error instanceof Error ? error : null}
      onRetry={handleRetry}
      hasMore={hasMoreProducts}
      totalProducts={products.length}
      visibleProducts={visibleProducts.length}
      onLoadMore={handleLoadMore}
    />
  );
};

export default Home;
