import { Container, Text, VStack } from "@chakra-ui/layout";
import Title from "Components/molecules/Title";

const About = () => {
  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6} align="stretch">
        <Title>ABOUT</Title>
        <Text color="gray.700" lineHeight="tall">
          N O U S là bản demo front-end: trình bày sản phẩm dạng lưới, tải ảnh từ
          Pexels, và cấu trúc thư mục theo hướng atomic design. Đây không phải
          cửa hàng thật — mục đích là học React, Chakra UI và data fetching.
        </Text>
        <Text color="gray.700" lineHeight="tall">
          Các trang Women, Men và Sale dùng cùng luồng dữ liệu với từ khóa tìm
          kiếm khác nhau để bạn xem cách tái sử dụng hook và template.
        </Text>
      </VStack>
    </Container>
  );
};

export default About;
