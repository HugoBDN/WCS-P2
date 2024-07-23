/* eslint-disable no-restricted-syntax */
import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./map.css";
import Layout from "../Layout/Layout";
import useGeoLocation from "../../Hook/useGeolocation";
// import { useLocation } from "react-router-dom";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "60vh",
};

function Map() {
  const { lat, long } = useGeoLocation();
  console.log(useGeoLocation);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCB86o5KkLkDk9XF4PEAmMLJVewhqT8X5A",
    libraries,
  });
  const center = {
    lat, // default latitude
    lng: long, // default longitude
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <Layout>
      <div className="reserve">
        <div className="loc">
          <input type="text" name="lieu" placeholder="Lieu de stationnement" />
        </div>

        {/* <div className="input">
          <input type="date" name="dateEntrée " placeholder="Début" />
          <input type="time" name="heureEntée" placeholder="Heure" />
        </div>
        <div className="input">
          <input type="date" name="dateSortie" placeholder="Fin" />
          <input type="time" name="heureSortie" placeholder="Heure" />
        </div> */}
        <div className="button">
          <input type="submit" value="Rechercher" />
        </div>
      </div>
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
          className="map"
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </Layout>
  );
}

export default Map;
