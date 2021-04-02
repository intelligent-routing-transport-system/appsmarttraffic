import React, { useCallback } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import {useNavigation} from  '@react-navigation/native'

import {
    Container,
    FavoriteLinesView,
    TitleFavoritesLines,
    FavoriteLinesList
} from './styles'

const Drawer: React.FC = ({navigation}) => {
    return (
        <Container>
            <FavoriteLinesView>
                <TitleFavoritesLines>Linhas Favoritas</TitleFavoritesLines>
            </FavoriteLinesView>
        </Container>
    )
}

export default Drawer;