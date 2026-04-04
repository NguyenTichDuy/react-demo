import { Grid, VStack } from "@chakra-ui/layout";
import ProductItem, {
  ProductItemProps,
} from "Components/molecules/product-item";

interface ProductsListProps {
  products: ProductItemProps[] | undefined;
}
const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <VStack>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {products?.map((val) => (
          <ProductItem
            key={val.id ?? val.src.medium}
            id={val.id}
            alt={val.alt}
            price={val.price}
            src={val.src}
          />
        ))}
      </Grid>
    </VStack>
  );
};

export default ProductsList;
