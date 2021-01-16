import { useState } from 'react';

const modes = {
  button: 'button',
  form: 'form'
};

const statuses = {
  default: 'default',
  error: 'error'
};

export const useCreateForm = ({ onSubmit }) => {
  const [mode, setMode] = useState(modes.button);
  const [name, setName] = useState('');
  const [status, setStatus] = useState(statuses.dafault);
  const onChangeInput = (event) => setName(event.target.value);
  const isButtonMode = mode === modes.button;

  // Установка дефолтных переметорв
  const reset = () => {
    setMode(modes.button);
    setName('');
    setStatus(statuses.default);
  };

  const submit = (event) => {
    if (event) {
      event.preventDefault();
    }

    // Валидация на пустое поле (или поле состящие из пробелов) 
    if (!name.trim().length) {
      setStatus(statuses.error);
      return;
    }

    onSubmit(name).then(reset);
  };

  const setFormMode = () => setMode(modes.form);

  const setButtonMode = () => setMode(modes.button);

  return {
    name,
    status,
    reset,
    submit,
    setFormMode,
    onChangeInput,
    isButtonMode,
  };
};