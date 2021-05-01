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
    loc:{
        type: string
        coordinates: [number, number];
    }
    category: string;
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
    id: string;
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
