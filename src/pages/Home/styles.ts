import styled from 'styled-components/native'

export const Container = styled.View`
    flex:1;
`

export const Header = styled.View`
    padding: 24px;
    background: #9474FF;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const HeaderTitle = styled.Text`
    color: #fff;
    font-size: 20px;
    font-family: 'RobotoSlab-Regular';
    line-height: 28px;
`

export const UserName = styled.Text`
    color: #3b2e65;
    font-family: 'RobotoSlab-Medium';    
`
export const ProfileButton = styled.TouchableOpacity`

`

export const UserAvatar = styled.Image`
    width: 56px;
    height: 56px;
    border-radius: 28px;
`
