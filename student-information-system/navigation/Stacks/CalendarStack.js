import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CalendarScreen } from '../../screens';

const { Navigator, Screen } = createStackNavigator();

export const CalendarStack = () => {
    return (
        <Navigator headerMode={"none"}>
            <Screen name="Calendar" component={CalendarScreen} />
        </Navigator>
    );
};
