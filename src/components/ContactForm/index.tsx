import { useState, FormEvent, useEffect } from "react";
import useErrors from "../../hooks/useError";

import isEmailValid from "../../utils/isValidEmail";
import formatPhone from "../../utils/formatPhone";
import CategoriesService from "../../service/CategoriesService";
import ContactsService from "../../service/ContactsService";

import { Form, ButtonContainer } from "./style";

import FormGroup from "../FormGroup";
import { InputForm } from "../Input";
import { SelectForm } from "../Select";
import ButtonForm from "../Button";

interface ContactFormProps {
  buttonLabel: string;
}

interface Categories {
  id: string;
  name: string;
}
const ContactForm = ({ buttonLabel }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<Categories[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isValidForm = name && errors.length === 0;

  useEffect(() => {
    async function loadCategories() {
      try {
        const categories = await CategoriesService.listCategories();

        setCategories(categories);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();
  }, []);

  function handleNameChange(event: any) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: "name", message: "Nome é obrigatório." });
    } else {
      removeError("name");
    }
  }

  function handleEmailChange(event: any) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: "email", message: "Email inválido." });
    } else {
      removeError("email");
    }
  }

  function handlePhoneChange(event: any) {
    setPhone(formatPhone(event.target.value));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await ContactsService.createContact({
        name,
        email,
        phone,
        category_id: category,
      });
      setIsSubmitting(false);
    } catch (e) {
      console.log(e);
      setIsSubmitting(false);
    }
  }
  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName("name")}>
        <InputForm
          placeholder="Nome *"
          value={name}
          error={Boolean(getErrorMessageByFieldName("name"))}
          disabled={isSubmitting}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName("email")}>
        <InputForm
          type="email"
          placeholder="E-mail"
          value={email}
          error={Boolean(getErrorMessageByFieldName("email"))}
          disabled={isSubmitting}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <InputForm
          placeholder="Telefone"
          value={phone}
          maxLength={15}
          disabled={isSubmitting}
          onChange={handlePhoneChange}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <SelectForm
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={isLoadingCategories || isSubmitting}
        >
          <option value="">Sem categoria</option>

          {categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </SelectForm>
      </FormGroup>

      <ButtonContainer>
        <ButtonForm
          type="submit"
          isLoading={isSubmitting}
          disabled={!isValidForm}
          danger={false}
        >
          {buttonLabel}
        </ButtonForm>
      </ButtonContainer>
    </Form>
  );
};

export default ContactForm;
