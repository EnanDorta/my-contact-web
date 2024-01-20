import { createPortal } from "react-dom";

import { Overlay } from "./styles";
import Spinner from "../Spinner";

interface LoaderProps {
  isLoading?: boolean;
}

const Loader = ({ isLoading }: LoaderProps) => {
  if (!isLoading) {
    return null;
  }

  return createPortal(
    <Overlay>
      <Spinner size={90} />
    </Overlay>,
    document.getElementById("loader-root")!
  );
};

export default Loader;
