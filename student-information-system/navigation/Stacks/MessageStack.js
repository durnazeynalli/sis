import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MessageScreen, PriviteMessageScreen } from '../../screens';

const { Navigator, Screen } = createStackNavigator();

export const MessageStack = () => {
	return (
		<Navigator headerMode={'none'}>
			<Screen name="Messages" component={MessageScreen} />
			<Screen name="PriviteChat" component={PriviteMessageScreen} />
		</Navigator>
	);
};
