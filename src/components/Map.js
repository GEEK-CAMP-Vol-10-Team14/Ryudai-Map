import React from 'react';
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



export const Map = () => {
  // 緯度軽度
    const position = [26.252590, 127.766111];
  // 初期マップズームレベル
    const zoom = 18;
    // 画像のURLと画像を表示する地理的範囲
    const imageUrl = 'https://ul.h3z.jp/GPD9DT5o.PNG';
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
        <ImageOverlay url={imageUrl} bounds={imageBounds}/>
    </MapContainer>
)
};