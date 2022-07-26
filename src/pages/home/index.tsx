import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import ShopAll from "Components/templates/ShopAll";
import { fetchData } from "Config/fetch-api";

interface ProductsItemResponse {
  page: number;
  per_page: number;
  photos: any;
}
const home = () => {
  const params = {
    query: "tshirt",
    per_page: "12",
    size: "medium",
    orientation: "portrait",
  };
  const getProductsApi = () =>
    fetchData({ params, method: "GET", pathname: "search" });
  const { data: getData, error } = useQuery<ProductsItemResponse>(
    ["products"],
    getProductsApi
  );
  return <ShopAll products={getData?.photos} title="SHOP ALL" />;
};

export default home;
