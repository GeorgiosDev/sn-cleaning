import React from "react";
import GoogleMapReact from 'google-map-react';
import "../styles/footer.css";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import mail from "../assets/images/gmail.png"
import phone from "../assets/images/telephone.png"

const Footer = () => {

    const mapOptions = {
        center: {
            lat: 40.643526898695356,
            lng: 22.915229381900776
        },
        zoom: 15
    };

    const Marker = () => (
        <div style={{ color: 'red', fontWeight: 'bold', fontSize: '16px' }}>
            <i className="fas fa-map-marker-alt"></i>
        </div>
    );

    return (
        <footer className="footer-distributed">
            <h3 style={{ marginBottom: '10px' }}>SN <span>Cleaning solutions</span></h3>
            <div className="footer-left">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" >
                    <img src={instagram} alt="instagram" className="sm-icon" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <img src={facebook} alt="facebook" className="sm-icon" />
                </a>
                <a href="mailto:sncleaning83@gmail.com"   >
                    <img src={mail} alt="gmail" className="sm-icon" />
                </a>
                    <a href="tel:6982038675"  >
                        <img src={phone} alt="phone" className="sm-icon"/>
                    </a>
            </div>          
            <div className="footer-right">
                <div style={{ height: '200px', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }} 
                        defaultCenter={mapOptions.center}
                        defaultZoom={mapOptions.zoom}
                    >
                        <Marker
                            lat={mapOptions.center.lat}
                            lng={mapOptions.center.lng}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
