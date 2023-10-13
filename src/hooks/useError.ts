import { useState } from 'react'

interface Errors {
  field: string;
  message: string
}

interface SetError {
  field: string;
  message: string
}


const useErrors = () => {
  const [errors, setErrors] = useState<Errors[]>([])

  function setError({ field, message }: SetError) {
    setErrors((prevState) => [
      ...prevState,
      { field, message }
    ])
  }

  function removeError(fieldName: string) {
    setErrors((prevState) => prevState.filter((error) => error.field !== fieldName))
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find((error) => error.field === fieldName)?.message
  }

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  }
}

export default useErrors
