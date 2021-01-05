import React, { Fragment, useEffect, useState } from 'react';
import { PanelHeaderSimple, PanelHeaderBack, Gallery } from '@vkontakte/vkui';
import PropType from 'prop-types';
import firebase from 'firebase';

import './Columns.css';
import Column from '../../components/Column/Column';
import ColumnCreate from '../../components/ColumnCreate/ColumnCreate';

const Columns = ({ goBack }) => {
  const [columns, setColumns] = useState([]);
  const newColumn = (column) => setColumns([...columns, column]);
  const removeColumn = (removeId) => setColumns(columns.filter(({id}) => {return id !== removeId}));

  // Запрос данных о колонках
  useEffect(() => {
    const db = firebase.firestore();
    
    db.collection("columns").get().then((querySnapshot) => {
      const columns = [];
      
      querySnapshot.forEach((doc) => {
        columns.push({
          id: doc.id, 
          name: doc.data().name
        });
      })
      setColumns(columns);
      
    });
  }, [])

  return (
    <Fragment>
      <PanelHeaderSimple left={<PanelHeaderBack onClick={goBack} />}>Колонка</PanelHeaderSimple>
      <Gallery
        className="Columns__list"
        slideWidth="100%"
        align="center"
      >
        {columns.map(({id, name}) => <Column key={id} id={id} name={name} onDelete={removeColumn} />)}
        
        <ColumnCreate onCreate={newColumn} />
      </Gallery>
    </Fragment>
  )
}

Columns.propType = {
  goBack: PropType.func.isRequired,
}

export default Columns;