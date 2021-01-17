import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Div } from '@vkontakte/vkui';
import { Icon24Add, Icon24Dismiss } from '@vkontakte/icons';
import './CardCreateForm.css';

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
  } = useCreateForm({ onSubmit });

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
      <Div>
        <form onSubmit={submit}>
            <input 
              className="CardCreateForm__input"
              autoFocus={true}
              value={name} 
              onChange={onChangeInput}
              placeholder="Введите название карточки"
            />

          <div className="CardCreateForm__buttons">
            <Button onClick={submit} mode='commerce' className="CardCreateForm__actionButton">Добавить</Button>
            <Button onClick={reset} mode='tertiary'><Icon24Dismiss /></Button>
          </div>
        </form>
      </Div>
    </Card>
  )
};

CardCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CardCreateForm;