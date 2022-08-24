// import { Avatar, HStack, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
// import { Text } from "@chakra-ui/text";
import { HStack, Text } from "@chakra-ui/layout";

const LoginAvatar = () => {
  return (
    <HStack>
      <Avatar bg={"black"} size={"xs"} />
      <Text>Log In</Text>
    </HStack>
  );
};

export default LoginAvatar;
