import React from 'react'
import { Map, TileLayer, Marker, Popup} from "react-leaflet";
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js'
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css'
import './override.css'
const DEFAULT_LONGITUDE = 96.1735;
const DEFAULT_LATTITUDE = 16.8409;

const LeafLetMap = () => {
    return (
         <Map center={[DEFAULT_LATTITUDE, DEFAULT_LONGITUDE]} zoom={12} fullscreenControl={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[DEFAULT_LATTITUDE, DEFAULT_LONGITUDE]}>
                <Popup>
                    JJ UK Consultancy
                </Popup>
            </Marker>
        </Map>
    )
}

export default LeafLetMap
