import React, { useEffect, useState } from "react";
import mapMarkerImg from "../images/logo-white.svg";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import "../styles/pages/services-map.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import api from '../services/api';

import mapIcon from '../utils/mapicon';

interface Service {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function ServiceMaps() {
    const [services, setServices] = useState<Service[]>([]);
    
    useEffect(() => {
        api.get('services').then(response => {
            setServices(response.data);
        })
    }, []);
    
    return (
        <div className="page-map">
            <aside>
                <header>
                <Link to="/" className="home">
                    <img src={mapMarkerImg} alt="logo sem texto" /></Link>
                    <h2>Escolha uma instituição beneficente no mapa e ajude como puder!</h2>
                </header>

                <footer>
                    <strong>Porto Alegre</strong>
                    <span>Rio Grande do Sul</span>
                </footer>
            </aside>

            <Map
                center={[-30.0341, -51.2225383]}
                zoom={14}
                style={{ width: "100%", height: "100%" }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {/* <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                    /> */}
                

                {services.map(service => {
                    return (
                        <Marker
                        key={service.id}
                        icon={mapIcon}
                        position={[service.latitude, service.longitude]}
                    >
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
                            {service.name}
                            <Link to={`/services/${service.id}`}>
                                <AiOutlineRight size={30} color=" #1b9cfc"></AiOutlineRight>
                            </Link>
                            </Popup>
                        </Marker>
                    )
                })}

            </Map>

            <Link to="/services/create" className="create-service">
                <FiPlus size={32} color="#FFF"  />
            </Link>
        </div>
    );
}
    
export default ServiceMaps;
