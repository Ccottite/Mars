import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Locations = [
  { name: "Centro 14", position: [19.05215987587411, -98.20014994417494] },
  { name: "Xoxtla", position: [19.169798590886927, -98.31032665380769] },
  { name: "San Pablo", position: [19.11505002197057, -98.17405872882756] },
  { name: "Santa Ana", position: [19.311447835225902, -98.19833960475748] },
  { name: "San Cosme", position: [19.177451783820754, -98.19143358941706] },
  { name: "Tulancingo", position: [20.084887132300803, -98.36708340473456] },
  { name: "Forjadores", position: [19.077325053265135, -98.26477387592823] },
  { name: "Apizaco", position: [19.411225404660165, -98.1464274759185] },
  { name: "Amalucan", position: [19.042263209560417, -98.1434984018499] },
  { name: "Tehuacan", position: [18.45776262105768, -97.39386666853555] },
  { name: "Huamantla", position: [19.309653686630025, -97.92206650475757] },
  { name: "Tlaltepango", position: [19.11192235118616, -98.16306290737626] },
  { name: "San Martin", position: [19.286332263231824, -98.44013797561317] },
  { name: "Zacatelco", position: [19.209274137918932, -98.2410054179438] }
];

const Mapa = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          Aquí está tu ubicación.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
