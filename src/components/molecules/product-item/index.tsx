import { Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export interface SizeImage {
  original: string;
  medium: string;
  large: string;
}

export interface ProductItemProps {
  id?: number;
  src: SizeImage;
  alt: string;
  price: string;
}

const ProductItem = ({ src, alt, price }: ProductItemProps) => {
  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      bg="gray.50"
      _dark={{ bg: "whiteAlpha.100" }}
      transition="transform 0.2s ease, box-shadow 0.2s ease"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "md",
      }}
    >
      <Image
        src={src.medium}
        alt={alt}
        loading="lazy"
        width="100%"
        height="220px"
        objectFit="cover"
      />
      <Box px={3} py={3}>
        <Text noOfLines={2} fontWeight="medium">
          {alt}
        </Text>
        <Text color="orange.500" fontWeight="semibold" mt={1}>
          {price}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductItem;
