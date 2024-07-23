import React, { useState } from "react";
import "./reservation.css";
import Layout from "../Layout/Layout";

function ContactForm() {
  // Créer un état pour stocker les données du formulaire
  const [contact, setContact] = useState({
    name: "",
    email: "",
    dateEntrée: "",
    heureEntée: "",
    dateSortie: "",
    heureSortie: "",
    place: "",
  });

  // Créer une fonction pour gérer la mise à jour de l'état du formulaire
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((prevContact) => {
      return {
        ...prevContact,
        [name]: value,
      };
    });
  };

  // Créer une fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données du formulaire à une API ou à une base de données
    fetch("https://google-maps-api/", {})
      .then((response) => response.json())
      // eslint-disable-next-line no-unused-vars
      .then((_data) => {
        // Afficher un message de succès ou rediriger vers une autre page
        // eslint-disable-next-line no-alert
        alert("Réservation effectuée avec succès !");
      })
      .catch((error) => {
        // Afficher un message d'erreur
        // eslint-disable-next-line no-alert
        alert(`Une erreur est survenue : ${error.message}`);
      });
  };
  return (
    <Layout>
      <div className="contact-form">
        <h1>Réservez votre place de parking</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
          <label htmlFor="date">Date d'entrée</label>
          <input
            type="date"
            id="date"
            name="dateEntrée"
            value={contact.date}
            onChange={handleChange}
            required
          />
          <label htmlFor="time">Heure d'entrée</label>
          <input
            type="time"
            id="time"
            name="heureEntrée"
            value={contact.time}
            onChange={handleChange}
            required
          />
          <label htmlFor="date">Date de sortie</label>
          <input
            type="date"
            id="date"
            name="dateSortie"
            value={contact.date}
            onChange={handleChange}
            required
          />
          <label htmlFor="time">Heure de sortie</label>
          <input
            type="time"
            id="time"
            name="heureSortie"
            value={contact.time}
            onChange={handleChange}
            required
          />
          <label htmlFor="place">Place</label>
          <input
            type="number"
            id="place"
            name="place"
            value={contact.place}
            onChange={handleChange}
            required
          />
          <button type="submit">Réserver</button>
        </form>
        <div className="annulation">
          <img src="src/images/annulation.png" alt="" />
          <p>Annulation gratuite</p>
        </div>
        <div className="paiment">
          <img src="src/images/paiment.png" alt="" />
          <p>Paiment sécurisé</p>
        </div>
      </div>
    </Layout>
  );
}

export default ContactForm;
