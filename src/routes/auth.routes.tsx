import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../Screens/Signin'; 

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator >
            <Screen
                name="SignIn"
                component={SignIn}
            />
        </Navigator>
    )
}