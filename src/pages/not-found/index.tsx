import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NotFound = () => {
  return (
    <VStack spacing={6} py={20} textAlign="center">
      <Heading size="2xl">404</Heading>
      <Text color="gray.600">Trang không tồn tại.</Text>
      <Button as={RouterLink} to="/" colorScheme="orange" variant="outline">
        Về Shop All
      </Button>
    </VStack>
  );
};

export default NotFound;
