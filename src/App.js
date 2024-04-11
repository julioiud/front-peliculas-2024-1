import Generos from "./components/generos/Generos";
import Footer from "./components/ui/Footer";
import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Generos />
      </div>
      <Footer />   
     </>

  );
}

export default App;
