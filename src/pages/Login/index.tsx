import React from 'react'
import {Image, KeyboardAvoidingView, Platform, View, ScrollView} from 'react-native'
import logo from '../../assets/Logo.png'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Icon from 'react-native-vector-icons/Feather'
import {useNavigation} from '@react-navigation/native'

import {
    Container, 
    Title, 
    ForgotPassword, 
    ForgotPasswordText, 
    CreateAccountText, 
    CreateAccountButton
} from './styles'

const Login: React.FC = () => {
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
                            <Title>Faça seu login</Title>
                        </View>

                        <Input name="email" icon="mail" placeholder="Email"/>
                        <Input name="password" icon="lock" placeholder="Senha"/>

                        <Button onPress={() => {}}>Entrar</Button>

                        <ForgotPassword onPress={() => {}}>
                            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                        </ForgotPassword>
                    </Container>
                    <CreateAccountButton onPress={() => navigation.navigate('CreateUser')}>
                        <Icon name="log-in" size={20} color="#000"/>
                        <CreateAccountText>Criar uma conta</CreateAccountText>
                    </CreateAccountButton>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
        
    )
}

export default Login;