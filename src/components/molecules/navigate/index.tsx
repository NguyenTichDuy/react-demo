import { HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { NAVIGATE_DATA } from "./data";

const Navigate = () => {
  const { pathname } = useLocation();

  return (
    <HStack spacing={4} flexWrap="wrap" justifyContent="flex-end">
      {NAVIGATE_DATA.map(({ link, name }) => {
        const isActive =
          link === "/"
            ? pathname === "/"
            : pathname === link || pathname.startsWith(`${link}/`);

        return (
          <Link
            key={link}
            as={RouterLink}
            to={link}
            fontWeight={isActive ? "semibold" : "medium"}
            color={isActive ? "orange.500" : "gray.700"}
            _hover={{ color: "orange.400" }}
          >
            {name}
          </Link>
        );
      })}
    </HStack>
  );
};

export default Navigate;
