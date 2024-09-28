import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Importar Leaflet para manejar los íconos
import 'leaflet/dist/leaflet.css';
import icon from '../../assets/iconos/map-marker.png'; // Importa la imagen local

//configuración del icono
const customIcon = new L.Icon({
  iconUrl: icon,
  iconSize: [25, 25],
  iconAnchor: [15, 50],
  popupAnchor: [0, -50],
});

//agrega la ubicación de la sucursal más la información adicional
const Locations = [
  { name: "Sucursal Centro 14", position: [19.05215987587411, -98.20014994417494], address: "7 nte esq. 14 Pte 7 Norte 701, Centro Histórico, 72000 Heroica Puebla de Zaragoza, Pue.", cel: "2222320632", phone: "2228335234", hours: "Lun-Vie 9:00 am a 6:00 pm" },
  { name: "Sucursal Xoxtla", position: [19.169798590886927, -98.31032665380769], address: "Av. Benito Juárez 12-A, San Miguel Xoxtla, 72620 Puebla, Pue.", cel: "2222790177", phone: "2215805204", hours: "Lun-Vie 9:00 am a 6:00 pm" },
  { name: "Sucursal San Pablo", position: [19.11505002197057, -98.17405872882756], address: "7 nte esq. 14 Pte 7 Norte 701, Centro Histórico, 72000 Heroica Puebla de Zaragoza, Pue.", cel: "2222320632", phone: "2228335234", hours: "Lun-Vie 9:00 am a 6:00 pm" },
  { name: "Sucursal Santa Ana", position: [19.311447835225902, -98.19833960475748], address: "7 nte esq. 14 Pte 7 Norte 701, Centro Histórico, 72000 Heroica Puebla de Zaragoza, Pue.", cel: "2222320632", phone: "2228335234", hours: "Lun-Vie 9:00 am a 6:00 pm" },
  { name: "Sucursal San Cosme", position: [19.177451783820754, -98.19143358941706], address: "7 nte esq. 14 Pte 7 Norte 701, Centro Histórico, 72000 Heroica Puebla de Zaragoza, Pue.", cel: "2222320632", phone: "2228335234", hours: "Lun-Vie 9:00 am a 6:00 pm" },
  { name: "Sucursal Tulancingo", position: [20.084887132300803, -98.36708340473456], address: "7 nte esq. 14 Pte 7 Norte 701, Centro Histórico, 72000 Heroica Puebla de Zaragoza, Pue.", cel: "2222320632", phone: "2228335234", hours: "Lun-Vie 9:00 am a 6:00 pm" },
  { name: "Sucursal Forjadores", position: [19.077325053265135, -98.26477387592823], address: "7 nte esq. 14 Pte 7 Norte 701, Centro Histórico, 72000 Heroica Puebla de Zaragoza, Pue.", cel: "2222320632", phone: "2228335234", hours: "Lun-Vie 9:00 am a 6:00 pm" },
  { name: "Sucursal Apizaco", position: [19.411225404660165, -98.1464274759185], address: "7 nte esq. 14 Pte 7 Norte 701, Centro Histórico, 72000 Heroica Puebla de Zaragoza, Pue.", cel: "2222320632", phone: "2228335234", hours: "Lun-Vie 9:00 am a 6:00 pm" },
  { name: "Sucursal Amalucan", position: [19.042263209560417, -98.1434984018499], address: "7 nte esq. 14 Pte 7 Norte 701, Centro Histórico, 72000 Heroica Puebla de Zaragoza, Pue.", cel: "2222320632", phone: "2228335234", hours: "Lun-Vie 9:00 am a 6:00 pm" },
  { name: "Sucursal Tehuacan", position: [18.45776262105768, -97.39386666853555], address: "7 nte esq. 14 Pte 7 Norte 701, Centro Histórico, 72000 Heroica Puebla de Zaragoza, Pue.", cel: "2222320632", phone: "2228335234", hours: "Lun-Vie 9:00 am a 6:00 pm" },
  { name: "Sucursal Huamantla", position: [19.309653686630025, -97.92206650475757], address: "7 nte esq. 14 Pte 7 Norte 701, Centro Histórico, 72000 Heroica Puebla de Zaragoza, Pue.", cel: "2222320632", phone: "2228335234", hours: "Lun-Vie 9:00 am a 6:00 pm" },
  { name: "Sucursal Tlaltepango", position: [19.11192235118616, -98.16306290737626], address: "7 nte esq. 14 Pte 7 Norte 701, Centro Histórico, 72000 Heroica Puebla de Zaragoza, Pue.", cel: "2222320632", phone: "2228335234", hours: "Lun-Vie 9:00 am a 6:00 pm" },
  { name: "Sucursal San Martin", position: [19.286332263231824, -98.44013797561317], address: "7 nte esq. 14 Pte 7 Norte 701, Centro Histórico, 72000 Heroica Puebla de Zaragoza, Pue.", cel: "2222320632", phone: "2228335234", hours: "Lun-Vie 9:00 am a 6:00 pm" },
  { name: "Sucursal Zacatelco", position: [19.209274137918932, -98.2410054179438], address: "7 nte esq. 14 Pte 7 Norte 701, Centro Histórico, 72000 Heroica Puebla de Zaragoza, Pue.", cel: "2222320632", phone: "2228335234", hours: "Lun-Vie 9:00 am a 6:00 pm" }
];

//contenedor del mapa más "Popup" para configurar lo que aparece en la carta como telefono, nombre etc.
const Mapa = () => {
  return (
    <MapContainer center={[19.194806139233997, -98.27463402644018]} zoom={10} style={{ height: "500px", width: "100%", zIndex: 0 }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {Locations.map((location, index) => (
        <Marker
          key={index}
          position={location.position}
          icon={customIcon} // Asignar ícono personalizado estático
        >
          <Popup>
            <div>
              <h3>{location.name}</h3>
              {location.address && <p><strong>Dirección:</strong> {location.address}</p>}
              {location.phone && <p><strong>Teléfono:</strong> {location.phone}</p>}
              {location.cel && <p><strong>WhatsApp:</strong> {location.cel}</p>}
              {location.hours && <p><strong>Horario:</strong> {location.hours}</p>}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Mapa;
