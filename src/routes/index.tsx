import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { exp } from 'react-native-reanimated';

import Login from '../pages/Login'
import CreateUser from '../pages/CreateUser'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: '#7159c1'}
        }}
        initialRouteName="Profile"
    >
        <Auth.Screen name="Login" component={Login}/>
        <Auth.Screen name="CreateUser" component={CreateUser}/>
        <Auth.Screen name="Home" component={Home}/>
        <Auth.Screen name="Profile" component={Profile}/>
    </Auth.Navigator>
)

export default AuthRoutes;