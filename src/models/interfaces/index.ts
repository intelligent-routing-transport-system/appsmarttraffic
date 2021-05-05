export interface BlockPointDatabase {
    loc:{
        type: string
        coordinates: [number, number];
    }
    category: string;
    description: string;
}

export interface BlockPoint {
    _id: string;
    coords:{
        latitude: number;
        longitude: number;
    }
    description: string;
}

export interface GeoLocalization{
    latitude: number;
    longitude: number;
}

export interface WayPoint {
    _id: string;
    id_waypoint: string;
    name_waypoint: string;
}

export interface Route {
    _id: string;
    name: string;
    waypoints: [{
        _id: string;
        id_waypoint: string;
        name_waypoint: string;
    }];
}

export interface LinesInterface {
    routeName: string;
    routeId: string;
}

export interface RouteGeoLocation {
    latitude: number,
    longitude: number
}