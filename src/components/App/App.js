import React, { useState } from 'react';
// import bridge from '@vkontakte/vk-bridge';
import { View, Panel, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Desks from '../../panels/Desks/Desks';
import Columns from '../../panels/Columns/Columns';

const panel = {
	desks: 'desks',
	columns: 'columns'
}

const App = () => {
	const [activePanel, setActivePanel] = useState(panel.columns)

	return (
		<View activePanel={activePanel}>

			<Panel id={panel.desks} separator={false}>
				<Desks onChangePanel={() => setActivePanel(panel.columns)}/>
			</Panel>

			<Panel id={panel.columns} separator={false} className="Columns">
				<Columns onChangePanel={() => setActivePanel(panel.desks)}/>
			</Panel>
		</View>
	);
};

export default App;

