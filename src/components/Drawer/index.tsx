import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import {
    Container,
    ButtonsView,
    TouchButton
} from './styles'

const Drawer: React.FC = () => {
    return (
        <Container>
            <ButtonsView>
                <TouchButton>
                    <Icon name="star" size={26} color="#fff"/>
                </TouchButton>
                <TouchButton>
                    <Icon name="settings" size={26} color="#fff"/>
                </TouchButton>
            </ButtonsView>
        </Container>
    )
}

export default Drawer