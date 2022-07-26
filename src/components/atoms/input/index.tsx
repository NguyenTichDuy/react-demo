import {
  Input as InputCharka,
  InputProps as InputCharkaProps,
} from "@chakra-ui/react";

interface InputProps {
  styles: InputCharkaProps;
}

const Input = ({ styles }: InputProps) => {
  return <InputCharka {...styles} />;
};

export default Input;
