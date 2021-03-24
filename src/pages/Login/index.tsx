import React, {useCallback, useRef} from 'react'
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
    KeyboardAvoidingView, 
    Platform, 
    View, 
    ScrollView, 
    TextInput, 
    Alert
} from 'react-native'

import {
    Container, 
    Title, 
    ForgotPassword, 
    ForgotPasswordText, 
    CreateAccountText, 
    CreateAccountButton,
    Logo
} from './styles'

interface SignInFormData {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const navigation = useNavigation();
    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null);

    const handleSignIn = useCallback(
        async (data: SignInFormData) => {
          formRef.current?.setErrors({});
          try {
            const schema = Yup.object().shape({
              email: Yup.string()
                .required('Email obrigatório')
                .email('Email fora dos padrões'),
              password: Yup.string().required('Senha obrigatória'),
            });
    
            await schema.validate(data, {
              abortEarly: false,
            });
    
            // await signIn({
            //   email: data.email,
            //   password: data.password,
            // });
          } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationErrors(err);
    
              formRef.current?.setErrors(errors);
    
              return;
            }
            Alert.alert(
              'Erro na autenticação',
              'Ocorreu um erro ao fazer o login, cheque as credenciais.',
            );
          }
        },
        //[signIn],
        []
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
                        <Logo source={logo}/>
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