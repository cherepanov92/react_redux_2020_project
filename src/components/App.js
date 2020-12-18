import React, { useState } from 'react';
// import bridge from '@vkontakte/vk-bridge';
import { View, Panel,Button  } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Desks from './Desks';

const panel = {
	desks: 'desks',
	columns: 'columns'
}

const App = () => {
	const [activePanel, setActivePanel] = useState(panel.desks)

	return (
		<View activePanel={activePanel}>

			<Panel id={panel.desks} separator={false}>
				<Desks onChangePanel={() => setActivePanel(panel.columns)}/>
			</Panel>

			<Panel id={panel.columns} separator={false}>
				<div>Панель колонок</div>
				<Button onClick={() => setActivePanel(panel.desks)}>Перейти к доскам</Button>
			</Panel>

		</View>
	);
};

export default App;

