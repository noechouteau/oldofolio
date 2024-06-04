import './App.css';
import { useState } from 'react';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Competences from './Pages/Competences/Competences';
import Projets from './Pages/Projets/Projets';
import Li from './Component/Li';
import { all } from 'axios';

class EPage {
  static HOME = 'HOME';
  static CONTACT = 'CONTACT';
  static COMPETENCES = 'COMPETENCES';
  static PROJETS = 'PROJETS';
}

function App() {

  let dark = false;

  function darkmode(){
    if(dark == false){
      document.body.style.background = "#000";
      document.body.style.color = "#fff";
      dark = true;
      document.getElementsByTagName("nav")[0].style.background = "#fff";
      for (let i = 0; i < document.getElementsByTagName("span").length; i++) {
        let link = document.getElementsByTagName("span")[i] as HTMLElement;
        link.style.color = "#000";
      }
      for (let i = 0; i < document.getElementsByClassName("blockComp").length; i++) {
        let aa = document.getElementsByClassName("blockComp")[i] as HTMLElement;
        aa.style.background = "black";
      }
    }
    else{
      document.body.style.background = "";
      dark = false;
      document.getElementsByTagName("nav")[0].style.background = "";
      for (let i = 0; i < document.getElementsByTagName("span").length; i++) {
        let link = document.getElementsByTagName("span")[i] as HTMLElement;
        link.style.color = "#fff";
      }
    }
  }

  const accueilHandleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, EPage:EPage) => {
    const li = e.currentTarget;
    const otherLi = document.querySelector('.selected');
    const tes = document.querySelector("#test") as HTMLElement;
    const LiId = li.id;

    if (otherLi) {
        otherLi.classList.remove('selected');
        let otherLiId = otherLi.id;
        if (otherLiId === "accueil" && LiId === "projets") {
          tes.className = 'accueil-projets';
        }
        else if (otherLiId === "accueil" && LiId === "competences") {
          tes.className = 'accueil-competences';
        }
        else if (otherLiId === "accueil" && LiId === "contact") {
          tes.className = 'accueil-contact';
        }
        else if (otherLiId === "projets" && LiId === "accueil") {
          tes.className = 'projets-accueil';
        }
        else if (otherLiId === "projets" && LiId === "competences") {
          tes.className = 'projets-competences';
        }
        else if (otherLiId === "projets" && LiId === "contact") {
          tes.className = 'projets-contact';
        }
        else if (otherLiId === "competences" && LiId === "accueil") {
          tes.className = 'competences-accueil';
        }
        else if (otherLiId === "competences" && LiId === "projets") {
          tes.className = 'competences-projets';
        }
        else if (otherLiId === "competences" && LiId === "contact") {
          tes.className = 'competences-contact';
        }
        else if (otherLiId === "contact" && LiId === "accueil") {
          tes.className = 'contact-accueil';
        }
        else if (otherLiId === "contact" && LiId === "projets") {
          tes.className = 'contact-projets';
        }
        else if (otherLiId === "contact" && LiId === "competences") {
          tes.className = 'contact-competences';
        }
      }

    if (LiId === "accueil") {
        tes.style.right = "32.8rem";
        tes.style.width = "8.8rem";
    }
      else if (LiId === "projets") {
        tes.style.right = "24.57rem";
        tes.style.width = "8.31rem";
      }
      else if (LiId === "competences") {
        tes.style.right = "9.4rem";
        tes.style.width = "15.2rem";
    }
     else if (LiId === "contact") { 
        tes.style.right = "0rem";
        tes.style.width = "9.4rem";
    }
    
    
    li.classList.add('selected');
    setPage(EPage);
  }

  const [page, setPage] = useState<EPage>();

  const renderPage = () => {
    switch (page) {
      case EPage.HOME:
        return <Home />;
      case EPage.CONTACT:
        return <Contact />;
      case EPage.COMPETENCES:
        return <Competences />;
      case EPage.PROJETS:
        return <Projets />;
      default:
        return <Home />;
  }
}



  return (
    
    <div className={'navigation'}>
      <header className="sticky">
        <nav id="lanava">



          <div className="logo">
                      <a id="portfolio">Portfolio.</a>
          </div>


          <ul className="nav-links" id="nav-links">

            <Li onClick={(e) => accueilHandleClick(e,EPage.HOME)} id="accueil" classNa='selected'>
            <div onClick={() => setPage(EPage.HOME)}
              className = {page === EPage.HOME ? 'actual' : ''}>
                <span>Accueil</span>
              </div>
            </Li>

            <Li onClick={(e) => accueilHandleClick(e,EPage.PROJETS)} id="projets" classNa="">
            <div onClick={() => setPage(EPage.PROJETS)}
              className = {page === EPage.PROJETS ? 'actual' : ''}>
                <span>Projets</span>
            </div>
            </Li>

            <Li onClick={(e) => accueilHandleClick(e,EPage.COMPETENCES)} id="competences" classNa= "">
            <div onClick={() => setPage(EPage.COMPETENCES)}
              className = {page === EPage.COMPETENCES ? 'actual' : ''}>
                <span>Compétences</span>
            </div>
            </Li>

            <Li onClick={(e) => accueilHandleClick(e,EPage.CONTACT)} id="contact" classNa="">
            <div onClick={() => setPage(EPage.CONTACT)}
              className = {page === EPage.CONTACT ? 'actual' : ''}>
                <span>Contact</span>
            </div>
            </Li>

          </ul>
          <div id="test"></div>
        </nav>
      </header>

          {
        renderPage()
      }

    </div>
  );
}

export default App;
