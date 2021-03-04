import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from  '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerMenu from '../components/Drawer'

import Home from '../pages/Home'

const Auth = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthRoutes: React.FC = () => (
        <Drawer.Navigator
            drawerContent={DrawerMenu}
            initialRouteName="Home"
        >
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
)

// const AuthRoutes: React.FC = () => (
//     <Auth.Navigator
//         screenOptions={{
//             headerShown: false,
//             cardStyle: {backgroundColor: '#7159c1'}
//         }}
//         initialRouteName="Home"
//     >
//         <Auth.Screen name="Home" component={Home}/>
//     </Auth.Navigator>
// )

export default AuthRoutes;