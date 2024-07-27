import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ImageOverlay } from 'react-leaflet';
import './Map.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import zihank_icon from './zihanki.jpg'
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// デフォルトアイコンの設定
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41],
    popupAnchor: [0, -32],
});
L.Marker.prototype.options.icon = DefaultIcon;

// カスタムアイコンの設定
const smallRedIcon = L.icon({
    iconUrl: icon, // カスタムアイコンのURLを設定できます
    shadowUrl: iconShadow,
    iconSize: [18, 30], // 小さくする
    iconAnchor: [9, 30],
    popupAnchor: [0, -30],
    className: 'custom-icon-red' // CSSクラスを追加して色を変える
});

const zihanki = L.icon({
    iconUrl: zihank_icon, // カスタムアイコンのURLを設定できます
    iconSize: [18, 30], // 小さくする
    iconAnchor: [9, 30],
    popupAnchor: [0, -30],
});

export const Map = () => {
  // 緯度軽度
    const position = [26.252590, 127.766111];
    const one = [26.25326, 127.76633];
    const two = [26.25269, 127.76641];
    const three = [26.25208, 127.76685];
    const four = [26.25249, 127.76747];
    const tisou = [26.25319, 127.76585];
    const kitasyoku = [26.25175, 127.76591];
    const tisou_hanbaiki = [26.25331, 127.76596];
    const itigou_hanbaiki = [26.25331, 127.76643];
  
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
            <Marker position={one}>
                <Popup>工学部1号館</Popup>
            </Marker>
            <Marker position={two}>
                <Popup>工学部2号館</Popup>
            </Marker>
            <Marker position={three}>
                <Popup>工学部3号館</Popup>
            </Marker>
            <Marker position={four}>
                <Popup>工学部4号館</Popup>
            </Marker>
            <Marker position={tisou}>
                <Popup>琉球大学地域創生総合研究棟</Popup>
            </Marker>
            <Marker position={kitasyoku}>
                <Popup>北食堂</Popup>
            </Marker>
            <Marker position={tisou_hanbaiki} icon={zihanki}>
                <Popup>販売機 'Coca-Cola'</Popup>
            </Marker>
            <Marker position={itigou_hanbaiki} icon={zihanki}>
                <Popup>販売機 'Asahi'</Popup>
            </Marker><Marker position={tisou_hanbaiki} icon={zihanki}>
                <Popup>販売機 'Coca-Cola'</Popup>
            </Marker>
            <Marker position={itigou_hanbaiki} icon={zihanki}>
                <Popup>販売機 'Asahi'</Popup>
            </Marker>
            <ImageOverlay url={imageUrl} bounds={imageBounds}/>

        </MapContainer>
    );
};

