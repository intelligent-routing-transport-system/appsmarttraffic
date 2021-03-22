import styled from 'styled-components/native'
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #673ab7;
`;

export const Header = styled.View`
    width: 100%;
    padding: 24px;
    background: #9474FF;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const BackToHomeButton = styled.TouchableOpacity``

export const MyProfileText = styled.Text`
    font-size: 26px;
    font-family: 'RobotoSlab-Regular';
    color: #fff;
`
export const ViewForm = styled.View`
    width: 100%;
    padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
    align-items: center;
`

export const ProfileButton = styled.TouchableOpacity`
    margin-top: 50px;
    margin-bottom: 26px;
`

export const UserAvatar = styled.Image`
    width: 186px;
    height: 186px;
    border-radius: 93px;
`