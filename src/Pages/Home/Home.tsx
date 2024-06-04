import Image from '../../Component/Image';
import ButtonHome from '../../Component/ButtonHome';
import React, { useState } from 'react';
import linkedin from '../../assets/linkedin.png';
import linkedinBlack from '../../assets/linkedinBlack.png';
import photo from '../../assets/Noe.png';
import cv from '../../assets/cv.png';
import iconDip from '../../assets/iconDip.png';
import iconLoca from '../../assets/iconLoca.png';
import iconInfo from '../../assets/iconInfo.png';
import cvBlack from '../../assets/cvBlack.png';
import mail from '../../assets/mail.png';
import mailBlack from '../../assets/mailBlack.png';
import contact from '../../assets/contact.png';
import ecriture from '../../assets/ecriture.png';
import musique from '../../assets/musique.png';
import design from '../../assets/design.png';
import natation from '../../assets/natation.png';
import frontEnd from '../../assets/frontEnd.png';
import backEnd from '../../assets/backEnd.png';
import autres from '../../assets/autres.png';
import right from '../../assets/right.png';
import cvDownload from '../../assets/CV_Noe_CHOUTEAU.pdf'
import left from '../../assets/left.png';
import '../../assets/css/index.css';

export default function Home() {

    
    const [cvImage, setCvImage] = useState(cv);
    const [linkedinImage, setLinkedinImage] = useState(linkedin);
    const [mailImage, setMailImage] = useState(mail);

    window.onload = function() {
        let nav = document.querySelector("#lanava") as HTMLElement;
        let carre = document.querySelector("#test") as HTMLElement;
        carre.style.opacity = "0";
        nav.style.height = "100vh";
        let infos = document.querySelector("#infos") as HTMLElement;
        let navLinks = document.querySelector("#nav-links") as HTMLElement;
        let titre = document.querySelector("#portfolio") as HTMLElement;
        titre.style.opacity = "0";
        navLinks.style.opacity = "0";
        infos.style.opacity = "0";
        let sousTitre = document.createElement("h2");
        sousTitre.innerHTML = "Noé Chouteau"
        sousTitre.style.opacity = "0";
        sousTitre.style.textAlign ="center";
        sousTitre.style.color = "light-grey";
        sousTitre.style.margin = "0";
        navLinks.style.display = "none";
        titre.append(sousTitre);
        nav.style.background = "radial-gradient(47.58% 47.58% at 100% -15.26%, #8F59A5 0.1%, rgba(139, 83, 164, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(100.07% 91.64% at 23.23% -34.38%, #6539B0 31.64%, rgba(106, 60, 176, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(41.75% 50.78% at 14.47% 91.77%, #0087D9 0%, rgba(15, 128, 216, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(71.15% 106.27% at 130.57% -4.97%, #DB6192 0%, #DB6192 29.24%, rgba(219, 98, 147, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(60.31% 90.09% at -15.59% 60.49%, #2E51C8 22.66%, rgba(50, 76, 197, 0) 75.01%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(170.94% 255.32% at 114.24% 110.23%, #00B8BD 0%, rgba(0, 230, 237, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */";
        nav.style.justifyContent = "center";
        setTimeout(function(){
            titre.style.fontSize = "90px";
            titre.style.transition = "0.7s ease";
            titre.style.opacity = "1";
            setTimeout(function(){
                sousTitre.style.transition = "0.5s ease";
                setTimeout(function(){
                    sousTitre.style.opacity = "1";
                    titre.addEventListener("click", function(){
                        nav.style.transition = "0.7s ease;"
                        infos.style.transition = "0.7s ease";
                        sousTitre.style.opacity = "0";
                        titre.style.fontSize = "45px";
                        setTimeout(function(){
                            nav.style.height = "70px";
                            nav.style.background = "none";
                            navLinks.style.display = "flex";
                            titre.style.fontSize = "35px";
                            sousTitre.remove();
                            nav.style.justifyContent = "space-between";
                            setTimeout(function(){
                                navLinks.style.opacity = "1";
                                infos.style.opacity = "1";
                                carre.style.opacity = "1";
                            
                            }, 500);
                        }, 500);
                    });
                }, 200);
            },700);
        }, 500);
    }

    function btn1Hover() {
        setCvImage(cvBlack);
    }

    function btn1Clic() {
        const link = document.createElement('a');
        link.href = cvDownload;
        link.download = "CV_Noe_CHOUTEAU.pdf";
        document.body.appendChild(link);
        link.click();
        window.open(cvDownload);
        document.body.removeChild(link);
    }

    function btn1Leave() {
        setCvImage(cv);
    }

    function btn2Hover() {
        setLinkedinImage(linkedinBlack);
    }

    function btn2Clic() {
        window.open("https://www.linkedin.com/in/no%C3%A9-chouteau-422b2b222/");
    }

    function btn2Leave() {
        setLinkedinImage(linkedin);
    }
    
    function btn3Hover() {
        setMailImage(mailBlack);
    }

    function btn3Clic() {
        window.open("mailto:noe@chouteau.org");
    }

    function btn3Leave() {
        setMailImage(mail);
    }

    function btnLeftClic() {
        const slide = document.querySelector(".target") as HTMLElement;
        console.log(slide);
        const id = slide.id;
        const idNumber = parseInt(id.slice(6));
        const idNext = parseInt(id.slice(6)) + 1;
        if(idNumber == 5){
            slide.classList.add("five-one");
            const nextslide = document.querySelector("#slide-1") as HTMLElement;
            nextslide.style.zIndex = "1";
            nextslide.classList.add("one-five");

            setTimeout(function(){
                const slide = document.querySelector("#slide-5") as HTMLElement;
                const aaa = document.querySelector("#slide-1") as HTMLElement;
                slide.className = "";
                const nextslide = document.querySelector("#slide-1") as HTMLElement;
                const slide2 = document.querySelector("#slide-2") as HTMLElement;
                const slide3 = document.querySelector("#slide-3") as HTMLElement;
                const slide4 = document.querySelector("#slide-4") as HTMLElement;
                nextslide.className = "target";
                nextslide.style.right = "0px";
                slide2.style.right = "0px";
                slide3.style.right = "0px";
                slide4.style.right = "0px";
                slide.style.right = "0px";
            }, 500);

        }else{
        for (let i = 1; i <= idNumber; i++) {
            console.log(i);
            const slide = document.querySelector("#slide-" + i) as HTMLElement;
            const nextslide = document.querySelector("#slide-" + idNext) as HTMLElement;
            if(slide.classList.contains("target")) {
                for(let i = 1; i <= 5; i++) {
                    const slide = document.querySelector("#slide-" + i) as HTMLElement;
                    slide.className = "";
                }

                if(slide.id == "slide-1") {
                    slide.classList.add("one-two");
                    nextslide.classList.add("one-two");
                }
                if(slide.id == "slide-2") {
                    slide.classList.add("two-three");
                    nextslide.classList.add("two-three");
                }
                if(slide.id == "slide-3") {
                    slide.classList.add("three-four");
                    nextslide.classList.add("three-four");
                }
                if(slide.id == "slide-4") {
                    slide.classList.add("four-five");
                    nextslide.classList.add("four-five");
                }
                if(slide.id == "slide-5") {
                    slide.classList.add("five-one");
                    nextslide.classList.add("five-one");
                }
            }
            if(slide.style.right == "") {
                let newVal = i*350;
                slide.style.right = newVal + "px";
            }else{
                slide.style.right = parseInt(slide.style.right) + 350 + "px";
            }
            console.log(slide.style.right);
        }
        for (let i = idNext; i <= 5; i++) {
            console.log(i);
            const slide = document.querySelector("#slide-" + i) as HTMLElement;
            if(i == idNext) {
                slide.classList.add("target");
            }
            if(slide.style.right == "") {
                let newVal = 350;
                slide.style.right = newVal + "px";
            }else{
                slide.style.right = parseInt(slide.style.right) + 350 + "px";
            }
        }
    }
    }

    function btnRightClic() {
        const slide = document.querySelector(".target") as HTMLElement;
        console.log(slide);
        const id = slide.id;
        const idNumber = parseInt(id.slice(6));
        const idNext = parseInt(id.slice(6))-1;
        console.log(idNumber, idNext);

        if(idNumber == 1){
            slide.classList.add("one-fiveR");
            const nextslide = document.querySelector("#slide-5") as HTMLElement;
            nextslide.classList.add("five-oneR");

            setTimeout(function(){
                const slide = document.querySelector("#slide-1") as HTMLElement;
                slide.className = "";
                const nextslide = document.querySelector("#slide-5") as HTMLElement;
                const slide2 = document.querySelector("#slide-2") as HTMLElement;
                const slide3 = document.querySelector("#slide-3") as HTMLElement;
                const slide4 = document.querySelector("#slide-4") as HTMLElement;
                nextslide.className = "target";
                nextslide.style.right = "1400px";
                slide2.style.right = "1400px";
                slide3.style.right = "1400px";
                slide4.style.right = "1400px";
                slide.style.right = "1400px";
            }, 500);
        }else{
        for (let i = 1; i <= 5; i++) {
            console.log(i);
            const slide = document.querySelector("#slide-" + i) as HTMLElement;
            const nextslide = document.querySelector("#slide-" + idNext) as HTMLElement;
            if(slide.classList.contains("target")) {

                for(let i = 1; i <= 5; i++) {
                    const slide = document.querySelector("#slide-" + i) as HTMLElement;
                    slide.className = "";
                }

                if(slide.id == "slide-1") {
                    slide.classList.add("one-five");
                    nextslide.classList.add("one-five");
                }
                if(slide.id == "slide-2") {
                    slide.classList.add("two-one");
                    nextslide.classList.add("two-one");
                }
                if(slide.id == "slide-3") {
                    slide.classList.add("three-two");
                    nextslide.classList.add("three-two");
                }
                if(slide.id == "slide-4") {
                    slide.classList.add("four-three");
                    nextslide.classList.add("four-three");
                }
                if(slide.id == "slide-5") {
                    slide.classList.add("five-four");
                    nextslide.classList.add("five-four");
                }
                
            }
                slide.style.right = parseInt(slide.style.right) - 350 + "px";
            }
            console.log(slide.style.right);
        
        for (let i = idNext; i <= 5; i++) {
            console.log(idNext)
            console.log(i);
            const slide = document.querySelector("#slide-" + i) as HTMLElement;
            if(i == idNext) {
                slide.classList.add("target");
            }
            
        }
    }
    }

    function btnLeftClic2() {
        const slide = document.querySelector(".target2") as HTMLElement;
        console.log(slide);
        const id = slide.id;
        const idNumber = parseInt(id.slice(6));
        const idNext = parseInt(id.slice(6)) + 1;
        if(idNumber == 13){
            slide.classList.add("three-one");
            const nextslide = document.querySelector("#slide-11") as HTMLElement;
            nextslide.style.zIndex = "1";
            nextslide.classList.add("one-three");

            setTimeout(function(){
                const slide = document.querySelector("#slide-13") as HTMLElement;
                const aaa = document.querySelector("#slide-11") as HTMLElement;
                slide.className = "";
                const nextslide = document.querySelector("#slide-11") as HTMLElement;
                const slide2 = document.querySelector("#slide-12") as HTMLElement;
                nextslide.className = "target2";
                nextslide.style.right = "0px";
                slide2.style.right = "0px";
                slide.style.right = "0px";
            }, 500);

        }else{
        console.log(idNumber, idNext);
        for (let i = 11; i <= idNumber; i++) {
            const slide = document.querySelector("#slide-" + i) as HTMLElement;
            const nextslide = document.querySelector("#slide-" + idNext) as HTMLElement;
            console.log("#slide-" + i);
            if(slide.classList.contains("target2")) {
                for(let i = 1; i <= 3; i++) {
                    const slide = document.querySelector("#slide-1" + i) as HTMLElement;
                    slide.className = "";
                }

                if(slide.id == "slide-11") {
                    slide.classList.add("one-two");
                    nextslide.classList.add("one-two");
                }
                if(slide.id == "slide-12") {
                    slide.classList.add("two-three");
                    nextslide.classList.add("two-three");
                }
                if(slide.id == "slide-13") {
                    slide.classList.add("three-four");
                    nextslide.classList.add("three-four");
                }
            }
            if(slide.style.right == "") {
                let newVal = i*350;
                slide.style.right = newVal + "px";
            }else{
                slide.style.right = parseInt(slide.style.right) + 350 + "px";
            }
            console.log(slide.style.right);
        }
        for (let i = idNext; i <= 13; i++) {
            console.log(i);
            const slide = document.querySelector("#slide-" + i) as HTMLElement;
            if(i == idNext) {
                slide.classList.add("target2");
            }
            if(slide.style.right == "") {
                let newVal = 350;
                slide.style.right = newVal + "px";
            }else{
                slide.style.right = parseInt(slide.style.right) + 350 + "px";
            }
        }
    }
    }

    function btnRightClic2() {
        const slide = document.querySelector(".target2") as HTMLElement;
        console.log(slide);
        const id = slide.id;
        const idNumber = parseInt(id.slice(6));
        const idNext = parseInt(id.slice(6))-1;
        console.log(idNumber, idNext);

        if(idNumber == 11){
            slide.classList.add("one-threeR");
            const nextslide = document.querySelector("#slide-13") as HTMLElement;
            nextslide.classList.add("three-oneR");

            setTimeout(function(){
                const slide = document.querySelector("#slide-11") as HTMLElement;
                slide.className = "";
                const nextslide = document.querySelector("#slide-13") as HTMLElement;
                const slide2 = document.querySelector("#slide-12") as HTMLElement;
                nextslide.className = "target2";
                nextslide.style.right = "700px";
                slide2.style.right = "700px";
                slide.style.right = "700px";
            }, 500);
        }else{
        for (let i = 11; i <= 13; i++) {
            console.log(i);
            const slide = document.querySelector("#slide-" + i) as HTMLElement;
            const nextslide = document.querySelector("#slide-" + idNext) as HTMLElement;
            if(slide.classList.contains("target2")) {

                for(let i = 11; i <= 13; i++) {
                    const slide = document.querySelector("#slide-" + i) as HTMLElement;
                    slide.className = "";
                }

                if(slide.id == "slide-11") {
                    slide.classList.add("one-five");
                    nextslide.classList.add("one-five");
                }
                if(slide.id == "slide-12") {
                    slide.classList.add("two-one");
                    nextslide.classList.add("two-one");
                }
                if(slide.id == "slide-13") {
                    slide.classList.add("three-two");
                    nextslide.classList.add("three-two");
                }
                
            }
                slide.style.right = parseInt(slide.style.right) - 350 + "px";
            }
            console.log(slide.style.right);
        
        for (let i = idNext; i <= 13; i++) {
            console.log(idNext)
            console.log(i);
            const slide = document.querySelector("#slide-" + i) as HTMLElement;
            if(i == idNext) {
                slide.classList.add("target2");
            }
            
        }
    }
    }



    return(
        <div id="cover">
        <div id= "infos">
            <div id="present">
                <h2>Bonjour ! <br /> Moi, c’est Noé. </h2>
                <p>Passionné par le monde du design informatique et le développement, <br />
                    je suis en 2ème annéee de BUT à l’université Claude Bernard, Lyon 1.<br />
                    Vous retrouverez sur ce site mes divers projets, compétences et expériences.<br /><br /><br />
                    N’hésitez pas à me contacter pour plus d’informations ! 
                     </p>

                <ButtonHome id="cv" onHover={btn1Hover} onClic={btn1Clic} onLeave={btn1Leave}><div id="btn1"><Image id="imgCv" src={cvImage}></Image>Cv</div></ButtonHome>
                <ButtonHome id="linkedin" onHover={btn2Hover} onClic={btn2Clic} onLeave={btn2Leave}><div id="btn2"><Image id="imgLinkd" src={linkedinImage}></Image>Linkedin</div></ButtonHome>
                <ButtonHome id="mail" onHover={btn3Hover} onClic={btn3Clic} onLeave={btn3Leave}><div id="btn3"><Image id="imgMail" src={mailImage}></Image>Mail</div></ButtonHome>
            </div>
            
            
            <div id="img">
                <img id="photo" src={photo} alt="Noé" />
            </div>
        </div>
        <br /><br /><br />
        <div id="Diplômes">
            <h2 id="txtDip">Diplômes</h2>
            <div id="line1"></div>
            <div id="line2"></div>
            <div id="line3"></div>
            <p id="txtDip2">2018-2021</p>
            <p id="txtDip3">2021-2024</p>

            <div id="infosDip">
                <div id="diplome1" className="diplomes">
                    <div className="ligne1">
                        <img id="iconeMiniDip" src={iconDip} alt="Noé Chouteau Portfolio" />
                        <h3 id="txtMiniDip1">Baccalauréat</h3>
                    </div>

                    <div className="ligne2">
                        <img id="iconeLoc" src={iconLoca} alt="Noé Chouteau Portfolio" />
                        <h3 id="txtLoc1">Lycée International Ferney-Voltaire</h3>
                    </div>

                    <div className="ligne3">
                        <img id="iconeDesc" src={iconInfo} alt="Noé Chouteau Portfolio" />
                        <h3 id="txtDesc1">Spécialité mathématiques, NSI, physique-chimies</h3>
                    </div>
                </div>

                <div id="diplome2" className="diplomes">
                    <div className="ligne1">
                        <img id="iconeMiniDip" src={iconDip} alt="Noé Chouteau Portfolio" />
                        <h3 id="txtMiniDip2">BUT Informatique</h3>
                    </div>

                    <div className="ligne2">
                        <img id="iconeLoc" src={iconLoca} alt="Noé Chouteau Portfolio" />
                        <h3 id="txtLoc2">Université Claude Bernard Lyon 1</h3>
                    </div>

                    <div className="ligne3">
                        <img id="iconeDesc" src={iconInfo} alt="Noé Chouteau Portfolio" />
                        <h3 id="txtDesc2">Parcours Développement d'application</h3>
                    </div>
                </div>
            </div>
        </div>
<br />
        <div id="others">
                <div id="interets" className="boxOther">
                    <h3 id="txtInterets">Ce que j'aime</h3>

                    <div id="carrousel">

                    <img id="right" src={right} className="btn btn-prev" onClick={btnLeftClic} alt="Noé Chouteau Portfolio"/>
                    <img id="left" src={left} className="btn btn-next" onClick={btnRightClic} alt="Noé Chouteau Portfolio"/>

                    <div className="slider">
                    
                    <div className="slides">
                        <div id="slide-1" className="target">
                            <Image id="imgInteret1" src={contact}></Image>
                        Contact
                        <p>J'adore les nouvelles rencontres ! Pour moi, le contact humain est primordial, mais surtout un moyen de découvrir de nouvelles choses.</p>
                        </div>
                        <div id="slide-2">
                            <Image id="imgInteret1" src={design}></Image>
                        Design
                        <p> Que ce soit le design de maquettes ou d'infographie, la possibilité de mélanger notions d'art et de technologie fait de ce domaine un de mes préférés.</p>
                        </div>
                        <div id="slide-3">
                            <Image id="imgInteret3" src={ecriture}></Image>
                        Écriture
                        <p> J'écris régulièrement, que ce soit des refléxions, des nouvelles ou (même) des poèmes. C'est un autre moyen pour moi de créer et de donne la vie à mes idées.</p> 
                        </div>
                        <div id="slide-4">
                            <Image id="imgInteret4" src={musique}></Image>
                        Musique
                        <p> La musique m'accompagne dans la plupart de mes activités. J'apprécie en écouter, mais aussi en créer, et j'aimerais pouvoir en faire plus souvent.</p>
                        </div>
                        <div id="slide-5">
                            <Image id="imgInteret5" src={natation}></Image>
                        Natation
                        <p> J'ai pratiqué la natation pendant 8 ans, et j'aime toujours autant. C'est un sport qui me permet de me défouler et de me vider l'esprit.</p>
                        </div>
                    </div>
                    </div>


                    </div>
                </div>
                <div id="aptitudes" className="boxOther">
                    <h3 id="txtAptitudes">Mes langages</h3>

                    <div id="carrousel">

                    <img id="right2" src={right} className="btn btn-prev" alt="Noé Chouteau Portfolio" onClick={ btnLeftClic2}/>
                    <img id="left2" src={left} className="btn btn-next" alt="Noé Chouteau Portfolio" onClick={btnRightClic2}/>

                    <div className="slider">
                    
                    <div className="slides">
                        <div id="slide-11" className="target2">
                        <Image id="imgLang1" src={frontEnd}></Image>
                        Front-end
                        </div>
                        <div id="slide-12">
                        <Image id="imgLang2" src={backEnd}></Image>
                        Back-end
                        </div>
                        <div id="slide-13">
                        <Image id="imgLang3" src={autres}></Image>
                        Autres
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
        </div>
        <br />
        </div>

    )
}