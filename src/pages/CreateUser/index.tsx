import React, { useRef, useCallback } from 'react'
import logo from '../../assets/Logo.png'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Icon from 'react-native-vector-icons/Feather'
import {useNavigation} from '@react-navigation/native'
import {Form} from '@unform/mobile'
import {FormHandles} from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'

import {
    Image,
    KeyboardAvoidingView,
    Platform,
    View,
    ScrollView,
    Alert
} from 'react-native'

import {
    Container, 
    Title, 
    BackToLoginButton, 
    BackToLoginText 
} from './styles'

interface SignUpFormData {
    name: string;
    email: string;
    password: string;
}

const CreateUser: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const navigation = useNavigation();

    const handleSignUp = useCallback(
        async (data: SignUpFormData) => {
          formRef.current?.setErrors({});
    
          try {
            const schema = Yup.object().shape({
              name: Yup.string().required('Nome obrigatório'),
              email: Yup.string()
                .required('Email obrigatório')
                .email('Email fora dos padrões'),
              password: Yup.string().min(6, 'Minimo 6 digitos'),
            });
    
            await schema.validate(data, {
              abortEarly: false,
            });
    
            //await api.post('users', data);
    
            Alert.alert(
              'Cadastro realizado com sucesso!',
              'Você já pode fazer login na aplicação',
            );
    
            navigation.goBack();
          } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationErrors(err);
    
              formRef.current?.setErrors(errors);
    
              return;
            }
            Alert.alert(
              'Erro no cadastro',
              'Ocorreu um erro ao fazer o cadastro, tente novamente.',
            );
          }
        },
        [navigation],
      );

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
                        <Form ref={formRef} onSubmit={handleSignUp}>
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