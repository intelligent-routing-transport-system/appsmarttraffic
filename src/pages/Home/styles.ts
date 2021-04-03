import styled, {css} from 'styled-components/native'
import {FlatList} from 'react-native'
import {WayPoint, Route, HistoryLinesInterface} from '../../models/interfaces'

interface WayPointViewProps {
    showWayPoints: boolean;
}

interface InfoContainerViewProps {
    showInfoContainer: boolean;
}

export const Container = styled.View`
    height: 100%;
    flex:1;
    padding: 8px 8px 8px 8px;
`

export const Header = styled.View`
    
`

export const MapView = styled.View`
`

export const TouchButton = styled.TouchableOpacity`
    width: 52px;
    height: 52px;
    border-radius: 26px;

    background: #070E3C;

    align-items: center;
    justify-content: center;  
`

export const TouchButtonMarkBlockPoint = styled.TouchableOpacity`
    width: 52px;
    height: 52px;
    border-radius: 26px;

    background: #070E3C;

    align-items: center;
    justify-content: center;  

    margin-top: 8px;
`

export const InfoView = styled.View`
    align-items: center;
`

export const InfoContainer = styled.View<InfoContainerViewProps>`
    height: 120px;
    width: 100%;

    margin-bottom: 8px;

    align-items: center;
    flex-direction: row;

    ${props => props.showInfoContainer && css`
        opacity: 1;
    `}
    ${props => !props.showInfoContainer && css`
        opacity: 0;
    `}
`

export const InfoBusText = styled.Text`
    color: #9474FF;
    font-size: 20px;
    font-family: 'RobotoSlab-Regular';
`

export const InfoTimeNowView = styled.View`
    height: 100%;    
    justify-content: center;
    background: #070E3C;

    border-width: 0.5px;

    flex: 1;
`

export const InfoTimeNowText = styled.Text`
    font-size: 18px;
    font-family: 'RobotoSlab-Regular';
    color: #fff;
    margin-left: 16px;
`

export const InfoShowWayPointsView = styled.View`
    height: 120px;
    width: 100px;
    background: #070E3C;
    border: 0.5px;
    border-color: #fff;

    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;

    justify-content: center;
    align-items: center;
`

export const InfoTimeRemainingText = styled.Text`
    font-size: 18px;
    font-family: 'RobotoSlab-Medium';
    color: #fff;
    margin-left: 16px;
`

export const InfoCloseView = styled.View`
    width: 100px;
    height: 120px;

    background: #070E3C;
    border: 0.5px;
    border-color: #fff;

    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    
    align-items: center;
    justify-content: center;
`

export const WayPointsView = styled.View<WayPointViewProps>`
    width: 100%;
    background: #070E3C;

    align-items:center;

    border-top-left-radius: 26px;
    border-top-right-radius: 26px;

    ${props => props.showWayPoints == true && css`
        height: 400px;
        opacity: 100;
        bottom: 0px;
    `
    }

    ${props => props.showWayPoints == false && css`
        opacity: 100;
        height: 0;
        bottom: -400px;
    `}
`

export const WayPointButton = styled.TouchableOpacity`
    width: 52px;
    height: 52px;
    border-radius: 26px;
    background: #FFC66C;
    bottom: 26px;

    align-items: center;
    justify-content: center;
`

export const WayPonitTitle = styled.Text`
    font-size: 26px;
    font-family: 'RobotoSlab-Regular';
    color: #fff;
    bottom: 10px;
`
export const WayPointView = styled.View`
    padding: 16px;
    align-items: center;
    flex-direction: row;
`
export const WayPonitText = styled.Text`
    font-size: 18px;
    font-family: 'RobotoSlab-Regular';
    color: #fff;
    margin-left: 16px;
`

export const WayPointsList = styled(FlatList as new () => FlatList<WayPoint>)`
    margin-top: 16px;
    width: 60%;
    margin-bottom: 24px;
`

export const SearchWayPointView = styled.View`
    border-bottom-width: 1px;
    border-color: #c1c1c1;
    align-items: center;
    justify-content: center;
    padding: 16px;
`

export const SearchWayPointsList = styled(FlatList as new () => FlatList<Route>)`
    width: 100%;
    margin-bottom: 24px;
    background: #fff;
`

export const SearchWayPointTouchButton = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
`

export const SearchWayPonitText = styled.Text`
    font-size: 18px;
    font-family: 'RobotoSlab-Regular';
    color: #000;
`

export const TitlesView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const SubViewTitles = styled.View`
`

export const WayPointTitleTimeArive = styled.Text`
    color: #fff;
    font-size: 46px;
    font-family: 'RobotoSlab-Medium';
    margin-right: 16px;
`

export const WayPonitTitleDistance = styled.Text`
    color: #C1C1C1;
    font-size: 18px;
    font-family: 'RobotoSlab-Medium';
`

export const WayPonitTitleName = styled.Text`
    color: #fff;
    font-size: 18px;
    font-family: 'RobotoSlab-Medium';
`

export const IconCheckView = styled.View`
    height: 24px;
    width: 24px;
    border-radius: 12px;
    background: #FF9000;
    align-items: center;
    justify-content: center;
`

export const FavoriteLinesView = styled.View`
    width:70%;
    height: 100%;
    background: #070E3C;
    flex: 1;

    padding: 0 16px;
    position: absolute;
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
`

export const HistoryLinesList = styled(FlatList as new () => FlatList<HistoryLinesInterface>)`
    width: 100%;
    margin-bottom: 24px;
`

export const HistoryLines = styled.View`
    height: 50%;
`

export const CreateBlockPointView = styled.ScrollView`
    width:100%;
    height: 50%;
    background: #070E3C;
    flex: 1;

    padding: 0 26px;

    position: absolute;
    bottom: 0;
`

export const TitleCreateBlockPoint = styled.Text`
    font-family: 'RobotoSlab-Medium';
    font-size: 24px;
    color: #fff;

    margin-left: 8px;
    margin-top: 8px;
`

export const TitleDescriptionBlockPoint = styled.Text`
    font-family: 'RobotoSlab-Medium';
    font-size: 18px;
    color: #c1c1c1;

    margin-top: 8px;
    margin-left: 8px;
    margin-bottom: 8px;
`

export const BlockPointLocationView = styled.View` 
    align-items: center;
`

export const TouchButtonExitCreateBlockPoint = styled.TouchableOpacity`
    width: 52px;
    height: 52px;
    border-radius: 26px;

    background: #FFC66C;

    align-items: center;
    justify-content: center;  

    margin-top: 16px;
`