import React, {useCallback, useRef} from 'react'
import {Image, KeyboardAvoidingView, Platform, View, ScrollView, TextInput} from 'react-native'
import logo from '../../assets/Logo.png'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Icon from 'react-native-vector-icons/Feather'
import {useNavigation} from '@react-navigation/native'
import {Form} from '@unform/mobile'
import {FormHandles} from '@unform/core'

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
    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const handleSignIn = useCallback((data:object) => {
        console.log(data)
    }, [])

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
                        <Form ref={formRef} onSubmit={handleSignIn}>
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
                                ref={passwordInputRef}
                                secureTextEntry
                                name="password" 
                                icon="lock" 
                                placeholder="Senha"
                                returnKeyType='send'
                                onSubmitEditing={() => {
                                    formRef.current?.submitForm()
                                }}
                            />

                            <Button onPress={() => {
                                formRef.current?.submitForm()
                                }
                            }>Entrar
                            </Button>
                        </Form>

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