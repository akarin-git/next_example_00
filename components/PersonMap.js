import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

function PersonMap({longitude,latitude }) {
    const pinIcon = L.icon ({
        iconUrl:
            "https://res.cloudinary.com/kiyopikko/image/upload/v1561616038/marker_di3ojx.svg",
        shadowUrl:
            "https://res.cloudinary.com/kiyopikko/image/upload/v1561616038/marker-shadow_cpdzbh.png",
        iconSize: [18, 25],
        iconAnchor: [0, 0],
        shadowSize: [26, 20],
        shadowAnchor: [0, -5],
    });
    const position = [latitude,longitude];
    //  const position = [51.505, -0.09];

    return(
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}　style={{height : '100%'}}>
            <TileLayer 
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            />
            <Marker position={position} icon={pinIcon}></Marker>
        </MapContainer>
    );
}

export default PersonMap;