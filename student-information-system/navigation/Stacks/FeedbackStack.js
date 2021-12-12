import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {ClassScreen, FeedbackScreen} from "../../screens";

const { Navigator, Screen } = createStackNavigator();

export const FeedbackStack = () => {
    return (
        <Navigator headerMode={"none"}>
            <Screen name="Feedback" component={ FeedbackScreen } />
        </Navigator>
    );
};
