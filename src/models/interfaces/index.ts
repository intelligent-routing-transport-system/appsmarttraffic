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
    pointName: string;
}

export interface Route {
    routeId: number;
    routeName: string;
    wayPoints: WayPoint[];
}

export interface HistoryLinesInterface {
    routeName: string;
    routeId: string;
}