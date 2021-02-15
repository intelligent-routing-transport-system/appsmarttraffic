import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { exp } from 'react-native-reanimated';

import Login from '../pages/Login'
import CreateUser from '../pages/CreateUser'

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: '#7159c1'}
        }}
    >
        <Auth.Screen name="Login" component={Login}/>
        <Auth.Screen name="CreateUser" component={CreateUser}/>
    </Auth.Navigator>
)

export default AuthRoutes;