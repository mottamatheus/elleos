import React, { FormEvent, useState, ChangeEvent } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiPlus } from "react-icons/fi";
import mapIcon from '../utils/mapicon';
import '../styles/pages/create-service.css';
import Sidebar from "../components/SideBar";
import { LeafletMouseEvent } from 'leaflet';
import api from "../services/api";
import { useHistory } from 'react-router-dom';


export default function CreateOrphanage() {
  const history = useHistory();

  const [ position, setPosition ] = useState( { latitude: 0, longitude: 0});

  const [name, setName ] = useState('');
  const [about, setAbout ] = useState('');
  const [instructions, setInstructions ] = useState('');
  const [opening_hours, setOpeningHours ] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([])

  function handleMapClick(event: LeafletMouseEvent) {
     const { lat, lng } = event.latlng;

     setPosition({
      latitude: lat,
      longitude: lng 
     })
    
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {

    if(!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('longitude', String(longitude));
    data.append('latitude', String(latitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));
    images.forEach(image => {
      data.append('images', image);
    })

    await api.post('services', data);

    alert('Cadastro realizado com sucesso!');

    history.push('/app');
  }

  return (
    <div id="page-create-service">
      <Sidebar />

      <main>
        <form className="create-service-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-30.0341, -51.2225383]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
               <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

               { position.latitude !== 0 && ( 
               <Marker 
                  interactive={false} 
                  icon={mapIcon} 
                  position={[position.latitude, position.longitude]} /> 
              ) }

            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input 
                value={name} 
                onChange={event => setName(event.target.value)} 
                id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea 
                value={about} 
                onChange={event => setAbout(event.target.value)} 
                id="about" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map(image => {
                  return (
                    <img key={image} src={image} alt={name}/>
                  )
                })}



                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
                
              </div>
              <input multiple onChange={handleSelectImages} type="file" name="" id="image[]"/>

              
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea 
                value={instructions} 
                onChange={event => setInstructions(event.target.value)} 
                id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de Atendimento</label>
              <input 
                id="opening_hours"
                value={opening_hours} 
                onChange={event => setOpeningHours(event.target.value)}  />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button 
                  type="button" 
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}>
                    Sim
                </button>
                <button 
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}>
                    Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
