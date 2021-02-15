import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 16px;
`

export const ForgotPasswordText = styled.Text`
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
  color: #fff;
`

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 16px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const CreateAccountText = styled.Text`
  color: #000;
  font-family: "RobotoSlab-Regular";
  font-size: 18px;
  margin-left: 16px;
`