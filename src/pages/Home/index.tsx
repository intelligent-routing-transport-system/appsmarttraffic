import React, {useState, useCallback, useRef} from 'react'
import {Form} from '@unform/mobile'
import {FormHandles} from '@unform/core'
import Icon from 'react-native-vector-icons/Feather'
import {useNavigation} from '@react-navigation/native'
import {TextInput, FlatList, Text} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {StyleSheet} from 'react-native'

import Input from '../../components/Input'

import {
    Container,
    Header,
    TouchButton,
    InfoContainer,
    InfoTimeNowText,
    InfoShowWayPointsView,
    InfoTimeNowView,
    InfoTimeRemainingText,
    WayPointsView,
    WayPonitTitle,
    WayPointsList,
    WayPointButton,
    WayPointView,
    WayPonitText,
    SearchWayPointView,
    SearchWayPointTouchButton,
    SearchWayPointsList,
    SearchWayPonitText,
    TitlesView,
    WayPointTitleTimeArive,
    WayPonitTitleDistance,
    WayPonitTitleName,
    SubViewTitles,
    IconCheckView

} from './styles'

export interface WayPoint {
    pointName: string;
}

export interface Route {
    routeId: number;
    routeName: string;
    wayPoints: WayPoint[];
}

const Home: React.FC = () => {
    const mapStyles = StyleSheet.create({
        container: {
          ...StyleSheet.absoluteFillObject,
          height: 100,
          width: 100,
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
        map: {
          ...StyleSheet.absoluteFillObject,
        },
       });

    const [routes, setRoutes]  = useState<Route[]>([
        {
            routeId: 1, 
            routeName: 'Linha 20', 
            wayPoints: [
            {pointName: 'ponto 1'}, 
            {pointName: 'ponto 2'}, 
            {pointName: 'ponto 3'},
            {pointName: 'ponto 4'}, 
            {pointName: 'ponto 5'}, 
            {pointName: 'ponto 6'}, 
            {pointName: 'ponto 7'}
        ]}
    ])

    const [teste, setTeste] = useState<string>('Linha 20');
    const [wayPoints, setWayPoints] = useState<WayPoint[] | undefined>([]);
    const [searchRoutes, setSearchRoutes] = useState<Route[]>([]);
    const [routePressed, setRoutePressed] = useState<string>('');

    const [showWayPoints, setShowWayPoint] = useState(false);
    const [showInfoContainer, setShowInfoContainer] = useState(false);

    const TextRef = useRef<Text>(null);
    const flatListRef = useRef<FlatList>(null);
    const formRef = useRef<FormHandles>(null);
    const searchInputRef = useRef<TextInput>(null);
    const navigation = useNavigation();

    const handleWayPoints = useCallback(() => {
        setShowWayPoint(!showWayPoints);
    },[showWayPoints, wayPoints])

    const search = useCallback((data: string) => {
        var values = routes.filter(x => x.routeName.toUpperCase().includes(data.toUpperCase()));
        
        if (data.length == 0){
            setSearchRoutes([]);
        }
        else{
            setSearchRoutes(values);
        }
    },[searchRoutes])

    const handleShowInfoContainer = useCallback(() => {
        console.log(routePressed);
        var route = searchRoutes.find(x => x.routeName == routePressed);
        console.log(route);
        setWayPoints(route?.wayPoints);
        setShowInfoContainer(!showInfoContainer);
        setSearchRoutes([]);
    },[showInfoContainer, searchRoutes])

    return (
    <>
        <MapView
            provider={PROVIDER_GOOGLE}
            style={mapStyles.map}
            region={{
                latitude: -23.703629,
                longitude: -46.54796,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                }}
            >
        </MapView>
        <Container>
            <Header>
                <Form ref={formRef} onSubmit={handleShowInfoContainer}>
                    <Input 
                        name="search"
                        icon="map"
                        placeholder="Pesquisar"
                        onChangeText={search}
                        ref={searchInputRef}
                    />
                    <SearchWayPointsList
                        ref={flatListRef}
                        data={searchRoutes}
                        keyExtractor={(searchRoutes) => searchRoutes.routeName}
                        renderItem={({item}) => (
                            <SearchWayPointView>
                                <SearchWayPointTouchButton 
                                    onPress={
                                        () => {
                                            setRoutePressed(item.routeName);
                                            formRef.current?.submitForm();
                                        }
                                }>
                                    <SearchWayPonitText ref={TextRef}>{item.routeName}</SearchWayPonitText>
                                </SearchWayPointTouchButton>
                            </SearchWayPointView>
                        )}
                    />
                </Form>
                <TouchButton onPress={() => {
                    navigation.openDrawer();
                }}>
                    <Icon name="grid" size={26} color="#FFC66C"/>
                </TouchButton>
            </Header>
        </Container>
        <InfoContainer showInfoContainer={showInfoContainer}>
            <InfoShowWayPointsView>
                <TouchButton onPress={handleWayPoints}>
                    <Icon name="map-pin" size={40} color="#FFC66C"/>
                </TouchButton>
            </InfoShowWayPointsView>
            <InfoTimeNowView>
                <InfoTimeNowText>Previsão de chegada: 10h30</InfoTimeNowText>
                <InfoTimeRemainingText>Distancia: 30m</InfoTimeRemainingText>
            </InfoTimeNowView>      
        </InfoContainer>  
                
        <WayPointsView showWayPoints={showWayPoints}>     
            <WayPointButton onPress={handleWayPoints}>
                <Icon name="arrow-down" size={26} color="#FFC66C"/>
            </WayPointButton>
            <TitlesView>
                <WayPointTitleTimeArive>18h60</WayPointTitleTimeArive>
                <SubViewTitles>
                    <WayPonitTitleDistance>Direção</WayPonitTitleDistance>
                    <WayPonitTitleName>Quimicos</WayPonitTitleName>
                </SubViewTitles>
            </TitlesView>
            <WayPointsList
                data={wayPoints}
                keyExtractor={(wayPoints) => wayPoints.pointName}
                renderItem={({item}) => (
                        <WayPointView>
                            <IconCheckView>
                                <Icon name="check" size={18} color="#fff"/>
                            </IconCheckView>
                            <WayPonitText>{item.pointName}</WayPonitText>
                        </WayPointView>
                )}
            />
        </WayPointsView>
    </>
    )
}

export default Home;