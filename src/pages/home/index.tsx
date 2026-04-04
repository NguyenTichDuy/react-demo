import { useQuery } from "@tanstack/react-query";
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

const Home = () => {
  const params = {
    query: "tshirt",
    per_page: "12",
    size: "medium",
    orientation: "portrait",
  };

  const { data } = useQuery({
    queryKey: ["products", params],
    queryFn: () =>
      fetchData({
        params,
        method: "GET",
        pathname: "search",
      }) as Promise<ProductsItemResponse>,
  });

  const products: ProductItemProps[] | undefined = data?.photos?.map(
    (photo) => ({
      id: photo.id,
      src: photo.src,
      alt: photo.alt || photo.photographer || "Photo",
      price: DEMO_PRICE,
    })
  );

  return <ShopAll products={products} title="SHOP ALL" />;
};

export default Home;
