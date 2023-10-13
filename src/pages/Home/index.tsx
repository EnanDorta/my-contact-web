import { useEffect, useMemo, useState } from 'react'
import { Container, InputSearchContainer, Header, ListHeader, Card } from './styles'
import Loader from '../../components/Loader/'

import { Link } from 'react-router-dom'
import formatPhone from '../../utils/formatPhone'

import arrow from '../../assets/icons/arrow.svg'
import edit from '../../assets/icons/edit.svg'
import trash from '../../assets/icons/trash.svg'
import ContactsService from '../../service/ContactsService'

interface Contacts {
  id: string
  name: string
  email: string
  phone: string
  category_name: string
}

const Home = () => {
  const [contacts, setContacts] = useState<Contacts[]>([])
  const [orderBy, setOrderBy] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true)
        const listContacts = await ContactsService.listContacts(orderBy)

        setContacts(listContacts)

      }
      catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadContacts()
  }, [orderBy])

  const filteredContacts = useMemo(() => (
    contacts.filter((contact): any => (
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  ), [contacts, searchTerm])

  function handleToogleOrderBy() {
    setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc')
  }

  function handleChangeSearchTerm(event: any) {
    setSearchTerm(event.target.value)
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <input value={searchTerm}
          type="text"
          placeholder="Pesquise pelo nome..."
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>
      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' Contato' : ' Contatos'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      {
        filteredContacts.length > 0 && (
          <ListHeader orderBy={orderBy}>
            <header>
              <button onClick={handleToogleOrderBy}>
                <span>Nome</span>
                <img src={arrow} alt="Seta" />
              </button>
            </header>
          </ListHeader>
        )
      }

      {
        filteredContacts.map((contact) => {
          return (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                  <small>{contact.category_name}</small>
                </div>
                <span>{contact.email}</span>
                <span>{formatPhone(contact.phone)}</span>
              </div>
              <div className="actions">
                <Link to={`/edit/${contact.id}`}>
                  <img src={edit} alt="Editar" />
                </Link>
                <button>
                  <img src={trash} alt="Deletar" />
                </button>
              </div>
            </Card>
          )
        })
      }

    </Container>
  )
}

export default Home
