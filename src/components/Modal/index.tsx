import ReactDom from "react-dom";
import { Overlay, Container, Footer } from "./styles";

import ButtonForm from "../Button";

interface ModalProps {
  danger: boolean;
}

const Modal = ({ danger }: ModalProps) => {
  return ReactDom.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Tem certeza que deseja remover esse contato?</h1>
        <p>Esta ação não poderá ser desfeita!</p>

        <Footer>
          <button className="cancel-button" type="button">
            Cancelar
          </button>
          <ButtonForm danger={danger}>Deletar</ButtonForm>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
