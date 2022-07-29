import { Box, Flex, VStack } from "@chakra-ui/react";
import Button from "Components/atoms/button";
import { ProductItemProps } from "Components/molecules/product-item";
import Title from "Components/molecules/Title";
import ProductsList from "Components/organisms/products-list";

interface ProductListProps {
  products: ProductItemProps[] | undefined;
  title: string;
}

const ShopAll = ({ products, title }: ProductListProps) => {
  return (
    <VStack spacing={"8"}>
      <Title chilren={title} />
      <ProductsList products={products} />
      <Flex alignItems={"center"}>
        <Button variant={"plane"}>Load More</Button>
      </Flex>
    </VStack>
  );
};

export default ShopAll;
