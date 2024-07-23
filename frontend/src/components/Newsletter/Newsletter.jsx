function Newsletter() {
  return (
    <div>
      <div>
        <h2>
          Inscrivez-vous à notre newsletter et bénéficiez de tous nos bons plans
          :
        </h2>
      </div>
      <div className="input">
        <input type="text" name="Email" placeholder="Email" />
      </div>
      <div className="button">
        <button type="button">S'inscrire</button>
      </div>
    </div>
  );
}

export default Newsletter;
