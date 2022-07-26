import { Avatar, Box, HStack, Icon, Text } from "@chakra-ui/react";

const LoginAvatar = () => {
  return (
    <HStack>
      <Avatar bg={"black"} size={"xs"} />
      <Text>Log In</Text>
    </HStack>
  );
};

export default LoginAvatar;
