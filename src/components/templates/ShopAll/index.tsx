import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { Flex, VStack } from "@chakra-ui/layout";
import Button from "Components/atoms/button";
import { ProductItemProps } from "Components/molecules/product-item";
import Title from "Components/molecules/Title";
import ProductsList from "Components/organisms/products-list";

interface ProductListProps {
  products: ProductItemProps[] | undefined;
  title: string;
  isLoading?: boolean;
  isError?: boolean;
  error?: Error | null;
  onRetry?: () => void;
}

const ShopAll = ({
  products,
  title,
  isLoading = false,
  isError = false,
  error = null,
  onRetry,
}: ProductListProps) => {
  return (
    <VStack spacing={"8"} align="stretch" width="100%">
      <Title>{title}</Title>
      {isError && (
        <Alert status="error" borderRadius="md">
          <AlertIcon />
          <Flex flexDirection="column" gap={1}>
            <AlertTitle>Could not load products</AlertTitle>
            <AlertDescription>
              {error?.message ?? "Something went wrong. Try again."}
            </AlertDescription>
            {onRetry && (
              <ChakraButton
                mt={2}
                size="sm"
                variant="outline"
                onClick={onRetry}
              >
                Retry
              </ChakraButton>
            )}
          </Flex>
        </Alert>
      )}
      {!isError && (
        <ProductsList products={products} isLoading={isLoading} />
      )}
      {!isLoading && !isError && (
        <Flex alignItems={"center"} justifyContent="center">
          <Button variant={"plane"}>Load More</Button>
        </Flex>
      )}
    </VStack>
  );
};

export default ShopAll;
