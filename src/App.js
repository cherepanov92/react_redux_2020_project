import React, { useState } from 'react';
// import bridge from '@vkontakte/vk-bridge';
import { View, Panel,Button  } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

const panel = {
	desks: 'desks',
	columns: 'columns'
}

const App = () => {
	const [activePanel, setActivePanel] = useState(panel.desks)

	return (
		<View activePanel={activePanel}>

			<Panel id={panel.desks}>
				<div>Панель досок</div>
				<Button onClick={() => setActivePanel(panel.columns)}>Перейти к колонкам</Button>
			</Panel>

			<Panel id={panel.columns}>
				<div>Панель колонок</div>
				<Button onClick={() => setActivePanel(panel.desks)}>Перейти к доскам</Button>
			</Panel>

		</View>
	);
};

export default App;

