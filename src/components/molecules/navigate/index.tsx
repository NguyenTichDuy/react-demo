import { Box, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NAVIGATE_DATA } from "./data";

const Navigate = () => {
  return (
    <HStack>
      {NAVIGATE_DATA.map(({ link, name }) => (
        <Button variant="link">
          <Link to={link}>{name}</Link>
        </Button>
      ))}
    </HStack>
  );
};

export default Navigate;
