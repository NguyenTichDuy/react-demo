import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
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
        <Alert status="error" borderRadius="md" flexDirection="column" alignItems="stretch">
          <Flex>
            <AlertIcon mt={1} />
            <Box ml={3}>
              <AlertTitle>Could not load products</AlertTitle>
              <AlertDescription>
                {error?.message ?? "Something went wrong. Try again."}
              </AlertDescription>
            </Box>
          </Flex>
          {onRetry && (
            <ChakraButton
              alignSelf="flex-start"
              ml={{ base: 0, sm: 10 }}
              mt={3}
              size="sm"
              variant="outline"
              onClick={onRetry}
            >
              Retry
            </ChakraButton>
          )}
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
