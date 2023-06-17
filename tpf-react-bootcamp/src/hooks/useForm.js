import { useState } from 'react';

export const useForm = (initialForm = {}) => {

  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  }

  const onInputListChange = ({ target, index }) => {
    const { name, value } = target;
    const list = [...formState[name]]
    list[index] = {name: value}
    setFormState({
      ...formState,
      [name]: [...list]
    });
    return true
  }

  const onAddElementToList = ({ name, value }) => {
    if (!Array.isArray(formState[name])) return
    setFormState({
      ...formState,
      [name]: [...formState[name], value]
    });
  }

  const onDeleteElementToList = ({ name, index }) => {
    if (!Array.isArray(formState[name])) return
    setFormState({
      ...formState,
      [name]: formState[name].filter((data, idx) => idx !== index)
    });
  }

  const onResetForm = () => {
    setFormState(initialForm);
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onInputListChange,
    onResetForm,
    onAddElementToList,
    onDeleteElementToList,
  }
}