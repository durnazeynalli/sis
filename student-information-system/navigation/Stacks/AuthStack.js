import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthLogInScreen } from '../../screens/AuthLogInScreen';
import { AuthSingUpScreen } from '../../screens/AuthSignUpScreen';

const { Navigator, Screen } = createStackNavigator();

export const AuthStack = () => {
	return (
		<Navigator headerMode={'none'}>
			<Screen name="LogIn" component={AuthLogInScreen} />
         <Screen name ='SignUp' component={AuthSingUpScreen}/>
		</Navigator>
	);
};
