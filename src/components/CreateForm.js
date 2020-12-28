import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, FormLayout, Input } from '@vkontakte/vkui';
import { Icon24Add } from '@vkontakte/icons';

const modes = {
  button: 'button',
  form: 'form'
};

const statuses = {
  default: 'default',
  error: 'error'
};

const CreateForm = ({ onSubmit, placeholder, actionTitle }) => {
  const [mode, setMode] = useState(modes.button);
  const [name, setName] = useState('');
  const [status, setStatus] = useState(statuses.dafault);

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

  if (mode === modes.button) {
    return (
      <Button 
        onClick={() => {setMode(modes.form)}} 
        before={<Icon24Add />} 
        size="xl"
      >
        {actionTitle}
      </Button>
    )
  };
  
  return (
    <Card size="l" mode="shadow">
      <FormLayout onSubmit={submit}>
        <Input 
          status={status} 
          autoFocus={true}
          value={name} 
          onChange={(event) => setName(event.target.value)}
          placeholder={placeholder}
        />
        <div>
          <Button onClick={submit}>{actionTitle}</Button>
          <Button onClick={reset} mode='tertiary'>Отменить</Button>
        </div>
      </FormLayout>
    </Card>
  )
};

CreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  actionTitle: PropTypes.string.isRequired,
};

export default CreateForm;