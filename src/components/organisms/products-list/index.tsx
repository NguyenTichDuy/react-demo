import { Grid, Text, VStack } from "@chakra-ui/layout";
import { Skeleton, useBreakpointValue } from "@chakra-ui/react";
import ProductItem, {
  ProductItemProps,
} from "Components/molecules/product-item";

const SKELETON_COUNT = 12;

interface ProductsListProps {
  products: ProductItemProps[] | undefined;
  isLoading?: boolean;
}

const ProductsList = ({ products, isLoading = false }: ProductsListProps) => {
  const columnCount =
    useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 }) ?? 4;

  if (isLoading) {
    return (
      <Grid
        templateColumns={`repeat(${columnCount}, minmax(0, 1fr))`}
        gap={6}
        width="100%"
      >
        {Array.from({ length: SKELETON_COUNT }, (_, i) => (
          <Skeleton key={i} height="280px" borderRadius="md" />
        ))}
      </Grid>
    );
  }

  if (!products?.length) {
    return (
      <VStack py={12} spacing={2}>
        <Text color="gray.600" fontSize="lg">
          No products to show.
        </Text>
        <Text color="gray.500" fontSize="sm">
          Adjust your search or try again later.
        </Text>
      </VStack>
    );
  }

  return (
    <Grid
      templateColumns={`repeat(${columnCount}, minmax(0, 1fr))`}
      gap={6}
      width="100%"
    >
      {products.map((val) => (
        <ProductItem
          key={val.id ?? val.src.medium}
          id={val.id}
          alt={val.alt}
          price={val.price}
          src={val.src}
        />
      ))}
    </Grid>
  );
};

export default ProductsList;
