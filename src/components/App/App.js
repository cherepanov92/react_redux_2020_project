import React from 'react';
import { View, Panel } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
// import bridge from '@vkontakte/vk-bridge';

import Desks from '../../panels/Desks/Desks';
import Columns from '../../panels/Columns/Columns';
import Context from './context';
import { panel } from './constants';
import { useAppState } from './hooks';

const App = () => {
	const state = useAppState();

	return (
		<Context.Provider value={state}>
			<View activePanel={state.activePanel} header={false}>
				<Panel id={panel.desks} separator={false}>
					<Desks />
				</Panel>

				<Panel id={panel.columns} separator={false} className="Columns">
					{state.activeDesk && <Columns />}
				</Panel>
			</View>
		</Context.Provider>
	);
};

export default App;
