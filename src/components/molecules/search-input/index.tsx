import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Search2Icon } from "@chakra-ui/icons";

const SearchInput = () => {
  return (
    <InputGroup variant={"flushed"}>
      <InputLeftElement>
        <Search2Icon />
      </InputLeftElement>
      <Input placeholder={"Search..."} />
    </InputGroup>
  );
};

export default SearchInput;
