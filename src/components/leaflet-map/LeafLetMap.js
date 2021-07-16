import React from 'react'
import { Map, TileLayer, Marker, Popup} from "react-leaflet";
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js'
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css'
import './override.css'
const DEFAULT_LONGITUDE = -0.11685715939989468;
const DEFAULT_LATTITUDE = 51.54163030745804;

const LeafLetMap = () => {
    return (
         <Map center={[DEFAULT_LATTITUDE, DEFAULT_LONGITUDE]} zoom={12} fullscreenControl={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[DEFAULT_LATTITUDE, DEFAULT_LONGITUDE]}>
                <Popup>
                    JJ UK Accountancy
                </Popup>
            </Marker>
        </Map>
    )
}

export default LeafLetMap
