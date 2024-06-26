import { useEffect, useMemo, useState, useCallback } from "react";
import {
  Container,
  InputSearchContainer,
  Header,
  ListHeader,
  Card,
  ErrorContainer,
  EmptyListContainer,
  SearchNotFoundContainer,
} from "./styles";
import Loader from "../../components/Loader/";
import ButtonForm from "../../components/Button";

import { Link } from "react-router-dom";
import formatPhone from "../../utils/formatPhone";

import arrow from "../../assets/icons/arrow.svg";
import edit from "../../assets/icons/edit.svg";
import trash from "../../assets/icons/trash.svg";
import sad from "../../assets/icons/sad.svg";
import emptyBox from "../../assets/icons/empty-box.svg";
import magnifierQuestion from "../../assets/icons/magnifier-question.svg";
import ContactsService from "../../service/ContactsService";

interface Contacts {
  id: string;
  name: string;
  email: string;
  phone: string;
  category_name: string;
}

const Home = () => {
  const [contacts, setContacts] = useState<Contacts[]>([]);
  const [orderBy, setOrderBy] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const listContacts = await ContactsService.listContacts(orderBy);

      setContacts(listContacts);
      setHasError(false);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact): any =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [contacts, searchTerm]
  );

  function handleToogleOrderBy() {
    setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
  }

  function handleChangeSearchTerm(event: any) {
    setSearchTerm(event.target.value);
  }

  async function hadleDeleteContact(id: string) {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);

    await ContactsService.deleteContact(id);

    setContacts(filteredContacts);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <input
          value={searchTerm}
          type="text"
          placeholder="Pesquise pelo nome..."
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>
      <Header
        justifyContent={
          hasError
            ? "flex-end"
            : contacts.length > 0
            ? "space-between"
            : "center"
        }
      >
        {!hasError && contacts.length > 0 && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? " Contato" : " Contatos"}
          </strong>
        )}
        <Link to="/new">Novo contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Rosto triste" />
          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>
            <ButtonForm type="button" danger={false} onClick={loadContacts}>
              Tentar novamente
            </ButtonForm>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {contacts.length < 1 && !isLoading && (
            <EmptyListContainer>
              <img src={emptyBox} alt="Caixa vazia" />
              <p>
                Você ainda não tem nenhum contato cadastrado! Clique no botão
                <strong> "Novo contato"</strong> à cima para cadastrar o seu
                primeiro!
              </p>
            </EmptyListContainer>
          )}

          {contacts.length > 0 && filteredContacts.length < 1 && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="Lupa vazia" />
              <p>
                Nenhum resultado foi encontrado para{" "}
                <strong>{searchTerm}</strong>
              </p>
            </SearchNotFoundContainer>
          )}

          {filteredContacts.length > 0 && (
            <ListHeader orderBy={orderBy}>
              <header>
                <button onClick={handleToogleOrderBy}>
                  <span>Nome</span>
                  <img src={arrow} alt="Seta" />
                </button>
              </header>
            </ListHeader>
          )}

          {filteredContacts.map(({ id, name, category_name, phone, email }) => {
            return (
              <Card key={id}>
                <div className="info">
                  <div className="contact-name">
                    <strong>{name}</strong>
                    <small>{category_name}</small>
                  </div>
                  <span>{email}</span>
                  <span>{formatPhone(phone)}</span>
                </div>
                <div className="actions">
                  <Link to={`/edit/${id}`}>
                    <img src={edit} alt="Editar" />
                  </Link>
                  <button onClick={() => hadleDeleteContact(id)}>
                    <img src={trash} alt="Deletar" />
                  </button>
                </div>
              </Card>
            );
          })}
        </>
      )}
    </Container>
  );
};

export default Home;
