import React, { useEffect } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [latitude, longitude, zoom] = [40.63074362868856, 22.948167094858167, 12];
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const mapElement = document.getElementById("map");
    const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed&key=${apiKey}`;

    mapElement.innerHTML = `<iframe width="400" height="300" frameborder="0" scrolling="no" src="${mapUrl}"></iframe>`;
  }, [latitude, longitude, zoom, apiKey]);

  return (
    <section className="contact">
      <div className="location">
        <div id="map" style={{ width: "15vw", height: "10vh" }} className="map"></div>
        <div className="information">Διεύθυνση:Τσιμισκή 45</div>
      </div>
    </section>
  );
};

export default Contact;
