import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PanelHeaderSimple, Gallery } from '@vkontakte/vkui';
import firebase from 'firebase';

import './Columns.css';
import Column from "./Column";

const Columns = () => {
  const [columns, setColumns] = useState([]);

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
      <PanelHeaderSimple>Доска</PanelHeaderSimple>

      {columns.length ? (
        <Gallery
          className="Columns__list"
          slideWidth="100%"
          align="center"
        >
          {columns.map(({id}) => <Column key={id} />)}
        </Gallery>
      ): null}

    </Fragment>
  )
}

export default Columns;