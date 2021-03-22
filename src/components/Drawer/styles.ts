import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
`

export const ButtonsView = styled.View`
    justify-content: space-between;
    flex-direction: row;
`

export const TouchButton = styled.TouchableOpacity`
    width: 140px;
    height:80px;

    background: #9474FF;
    align-items: center;
    justify-content: center;
`

export const ProfileButton = styled.TouchableOpacity`
    margin-top: 50px;
    margin-bottom: 26px;

    align-items: center;
    justify-content: center;
`

export const UserAvatar = styled.Image`
    width: 186px;
    height: 186px;
    border-radius: 93px;
`

export const SettingsView = styled.View`
    background: #775be2;
    flex: 1;
`

export const TouchButtonPages = styled.TouchableOpacity`
    margin-top: 20px;
    align-items: center;
    justify-content: center;
`

export const TouchButtonPagesText =styled.Text`
    font-size: 24px;
    color: #fff;
`