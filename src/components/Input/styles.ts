import styled, {css} from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { useIsFocused } from '@react-navigation/native'

interface ContainerProps {
    isFocused: boolean
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 60px;
    background: #232129;
    padding: 0 16px;
    border-radius: 10px;
    margin-top: 8px;
    border-width: 2px;
    border-color: #232129;

    ${props => props.isFocused && css`
        border-color: #9474FF
    `}

    flex-direction: row;
    align-items: center;
`

export const TextInput = styled.TextInput`
    flex:1;
    color: #fff;
    font-size: 16px;
    font-family: 'RobotoSlab-Regular';
`

export const Icon = styled(FeatherIcon)`
    margin-right:16px;
`