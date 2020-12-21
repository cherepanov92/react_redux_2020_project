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

const DeskCreate = () => {
  const [mode, setMode] = useState(modes.button);
  const [name, setName] = useState('');
  const [status, setStatus] = useState(statuses.dafault);

  // Установка дефолтных переметорв
  const reset = () => {
    setMode(modes.button);
    setName('');
    setStatus(statuses.default);
  }

  const createDesk = (event) => {
    if (event) {
      console.log('event')
      event.preventDefault();
    }

    // Валидация на пустое поле (или поле состящие из пробелов) 
    if (!name.trim().length) {
      setStatus(statuses.error);
      return ;
    }
    
    console.log('done');
    reset();
  }

  if (mode === modes.button) {
    return (
      <Button 
        onClick={() => {setMode(modes.form)}} 
        before={<Icon24Add />} 
        size="xl"
      >
        Создать доску
      </Button>
    )
  }
  
  return (
    <Card size="l" mode="shadow">
      <FormLayout onSubmit={createDesk}>
        <Input 
          status={status} 
          autoFocus={true}
          value={name} 
          onChange={(event) => setName(event.target.value)}
          placeholder='Введите название доски'
        />
        <div>
          <Button onClick={createDesk}>Создать доску</Button>
          <Button onClick={reset} mode='tertiary'>Отменить</Button>
        </div>
      </FormLayout>
    </Card>
  )


};

export default DeskCreate;