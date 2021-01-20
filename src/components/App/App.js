import React, { Fragment } from 'react';
import { View, Panel } from '@vkontakte/vkui';
import { useRoute } from "react-router5";

import Desks from '../../panels/Desks/Desks';
import Columns from '../../panels/Columns/Columns';
import { panel } from './constants';
import { useAppState } from './hooks';

const App = () => {
	const { activePanel, popout, activeDesk } = useAppState();
	const { route } = useRoute();

	console.log(route);

	return (
		<Fragment>
			<View activePanel={activePanel} header={false} popout={popout}>
				<Panel id={panel.desks} separator={false}>
					<Desks />
				</Panel>

				<Panel id={panel.columns} separator={false} className="Columns">
					{activeDesk && <Columns />}
				</Panel>
			</View>
		</Fragment>
	);
};

export default App;
