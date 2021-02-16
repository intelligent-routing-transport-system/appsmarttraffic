import React, { useRef } from 'react'
import {Image, KeyboardAvoidingView, Platform, View, ScrollView} from 'react-native'
import logo from '../../assets/Logo.png'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Icon from 'react-native-vector-icons/Feather'
import {useNavigation} from '@react-navigation/native'
import {Form} from '@unform/mobile'
import {FormHandles} from '@unform/core'

import {Container, Title, BackToLoginButton, BackToLoginText } from './styles'

const CreateUser: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
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
                        <Form ref={formRef} onSubmit={() => {}}>
                            <Input 
                                autoCapitalize='words'
                                returnKeyType='next'
                                name="name" 
                                icon="user" 
                                placeholder="Nome"
                            />
                            <Input 
                                keyboardType='email-address'
                                autoCapitalize='none'
                                autoCorrect={false}
                                returnKeyType='next'
                                name="email" 
                                icon="mail" 
                                placeholder="Email"/>
                            <Input 
                                secureTextEntry
                                returnKeyType='send'
                                name="password" 
                                icon="lock" 
                                placeholder="Senha"
                                onSubmitEditing={() => {
                                    formRef.current?.submitForm();
                                }}
                            />

                            <Button onPress={() => {
                                formRef.current?.submitForm();
                            }}>Criar</Button>
                        </Form>
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