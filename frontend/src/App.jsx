import Layout from "./components/Layout/Layout";
import OutilRecherche from "./components/OutilRecherche/OutilRecherche";
import Carrousel1 from "./components/Carrousel1/Carrousel1";
import Carrousel2 from "./components/Carrousel2/Carrousel2";

import "./App.css";

function App() {
  return (
    <Layout>
      <OutilRecherche isMarkerShown />
      <Carrousel1 />
      <Carrousel2 />
    </Layout>
  );
}
export default App;
