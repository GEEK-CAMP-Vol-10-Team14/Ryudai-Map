import React, { useState, useEffect }  from 'react';
import { MapContainer, TileLayer, Marker, Popup, ImageOverlay } from 'react-leaflet'
import './Map.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41],
    popupAnchor: [0, -32],
});
L.Marker.prototype.options.icon = DefaultIcon;

// GPS用のアイコン
const GPSIcon = L.divIcon({
    className: 'GPS-marker',
    html: '<div></div>',
    iconSize: [15, 15],
    iconAnchor: [7.5, 7.5], // アイコンの中心に位置を設定
});

// 現在地を表示するためのカスタムフック
const useCurrentLocation = () => {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        if (!navigator.geolocation) {
        console.error("Geolocation is not supported by your browser");
        return;
        }
        const updatePosition = (position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]);
        };
        const geoId = navigator.geolocation.watchPosition(updatePosition, console.error, {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
        });
        return () => navigator.geolocation.clearWatch(geoId);
    }, []);
    return position;
};

const CurrentLocationMarker = () => {
    const position = useCurrentLocation();
    return position ? (
        <Marker position={position} icon={GPSIcon}>
        </Marker>
        ) : null;
};

export const Map = () => {
  // 緯度軽度
    const position = [26.252590, 127.766111];
  // 初期マップズームレベル
    const zoom = 18;
    // 画像のURLと画像を表示する地理的範囲
    const imageUrl = 'https://ul.h3z.jp/Bx4pqLV3.PNG';
    const imageBounds = [
        [26.254183843420073, 127.76381958397214],
        [26.251230739885845, 127.76853133709768]

    ];
    const max_zoom = 22;
    const min_zoom = 18;
    const max_bounds = [
        [26.254183843420073, 127.76381958397214],
        [26.251230739885845, 127.76853133709768]
    ];


    return (
    <MapContainer center={position} zoom={zoom} maxZoom={max_zoom} minZoom={min_zoom} maxBounds={max_bounds}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
        <Marker position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        <CurrentLocationMarker />
        <ImageOverlay url={imageUrl} bounds={imageBounds}/>
    </MapContainer>
)
};