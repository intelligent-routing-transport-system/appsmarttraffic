import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image } from 'react-native'

import {
    Container,
    Header,
    HeaderTitle,
    UserName,
    ProfileButton,
    UserAvatar,
} from './styles'

const Home: React.FC = () => {
    const {navigate} = useNavigation();

    return (
        <Container>
            <Header>
                <HeaderTitle>
                    Bem vindo, {'\n'}
                    <UserName>Gustavo Lotto Cardoso</UserName>
                </HeaderTitle>
                <ProfileButton onPress={() => navigate('Profile')}>
                    <UserAvatar source={{uri: 'https://avatars.githubusercontent.com/u/40375560?s=460&v=4'}}/>
                </ProfileButton>
            </Header>
        </Container>
    )
}

export default Home;