import React, { useState, useCallback, useRef, useEffect } from 'react';
import { TextInput, FlatList, Text, PermissionsAndroid, Alert } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import { apiBlockPoint, apiRoute } from '../../services/api';
import { StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { v4 } from 'react-native-uuid';
import Dialog from 'react-native-dialog';
import AsyncStorage from '@react-native-community/async-storage'
import messaging from '@react-native-firebase/messaging';
import { map_style } from './MapStyle/styles'

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
    BlockPoint,
    BlockPointDatabase,
    GeoLocalization,
    Route,
    WayPoint,
    LinesInterface
} from '../../models/interfaces'

import {
    Container,
    Header,
    InfoView,
    TouchButton,
    InfoContainer,
    InfoTimeNowText,
    InfoShowWayPointsView,
    InfoTimeNowView,
    InfoTimeRemainingText,
    InfoCloseView,
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
    IconCheckView,
    FavoriteLinesView,
    FavoriteLinesList,
    TitleFavoritesLines,
    HistoryLines,
    HistoryLinesList,
    TouchButtonMarkBlockPoint,
    CreateBlockPointView,
    TitleCreateBlockPoint,
    TitleDescriptionBlockPoint,
    BlockPointLocationView,
    TouchButtonExitCreateBlockPoint

} from './styles'

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

    const [routes, setRoutes]  = useState<Route[]>([]);
    const [blockPoints, setBlockPoints] = useState<BlockPoint[]>([])
    const [favoritesLines, setFavoritesLines] = useState<LinesInterface[]>([])
    const [historyLines, setHistoryLines] = useState<LinesInterface[]>([])
    const [routePressed, setRoutePressed] = useState<Route>();

    const [wayPoints, setWayPoints] = useState<WayPoint[] | undefined>([]);
    const [searchRoutes, setSearchRoutes] = useState<Route[]>([]);
    const [currentLocation, setCurrentLocation] = useState<GeoLocalization>({latitude: -23.703629, longitude: -46.54796,});

    const [showWayPoints, setShowWayPoint] = useState(false);
    const [showInfoContainer, setShowInfoContainer] = useState(false);
    const [showFavoritsList, setShowFavoritsList] = useState(false);
    const [showCreateBlockPoint, setShowCreateBlockPoint] = useState(false);
    const [showCreateBlockPointDialog, setShowCreateBlockPointDialog] = useState(false);

    const TextRouteNameRef = useRef<Text>(null);
    const TextRef = useRef<Text>(null);
    const flatListRef = useRef<FlatList>(null);
    const formRef = useRef<FormHandles>(null);
    const searchInputRef = useRef<TextInput>(null);
    const createBlockPointDescriptionInputRef = useRef<TextInput>(null);
    const createBlockPointLatitudeInputRef = useRef<TextInput>(null);
    const createBlockPointLongitudeInputRef = useRef<TextInput>(null);
    //const navigation = useNavigation();

    useEffect(()=> {
        messaging().subscribeToTopic('incidents_opened').then((response) => {
            console.log(response);            
        });

        messaging().subscribeToTopic('incidents_closed').then((response) => {
            console.log(response);            
        });

        const subscribe = messaging().onMessage(async remoteMessage => {
            console.log(remoteMessage);
            console.log('TESTE 1');
            Alert.alert('Aviso !', 'Recalculando Rota');
          });

        return subscribe;
    },[])

    useEffect(() => {
            (async function() {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: "Smart Traffic App Permission",
                        message:
                            "Smart Traffic App needs access your Location ",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK"
                    }
                );

                if (granted == "granted"){
                    Geolocation.getCurrentPosition(infos => {
                        setCurrentLocation({
                            latitude: infos.coords.latitude,
                            longitude: infos.coords.longitude
                        })
                    })
                };
                
                var responseBlockPoint = await apiBlockPoint.get('api/incident');
                setBlockPoints(responseBlockPoint.data);

                var responseRoutes = await apiRoute.get('routes');
                setRoutes(responseRoutes.data);

                let hasLine = true;
                let count = 1;

                while (hasLine){
                    const routeName = await AsyncStorage.getItem('@FavoriteLines:' + String(count));
                    if (!routeName){
                        hasLine = false;
                    }
                    else {
                        const line: LinesInterface = {
                            routeId: String(v4()),
                            routeName: routeName,
                        }
                        setFavoritesLines([...favoritesLines, line])
                    }
                    count++;
                }
        })
        ();
    }, [])

    const handleShowViews = useCallback((
        wayPointView: boolean | null, 
        infoContainerView: boolean | null, 
        favoritsListView: boolean | null, 
        createBlockPointView: boolean | null
        ) => {
            setShowWayPoint((wayPointView != null) ? wayPointView : showWayPoints);
            setShowInfoContainer((infoContainerView != null) ? infoContainerView: showInfoContainer);
            setShowFavoritsList((favoritsListView != null) ? favoritsListView : showFavoritsList);
            setShowCreateBlockPoint((createBlockPointView != null) ? createBlockPointView : showCreateBlockPoint);
        },[showWayPoints, showInfoContainer, showFavoritsList, showCreateBlockPoint])

    const handleWayPoints = useCallback(() => {
        setShowWayPoint(!showWayPoints);
    },[showWayPoints, wayPoints])

    const search = useCallback((data: string) => {
        var values = routes.filter(x => x.name.toUpperCase().includes(data.toUpperCase()));
        if (data.length == 0){
            setSearchRoutes([]);
        }
        else{
            setSearchRoutes(values);
        }
    },[searchRoutes])

    const handleShowInfoContainer = useCallback((routePressed) => {
        var route = searchRoutes.find(x => x.name == routePressed);
        setRoutePressed(route);
        setWayPoints(route?.waypoints);
        setShowInfoContainer(true);
        setSearchRoutes([]);
        setHistoryLines([...historyLines, {routeId: String(v4()),routeName: routePressed}]);
    },[showInfoContainer, searchRoutes, routePressed])

    const handleCancelRoute = useCallback(() => {
        setShowInfoContainer(false);
        setWayPoints([]);
    },[])

    const handleSetFavoriteLines = useCallback((data) => {(
        async function () {
            let count = 1;
            const routeName = (TextRouteNameRef.current._internalFiberInstanceHandleDEV.child.memoizedProps);
            var favoriteLinesCache: LinesInterface = {
                routeId: String(v4()),
                routeName: String(routeName)
            }
            setFavoritesLines([...favoritesLines, favoriteLinesCache]);

            favoritesLines.forEach(line => {
                (async function (){
                    await AsyncStorage.setItem('@FavoriteLines:' + String(count), line.routeName);
                    count++;
                })
                ();
            });
        }
        ()
    )},[favoritesLines])

    const createBlockPoint = useCallback((data: string) => {
        (async function(){
            var blockPointDatabase: BlockPointDatabase = {
                category: "traffic_accident",
                description: data["block-point-description"],
                loc: {
                    coordinates:[
                        Number(data["block-point-latitude"]),
                        Number(data["block-point-longitude"])
                    ],
                    type: "Point"
                }
            }

            await apiBlockPoint.post('api/incident/register', blockPointDatabase)

            var blockPoint: BlockPoint = {
                _id: String(v4()),
                category: blockPointDatabase.category,
                description: blockPointDatabase.description,
                loc: {
                    coordinates: blockPointDatabase.loc.coordinates,
                    type: blockPointDatabase.loc.type,
                }
            } 

            setBlockPoints([...blockPoints, blockPoint])

            Alert.alert("Sucesso !","Ponto bloqueante criado na sua localização")

            setShowCreateBlockPoint(false);
        })
        ()
    },[showCreateBlockPoint])
    
    return (
    <>
        <MapView
            onTouchStart={() => handleShowViews(false, null, false, false)}
            showsCompass={true}
            showsScale={true}
            showsIndoors={true}
            followsUserLocation={true}
            zoomEnabled={true}
            zoomControlEnabled={true}
            showsMyLocationButton={true}
            provider={PROVIDER_GOOGLE}
            style={mapStyles.map}
            customMapStyle={map_style}
            region={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                }}
            >
            <Polyline
                coordinates={[
                    {
                        latitude: -23.695036,
                        longitude: -46.550052
                    },
                    {
                        latitude: -23.710285,
                        longitude: -46.553201
                    },
                    {
                        latitude: -23.715068,
                        longitude: -46.551844
                    },
                    {
                        latitude: -23.703629,
                        longitude: -46.54796
                    }
            ]}
                strokeColor="#c5ff"
                fillColor="#c5ff"
                strokeWidth={4}
            />
            {blockPoints.map(marker => (
                <Marker
                    coordinate={{
                        latitude: marker.loc.coordinates[0],
                        longitude: marker.loc.coordinates[1]
                    }}
                    title={marker.description}
                    key={marker._id}
                />
            ))}    
        </MapView>  
        <Container>
            <Header>
                <Form ref={formRef} onSubmit={() => {}}>
                    <Input 
                        name="search"
                        icon="map"
                        placeholder="Pesquisar"
                        onChangeText={search}
                        onTouchStart={() => handleShowViews(false, null, false, false)}
                        ref={searchInputRef}
                    />
                    <SearchWayPointsList
                        ref={flatListRef}
                        data={searchRoutes}
                        keyExtractor={(searchRoutes) => searchRoutes.name}
                        renderItem={({item}) => (
                            <SearchWayPointView>
                                <SearchWayPointTouchButton 
                                    onPress={() => {
                                            handleShowInfoContainer(item.name);
                                        }
                                }>
                                <SearchWayPonitText ref={TextRef}>{item.name}</SearchWayPonitText>
                                </SearchWayPointTouchButton>
                            </SearchWayPointView>
                        )}
                    />
                </Form>
                <TouchButton onPress={() => {
                    setShowFavoritsList(true);
                }}>
                    <IconMaterial name="star" size={26} color="#FFC66C"/>
                </TouchButton>
                <TouchButtonMarkBlockPoint onPress={() => {
                    setShowCreateBlockPoint(true);
                }}>
                    <IconMaterial name='wrong-location' size={26} color="#FFC66C"/>
                </TouchButtonMarkBlockPoint>
            </Header>
        </Container>


        {showInfoContainer && (
            <InfoView>
                <InfoContainer showInfoContainer={showInfoContainer}>
                    <InfoShowWayPointsView>
                        <TouchButton style={{backgroundColor: '#FFC66C'}} onPress={handleWayPoints}>
                            <IconMaterial name="directions-bus" size={40} color="#000"/>
                        </TouchButton>
                    </InfoShowWayPointsView>
                    <InfoTimeNowView>
                        <InfoTimeNowText>Linha: {routePressed?.name}</InfoTimeNowText>
                        <InfoTimeRemainingText>Distancia: 30m</InfoTimeRemainingText>
                    </InfoTimeNowView> 
                    <InfoCloseView>
                        <TouchButton 
                            onPress={handleSetFavoriteLines}
                            style={{backgroundColor: '#FFC66C'}}
                        >
                            <IconMaterial name="star" size={26}/>
                        </TouchButton>
                    </InfoCloseView>   
                </InfoContainer>  
                        
                <WayPointsView showWayPoints={showWayPoints}>     
                    <WayPointButton onPress={handleWayPoints}>
                        <IconFeather name="arrow-down" size={26} color="#000"/>
                    </WayPointButton>
                    <TitlesView>
                        <WayPointTitleTimeArive>18h60</WayPointTitleTimeArive>
                        <SubViewTitles>
                            <WayPonitTitleDistance>Direção</WayPonitTitleDistance>
                            <WayPonitTitleName ref={TextRouteNameRef}>{routePressed?.name}</WayPonitTitleName>
                        </SubViewTitles>
                    </TitlesView>
                    <WayPointsList
                        data={wayPoints}
                        keyExtractor={(wayPoints) => wayPoints.id_waypoint}
                        renderItem={({item}) => (
                                <WayPointView>
                                    <IconCheckView>
                                        <IconFeather name="check" size={18} color="#fff"/>
                                    </IconCheckView>
                                    <WayPonitText>{item.name_waypoint}</WayPonitText>
                                </WayPointView>
                        )}
                    />
                </WayPointsView>
            </InfoView>
        )}
        

        {showFavoritsList && (
            <FavoriteLinesView>
                <TouchButtonExitCreateBlockPoint onPress={() => setShowFavoritsList(false)}>
                    <IconFeather name="arrow-left" size={26} color="#000"/>
                </TouchButtonExitCreateBlockPoint>
                <TitleFavoritesLines>Linhas Favoritas</TitleFavoritesLines>
                <FavoriteLinesList
                    data={favoritesLines}
                    keyExtractor={(favoritesLines) => favoritesLines.routeId}
                    renderItem={({item}) => (
                            <WayPointView>
                                    <IconFeather name="star" size={18} color="#FFC66C"/>
                                <WayPonitText>{item.routeName}</WayPonitText>
                            </WayPointView>
                    )}
                />
                <HistoryLines>
                    <TitleFavoritesLines>Histórico de Linhas</TitleFavoritesLines>
                    <HistoryLinesList
                        data={historyLines}
                        keyExtractor={(historyLines) => historyLines.routeId}
                        renderItem={({item}) => (
                                <WayPointView>
                                        <IconFeather name="star" size={18} color="#FFC66C"/>
                                    <WayPonitText>{item.routeName}</WayPonitText>
                                </WayPointView>
                        )}
                    />
                </HistoryLines>
            </FavoriteLinesView>
        )}


        {showCreateBlockPoint && (
            <CreateBlockPointView>
                <TouchButtonExitCreateBlockPoint onPress={() => setShowCreateBlockPoint(false)}>
                    <IconFeather name="arrow-left" size={26} color="#000"/>
                </TouchButtonExitCreateBlockPoint>
                <TitleCreateBlockPoint>Reportar Ponto Bloqueante na sua localização</TitleCreateBlockPoint>
                <Form ref={formRef} onSubmit={createBlockPoint}>
                    <TitleDescriptionBlockPoint>Latitude</TitleDescriptionBlockPoint>
                    <Input
                        name="block-point-latitude"
                        icon="navigation-2"
                        value={String(currentLocation.latitude)}
                        defaultValue={String(currentLocation.latitude)}
                        editable={false}
                        ref={createBlockPointLatitudeInputRef}
                    />
                    <TitleDescriptionBlockPoint>Longitude</TitleDescriptionBlockPoint>
                    <Input
                        name="block-point-longitude"
                        icon="navigation-2"
                        value={String(currentLocation.longitude)}
                        defaultValue={String(currentLocation.longitude)}
                        editable={false}
                        ref={createBlockPointLongitudeInputRef}
                    />
                    <TitleDescriptionBlockPoint>Descrição</TitleDescriptionBlockPoint>
                    <Input
                        name="block-point-description"
                        icon="type"
                        placeholder="Descrição"
                        ref={createBlockPointDescriptionInputRef}
                    />
                    <Button onPress={() => {
                        formRef.current?.submitForm();
                    }}>Criar</Button>
                    {showCreateBlockPointDialog && (
                        <Dialog.Container visible={true}>
                            <Dialog.Title>Account delete</Dialog.Title>
                            <Dialog.Description>
                                Do you want to delete this account? You cannot undo this action.
                            </Dialog.Description>
                            <Dialog.Button label="Cancel" onPress={() => {}}/>
                            <Dialog.Button label="Delete" onPress={() => {}}/>
                        </Dialog.Container>
                    )}
                </Form>
            </CreateBlockPointView>
        )}
    </>
    )
}

export default Home;