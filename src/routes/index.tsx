import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerMenu from '../components/Drawer'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import CreateUser from '../pages/CreateUser'
import TestePage from '../pages/TestePage'

const Auth = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthRoutes: React.FC = () => (
        <Drawer.Navigator
            drawerContent={DrawerMenu}
            initialRouteName="Home"
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="CreateUser" component={CreateUser} />
            <Drawer.Screen name="TestePage" component={TestePage} />
        </Drawer.Navigator>
)

export default AuthRoutes;