import styled, {css} from 'styled-components/native'
import {FlatList} from 'react-native'
import {WayPoint, Route} from './index'

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

    background: #232129;

    border: 0.5px;
    border-color: #fff;

    align-items: center;
    justify-content: center;  
`

export const InfoContainer = styled.View<InfoContainerViewProps>`
    width: 100%;
    height: 140px;

    margin-bottom: 8px;

    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    ${props => props.showInfoContainer && css`
        opacity: 1;
    `}
    ${props => !props.showInfoContainer && css`
        opacity: 0;
    `}
`

export const InfoBusView = styled.View`
    width: 100%;
    height: 140px;
    background: #232129;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border: 1px;
    border-color: #9474FF;

    flex: 1;
    align-items: center;
    justify-content: center;
`

export const InfoBusText = styled.Text`
    color: #9474FF;
    font-size: 20px;
    font-family: 'RobotoSlab-Regular';
`

export const InfoTimeNowView = styled.View`
    height: 100%;
    align-items: center;
    justify-content: center;
    background: #232129;
    border: 1px;
    border-color: #9474FF;
    padding: 50px;
    flex: 1;
`

export const InfoTimeNowText = styled.Text`
    font-size: 26px;
    font-family: 'RobotoSlab-Regular';
    color: #fff;
`

export const InfoTimeRemainingView = styled.View`
    width: 100%;
    height: 140px;
    background: #232129;
    border: 1px;
    border-color: #9474FF;

    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;

    justify-content: center;
    align-items: center;
    flex: 1;
`

export const InfoTimeRemainingText = styled.Text`
    font-size: 18px;
    font-family: 'RobotoSlab-Regular';
    color: #fff;
`

export const ContainerWayPoints = styled.View`
    align-items: center;
`

export const WayPointButton = styled.TouchableOpacity`
    width: 52px;
    height: 52px;
    border-radius: 26px;
    background: #232129;
    bottom: 26px;

    border: 0.5px;
    border-color: #9474FF;

    align-items: center;
    justify-content: center;
`

export const WayPointsView = styled.View<WayPointViewProps>`
    width: 100%;
    background: #232129;

    align-items: center;

    border: 0.5px;
    border-color: #9474FF;

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

export const WayPonitTitle = styled.Text`
    font-size: 26px;
    font-family: 'RobotoSlab-Regular';
    color: #fff;
    bottom: 10px;
`
export const WayPointView = styled.View`
    border-bottom-width: 1px;
    border-color: #9474FF;
    align-items: center;
    justify-content: center;
    padding: 8px;
`
export const WayPonitText = styled.Text`
    font-size: 18px;
    font-family: 'RobotoSlab-Regular';
    color: #fff;
`

export const WayPointsList = styled(FlatList as new () => FlatList<WayPoint>)`
    width: 80%;
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