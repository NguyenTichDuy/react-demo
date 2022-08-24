import {
  Input as InputCharka,
  InputProps as InputCharkaProps,
} from "@chakra-ui/input";

interface InputProps extends InputCharkaProps {}

const Input = ({ ...rest }: InputProps) => {
  return <InputCharka {...rest} />;
};

export default Input;
