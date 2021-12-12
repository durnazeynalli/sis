import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {MaterialsScreen} from '../../screens/MaterialsScreen';


const { Navigator, Screen } = createStackNavigator();

export const MaterialsStack = () => {
    return (
        <Navigator headerMode={"none"}>
            <Screen name="MaterialsStack" component={MaterialsScreen} />
        </Navigator>
    );
};


