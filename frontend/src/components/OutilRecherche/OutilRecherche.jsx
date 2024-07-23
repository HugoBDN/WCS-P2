import React, { useState, useEffect, useCallback } from "react";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import useGeoLocation from "../../Hook/useGeolocation";
import "./outilRecherche.css";

const mapContainerStyle = {
  width: "100%",
  height: "60vh",
};

const libraries = ["places"];

function Form() {
  const { lat, long } = useGeoLocation();
  const [formValues, setFormValues] = useState({ lieu: "" });
  const [isSubmit, setIsSubmit] = useState(false);
  const [searchLocation, setSearchLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat, lng: long });
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCB86o5KkLkDk9XF4PEAmMLJVewhqT8X5A", // Remplacez par votre propre clé API Google Maps
    libraries,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  const getCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMapCenter({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting current location:", error);
          setMapCenter({ lat: 45.75, lng: 4.85 }); // Coordonnées de Lyon, par exemple
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setMapCenter({ lat: 45.75, lng: 4.85 });
    }
  }, []);

  useEffect(() => {
    if (isSubmit) {
      const placesService = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
      placesService.findPlaceFromQuery(
        {
          query: formValues.lieu,
          fields: ["geometry"],
        },
        (results, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            results.length > 0
          ) {
            setSearchLocation(results[0].geometry.location);
          } else {
            setSearchLocation(null);
          }
        }
      );
    }
  }, [isSubmit, formValues.lieu]);

  useEffect(() => {
    if (searchLocation) {
      setMapCenter({
        lat: searchLocation.lat(),
        lng: searchLocation.lng(),
      });
    }
  }, [searchLocation]);

  useEffect(() => {
    if (isLoaded) {
      getCurrentLocation();
    }
  }, [isLoaded, getCurrentLocation]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Sélectionner une destination</h1>
        <div className="reserve">
          <div className="input">
            <p>
              <input
                className="srcBar"
                type="text"
                name="lieu"
                placeholder="Lieu de stationnement"
                value={formValues.lieu}
                onChange={handleChange}
              />
            </p>
          </div>
          <p>
            <button type="submit">Rechercher</button>
          </p>
        </div>
      </form>
      <div className="map">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={mapCenter}
          >
            {searchLocation && (
              <Marker
                position={{
                  lat: searchLocation.lat(),
                  lng: searchLocation.lng(),
                }}
                icon={{
                  url: "https://img.icons8.com/color/48/000000/map-pin.png",
                  scaledSize: new window.google.maps.Size(50, 50),
                }}
              />
            )}
          </GoogleMap>
        ) : (
          <div>
            {loadError ? (
              <p>Error loading Google Maps. Please try again later.</p>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
