import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
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

export function usePexelsProducts(searchQuery: string) {
  const params = useMemo(
    () => ({
      query: searchQuery,
      per_page: "12",
      size: "medium",
      orientation: "portrait",
    }),
    [searchQuery]
  );

  const query = useQuery({
    queryKey: ["products", params],
    queryFn: () =>
      fetchData({
        params,
        method: "GET",
        pathname: "search",
      }) as Promise<ProductsItemResponse>,
  });

  const products: ProductItemProps[] | undefined = query.data?.photos?.map(
    (photo) => ({
      id: photo.id,
      src: photo.src,
      alt: photo.alt || photo.photographer || "Photo",
      price: DEMO_PRICE,
    })
  );

  return {
    products,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error instanceof Error ? query.error : null,
    refetch: query.refetch,
  };
}
