import React, { useState } from 'react';
// import bridge from '@vkontakte/vk-bridge';
import { View, Panel } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Desks from '../../panels/Desks/Desks';
import Columns from '../../panels/Columns/Columns';

const panel = {
	desks: 'desks',
	columns: 'columns'
}

const App = () => {
	const [activePanel, setActivePanel] = useState(panel.desks);
	const goToColumns = () => setActivePanel(panel.columns);
	const goToDesks = () => setActivePanel(panel.desks);

	return (
		<View activePanel={activePanel}>

			<Panel id={panel.desks} separator={false}>
				<Desks onChangePanel={goToColumns}/>
			</Panel>

			<Panel id={panel.columns} separator={false} className="Columns">
				<Columns goBack={goToDesks}/>
			</Panel>
		</View>
	);
};

export default App;

