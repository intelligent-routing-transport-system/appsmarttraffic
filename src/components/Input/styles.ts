import styled, {css} from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { useIsFocused } from '@react-navigation/native'

interface ContainerProps {
    isFocused: boolean;
    isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
    margin-top: 8px;
    width: 100%;
    height: 60px;
    background: #070E3C;
    padding: 0 16px;
    border-radius: 12px;
    border-width: 1px;
    border-color: #232129;

    ${props => props.isErrored && css`
        border-color: #c53030;
    `}

    ${props => props.isFocused && css`
        border-color: #FFC66C;
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