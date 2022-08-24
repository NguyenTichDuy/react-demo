import { Button } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";

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
