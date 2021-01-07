import React, { Fragment, useEffect, useState } from 'react';
import { PanelHeaderSimple, PanelHeaderBack, Gallery } from '@vkontakte/vkui';
import PropType from 'prop-types';
import firebase from 'firebase';

import './Columns.css';
import Column from '../../components/Column/Column';
import ColumnCreate from '../../components/ColumnCreate/ColumnCreate';

const Columns = ({ goBack, setColumns, columns, removeColumn, addColumn, desk }) => {
  // Запрос данных о колонках
  useEffect(() => {
    const db = firebase.firestore();
    
    db.collection("columns").get().then((querySnapshot) => {
      const columns = [];
      
      querySnapshot.forEach((doc) => {
        const { deskId, name } = doc.data();

        columns.push({
          id: doc.id, 
          deskId,
          name,
        });
      });

      setColumns(columns);
    });
  }, []);

  return (
    <Fragment>
      <PanelHeaderSimple left={<PanelHeaderBack onClick={goBack} />}>Доска {desk.name}</PanelHeaderSimple>
      <Gallery
        className="Columns__list"
        slideWidth="100%"
        align="center"
      >
        {columns.map(({id, name}) => <Column key={id} id={id} name={name} onDelete={removeColumn} />)}
        
        <ColumnCreate onCreate={addColumn} />
      </Gallery>
    </Fragment>
  )
}

Columns.propType = {
  goBack: PropType.func.isRequired,
  setColumns: PropType.func.isRequired,
  columns: PropType.arrayOf(PropType.shape({
    id: PropType.string.isRequired,
    name: PropType.string.isRequired,
    deskId: PropType.string.isRequired,
  })).isRequired,
  removeColumn: PropType.func.isRequired,
  addColumn: PropType.func.isRequired,
  desk: PropType.shape({
    id: PropType.string.isRequired,
    name: PropType.string.isRequired,
  }).isRequired,
};

export default Columns;