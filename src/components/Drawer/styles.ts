import styled from 'styled-components/native'
import {FlatList} from 'react-native'

export const Container = styled.View`
    flex: 1;
`

export const FavoriteLinesView = styled.View`
    background: #070E3C;
    flex: 1;
`

export const TitleFavoritesLines = styled.Text`
    font-family: 'RobotoSlab-Medium';
    font-size: 24px;
    color: #fff;

    margin-left: 8px;
    margin-top: 8px;
`

export const FavoriteLinesList = styled(FlatList as new () => FlatList<string>)`
    width: 100%;
    margin-bottom: 24px;
    background: #fff;
`