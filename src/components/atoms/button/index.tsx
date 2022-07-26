import { Button as Btn, ButtonProps } from "@chakra-ui/button";
import { ReactNode } from "react";

interface ButtonPropsType extends ButtonProps {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonPropsType) => {
  return <Btn {...rest}>{children}</Btn>;
};

export default Button;
