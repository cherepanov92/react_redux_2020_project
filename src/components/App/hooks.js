import { useState } from 'react';
import { panel } from './constants';

const useDesksState = () => {
	const [desks, setDesks] = useState([]);
  const addDesk = (desk) => setDesks([...desks, desk]);
  const removeDesk = (removeId) => setDesks(desks.filter(({id}) => id !== removeId));
	
	return { desks, setDesks, addDesk, removeDesk };
};

const useColumnsState = () => {
	const [columns, setColumns] = useState([]);
  const addColumn = (column) => setColumns([...columns, column]);
  const removeColumn = (removeId) => setColumns(columns.filter(({id}) => id !== removeId));

	return { columns, setColumns, addColumn, removeColumn };
};

const useNavState = (desks) => {
	const [activePanel, setActivePanel] = useState(panel.desks);
	const [activeDesk, setActiveDesk] = useState({});
	const goToColumns = (deskId) => {
		setActiveDesk(desks.find(({id}) => id === deskId));
		setActivePanel(panel.columns);
	}
	const goToDesks = () => setActivePanel(panel.desks);

	return { activePanel, activeDesk, goToColumns, goToDesks };
};

const useCardsState = () => {
  const [cards, setCards] = useState([]);
  const addCard = (card) => setCards([...cards, card]);
  const removeCard = (removeId) => setCards(cards.filter(({id}) => {return id !== removeId}));

	return {cards, setCards, addCard, removeCard};
};

const usePopoutState = () => {
	const [popout, setPopout] = useState(null);
	return { popout, setPopout};
};

export const useAppState = () => {
  const desksState = useDesksState();
  const columnsState = useColumnsState();
	const navState = useNavState(desksState.desks);
	const cardsState = useCardsState();
	const popoutState = usePopoutState();
	
  return {
		...desksState, 
		...columnsState, 
		...navState,
		...cardsState,
		...popoutState,
  };
};
