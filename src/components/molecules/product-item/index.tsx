import { Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export interface SizeImage {
  original: string;
  medium: string;
  large: string;
}

export interface ProductItemProps {
  src: SizeImage;
  alt: string;
  price: string;
}

const ProductItem = ({ src, alt, price }: ProductItemProps) => {
  return (
    <Box>
      <Image src={src.original} />
      <Text>{alt}</Text>
      <Text color={"orange"}>{price}</Text>
    </Box>
  );
};

export default ProductItem;
