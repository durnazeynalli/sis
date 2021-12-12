import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';

import { selectAuthStatus } from '../redux/auth';
import { Drawer } from '../components/Drawer/Drawer';

import { HomeStack } from './Stacks/HomeStack';
import { ClassStack } from './Stacks/ClassStack';
import { CalendarStack } from './Stacks/CalendarStack';
import { MessageStack } from './Stacks/MessageStack';
import { MaterialsStack } from './Stacks/MaterialsStack';
import { SettingsStack } from './Stacks/SettingsStack';
import { FeedbackStack } from './Stacks/FeedbackStack';
import { AuthStack } from './Stacks/AuthStack';

const mapStateToProps = (state) => ({
	auth: selectAuthStatus(state)
});

const { Screen, Navigator } = createDrawerNavigator();

export const RootDrawer = connect(mapStateToProps)(({ auth }) => {
	return (
		<NavigationContainer>
			{auth ? (
				<Navigator
					drawerStyle={{ width: 300 }}
					drawerContent={(props) => {
						return <Drawer {...props} />;
					}}
					drawerStyle={{ width: 250 }}
				>
					<Screen name="HomeStack" component={HomeStack} />
					<Screen name="ClassStack" component={ClassStack} />
					<Screen name="CallendarStack" component={CalendarStack} />
					<Screen name="MessagesStack" component={MessageStack} />
					<Screen name="MaterialsStack" component={MaterialsStack} />
					<Screen name="Settings" component={SettingsStack} />
					<Screen name="Feedback" component={FeedbackStack} />
				</Navigator>
			) : (
				<Navigator>
					<Screen
						name="AuthStack"
						component={AuthStack}
						options={{
							swipeEnabled: false
						}}
					/>
				</Navigator>
			)}
		</NavigationContainer>
	);
});
