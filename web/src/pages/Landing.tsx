import React from "react";
import "../styles/pages/landing.css";
import logoImg from "../images/logo.svg";
import { Link } from "react-router-dom";
import logoMarker from '../images/map-marker-icon.svg'

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img className="logo "src={logoImg} alt="logo" />
                <main>
                    <h1>Faça a diferença em</h1>
                    <h2>Porto Alegre</h2>
                    <p>Escolha uma <strong>instituição beneficente</strong> em sua cidade e veja como você pode dar uma mão!</p>
                </main>
                <div className="location">
                    <strong>Porto Alegre</strong>
                    <span>Rio Grande do Sul</span>
                    <img className="logo-marker "src={logoMarker} alt="logo-marker" />
                </div>                
                <Link to="/app" className="page-landing--CTA">
                    <button>Comece a ajudar!</button>
                    </Link>
                    
            </div>
            <footer>
                <div className="footer">
                    <h4>© 2020. Desenvolvido por <a target="_blank" rel="noopener noreferrer" href="https://github.com/mottamatheus">Matheus Motta</a> durante a Semana RocketWeek #3.</h4>
                </div>
            </footer>
            
        </div>
    );
}

export default Landing;
