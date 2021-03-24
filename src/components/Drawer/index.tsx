import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import {useNavigation} from  '@react-navigation/native'

import {
    Container,
    ButtonsView,
    TouchButton,
    SettingsView,
    TouchButtonPages,
    TouchButtonPagesText,
    ProfileButton,
    UserAvatar
} from './styles'

const Drawer: React.FC = ({navigation}) => {

    return (
        <Container>
            <ButtonsView>
                <TouchButton>
                    <Icon name="star" size={26} color="#fff"/>
                </TouchButton>
                <TouchButton>
                    <Icon name="settings" size={26} color="#fff"/>
                </TouchButton>
            </ButtonsView>
            <SettingsView>
                <ProfileButton onPress={() => navigation.navigate('Profile')}>
                    <UserAvatar source={{uri: 'https://avatars.githubusercontent.com/u/40375560?s=460&u=1baef2dd4322406964f8b8a6f7138c312ddf48b3&v=4'}}/>
                </ProfileButton>
                <TouchButtonPages onPress={() => navigation.navigate('Home')}>
                    <TouchButtonPagesText>Home</TouchButtonPagesText>
                </TouchButtonPages>
                <TouchButtonPages onPress={() => navigation.navigate('Login')}>
                    <TouchButtonPagesText>Login</TouchButtonPagesText>
                </TouchButtonPages>
                <TouchButtonPages>
                    <TouchButtonPagesText>Logout</TouchButtonPagesText>
                </TouchButtonPages>
            </SettingsView>
        </Container>
    )
}

export default Drawer