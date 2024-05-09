import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import "./style.css"
function App() {
  return (
    <>
      {<Header
        aboutContent="Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information."
        twitterLink="/"
        facebookLink="/"
        email="/"
      />}
      {<Main />}
      {<Footer/>}
    </>
  );
}

export default App;
