import React from 'react';
import Icon from  'react-native-vector-icons/Feather';
import { Image } from 'react-native';
import {Form} from '@unform/mobile';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
    Container,
    ProfileButton,
    UserAvatar,
    Header,
    BackToHomeButton,
    MyProfileText,
    ViewForm,
} from './styles'
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
    const {navigate} = useNavigation();
    return (
        <Container>
                <Header>
                    <BackToHomeButton onPress={() => navigate('Home')}>
                        <Icon name="arrow-left" size={26} color="#fff"/>
                    </BackToHomeButton>

                    <MyProfileText>Meu Perfil</MyProfileText>

                    <BackToHomeButton onPress={() => navigate('Login')}>
                        <Icon name="power" size={26} color="#fff"/>
                    </BackToHomeButton>
                </Header>
                <ViewForm>
                    <ProfileButton onPress={() => {}}>
                        <UserAvatar source={{uri: 'https://avatars.githubusercontent.com/u/40375560?s=460&v=4'}}/>
                    </ProfileButton>
                    <Form onSubmit={() => {}}>
                        <Input 
                            autoCapitalize='words'
                            returnKeyType='next'
                            name="name" 
                            icon="user" 
                            placeholder="Nome"
                        />
                        <Input 
                            autoCorrect={false}
                            autoCapitalize='none'
                            keyboardType='email-address'
                            name="email" 
                            icon="mail" 
                            placeholder="Email"
                            returnKeyType='next'
                        />
                        <Input 
                            secureTextEntry
                            name="password" 
                            icon="lock" 
                            placeholder="Senha"
                            returnKeyType='send'
                        />
                        <Button onPress={() => {}}>Salvar</Button>
                    </Form>
                </ViewForm>
        </Container>
    )
}

export default Home;