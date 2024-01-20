import { StyledSpinner } from "./styles";

interface SpinnerProps {
  size?: number;
}

const Spinner = ({ size = 32 }: SpinnerProps) => {
  return <StyledSpinner size={size} />;
};

export default Spinner;
