import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PanelHeaderSimple, Div } from '@vkontakte/vkui';
import firebase from 'firebase';

import DeskList from './DeskList';
import DeskCreate from './DeskCreate';

const Desks = ({ onChangePanel }) => {
  const [desks, setDesks] = useState([]);
  const newDesk = (desk) => setDesks([...desks, desk]);

  // Запрос данных о досках
  useEffect(() => {
    const db = firebase.firestore();
    
    db.collection("desks").get().then((querySnapshot) => {
      const desks_data = [];
      
      querySnapshot.forEach((doc) => {
        desks_data.push({
          id: doc.id, 
          name: doc.data().name
        });
      })
      
      setDesks(desks_data);
    });
  }, [])

  return (
    <Fragment>
      <PanelHeaderSimple>Мои доски</PanelHeaderSimple>

      <Div>
        <DeskCreate onCreate={newDesk} />
      </Div>

      <DeskList desks={desks} />
    </Fragment>
  )
}

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
}

export default Desks;