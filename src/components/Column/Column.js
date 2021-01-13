import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Div, Card, Header, Button, ActionSheet, ActionSheetItem } from '@vkontakte/vkui';
import { deleteColumn } from '../../actions';
import Icon16MoreHorizontal from '@vkontakte/icons/dist/16/more_horizontal';

import './Column.css';
import Cards from '../Cards/Cards';
import Context from '../App/context';

const Column = ({ id, name }) => {
  const { removeColumn, setPopout } = useContext(Context);

  const deleteItem = () => {
    deleteColumn(id)
    .then(() => removeColumn(id))
    .catch(console.error);
  }

  const showColumnOptions = () => {
    setPopout(
      <ActionSheet 
        onClose={() => setPopout(null)}
        iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
      >
        <ActionSheetItem autoclose mode="destructive" onClick={deleteItem}>
          Удалить запись
        </ActionSheetItem>
      </ActionSheet>
    )

  }

  return (
    <Div className="Column">
      <div className={'Column__header'}>
        <Header className="Column__title">{name}</Header>
        <Button 
          mode="overlay_outline" 
          className="Column__headerButtom"
          onClick={showColumnOptions}
        >
          <Icon16MoreHorizontal/>
        </Button>
      </div>
      <Card className="Column__wrapper">
        <Cards columnId={id} />
      </Card>
    </Div>
  )
}

Column.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Column;