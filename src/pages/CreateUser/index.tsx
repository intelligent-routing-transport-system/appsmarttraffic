import React from 'react'
import {Image, KeyboardAvoidingView, Platform, View, ScrollView} from 'react-native'
import logo from '../../assets/Logo.png'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Icon from 'react-native-vector-icons/Feather'
import {useNavigation} from '@react-navigation/native'

import {Container, Title, BackToLoginButton, BackToLoginText } from './styles'

const CreateUser: React.FC = () => {
    const navigation = useNavigation();

    return (
        <>
            <KeyboardAvoidingView 
                style={{flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    contentContainerStyle={{flex: 1}}
                >
                    <Container>
                        <Image source={logo}/>

                        <View>
                            <Title>Faça seu cadastro</Title>
                        </View>

                        <Input name="name" icon="user" placeholder="Nome"/>
                        <Input name="email" icon="mail" placeholder="Email"/>
                        <Input name="password" icon="lock" placeholder="Senha"/>

                        <Button onPress={() => {}}>Criar</Button>
                    </Container>

                    <BackToLoginButton onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={20} color="#fff"/>
                        <BackToLoginText>Voltar para tela de Login</BackToLoginText>
                    </BackToLoginButton>
                    
                </ScrollView>
            </KeyboardAvoidingView>
        </>
        
    )
}

export default CreateUser;