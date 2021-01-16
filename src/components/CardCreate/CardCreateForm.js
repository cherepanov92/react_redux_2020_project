import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, FormLayout, Input } from '@vkontakte/vkui';
import { Icon24Add } from '@vkontakte/icons';

import { useCreateForm } from '../CreateForm/hooks';

const CardCreateForm = ({ onSubmit }) => {
  const {
    name,
    status,
    reset,
    submit,
    setFormMode,
    onChangeInput,
    isButtonMode,
  } = useCreateForm(onSubmit);

  if (isButtonMode) {
    return (
      <Button 
        onClick={setFormMode} 
        before={<Icon24Add />} 
        size="l" stretched 
        mode="outline"
      >
        Добавить карточку
      </Button>
    )
  };
  
  return (
    <Card size="l" mode="outline">
      <FormLayout onSubmit={submit}>
        <Input 
          status={status} 
          autoFocus={true}
          value={name} 
          onChange={onChangeInput}
          placeholder="Введите название карточки"
        />
        <div>
          <Button onClick={submit}>Добавить</Button>
          <Button onClick={reset} mode='tertiary'>Отменить</Button>
        </div>
      </FormLayout>
    </Card>
  )
};

CardCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CardCreateForm;