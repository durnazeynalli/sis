// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { HomeStack } from './HomeStack';
// import { Footer } from '../components';
// import { ClassStack } from './ClassStack';
// import { CalendarStack } from './CalendarStack';
// import { ICONS_LIGHT } from '../styles/iconsLight';
// import { MessageStack } from './MessageStack';
// import { NoteBookStack } from './NoteBookStack';

// const { Navigator, Screen } = createBottomTabNavigator();

// export const RootTabs = () => (
// 	<Navigator
		// screenOptions={
			//({ route }) => ({
		// 	tabBarIcon: ({ focused, color, size }) => {
		// 		let iconName = null;
		// 		if (route.name === 'CalendarScreen') {
		// 			iconName = ICONS_LIGHT.calendarLight;
		// 		} else if (route.name === 'Class') {
		// 			iconName = ICONS_LIGHT.bookmarkLight;
		// 		} else if (route.name === 'Feed') {
		// 			iconName = ICONS_LIGHT.menuLight;
		// 		} else if (route.name === 'Message') {
		// 			iconName = ICONS_LIGHT.sendLight;
		// 		} else if (route.name === 'Note') {
		// 			iconName = ICONS_LIGHT.notebookLight;
		// 		}
		// 		return <Footer icon={iconName} />;
		// 	}
		// })}
// 	>
// 		<Screen name="CalendarScreen" component={CalendarStack} options={{ title: '' }} />
// 		<Screen name="Class" component={ClassStack} options={{ title: '' }} />
// 		<Screen name="Feed" component={HomeStack} options={{ title: '' }} />
// 		<Screen name="Message" component={MessageStack} options={{ title: '' }} />
// 		<Screen name="Note" component={NoteBookStack} options={{ title: '' }} />
// 	</Navigator>
// );
