import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useParams } from 'react-router-dom';

import mapIcon from '../utils/mapicon';
import api from '../services/api';
import Sidebar from "../components/SideBar";

import '../styles/pages/service.css';

interface Service {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface ServicesParams {
  id: string;
}

export default function Service() {
  const params = useParams<ServicesParams>();
  const [service, setService] = useState<Service>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
    
    useEffect(() => {
        api.get(`services/${params.id}`).then(response => {
            setService(response.data);
        })
    }, [params.id]);

    if (!service) {
      return <p>Carregando...</p>
    }

  return (
    <div id="page-service">
      <Sidebar />

      <main>
        <div className="service-details">
          <img src={service.images[activeImageIndex].url} alt={service.name} />

          <div className="images">
            {
              service.images.map((image, index)=> {
                return (
                  <button 
                    key={image.id} 
                    className={activeImageIndex === index ? 'active' : ''}
                    type="button"
                    onClick={() => {
                      setActiveImageIndex(index)
                    }}
                    >
                    <img src={image.url} alt={service.name} />
                  </button>  
                )
              })
            }
          </div>
          
          <div className="service-details-content">
            <h1>{service.name}</h1>
            <p>{service.about}</p>

            <div className="map-container">
              <Map 
                center={[service.latitude, service.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker interactive={false} icon={mapIcon} position={[service.latitude, service.longitude]}  />
              </Map>

              <footer>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${service.latitude}, ${service.longitude}`}>Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{service.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#1b9cfc " />
                Segunda à Sexta <br />
                {service.opening_hours}
              </div>
              { service.open_on_weekends ? (
              <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                fim de semana
              </div>) : (
                
              <div className="closed-weekend">
              <FiInfo size={32} color="#FF669D" />
              Não atendemos <br />
              aos fins de semana
            </div>
              ) }
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}