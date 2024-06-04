import React, { useEffect } from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import axios from "axios";
import Image from '../../Component/Image';
import realiser from "../../assets/realiser.png";
import optimiser from "../../assets/optimiser.png";
import administrer from "../../assets/administrer.png";
import gerer from "../../assets/gerer.png";
import croix from "../../assets/croix.png";
import conduire from "../../assets/conduire.png";
import collaborer from "../../assets/collaborer.png";
import sujetRealS1 from "../../assets/sujet_SAE_S1_01.pdf";
import renduRealS1 from "../../assets/rendus/sae_c_noe.zip";
import sujetRealS2 from "../../assets/sujet_SAE_S2_01.pdf";
import renduRealS2 from "../../assets/rendus/rendu_SAE_S2_01.zip";
import sujetAdmS1 from "../../assets/sujet_SAE_S1_03.pdf";
import renduAdmS1 from "../../assets/rendus/rendu_SAE_S1_03.pdf";
import sujetAdmS2 from "../../assets/sujet_SAE_S2_03.pdf";
import renduAdmS2 from "../../assets/rendus/rendu_SAE_S2_03.pdf";
import sujetGerS1 from "../../assets/sujet_SAE_S1_04.pdf";
import renduGerS1 from "../../assets/rendus/rendu_SAE_S1_04.pdf";
import sujetGerS2 from "../../assets/sujet_SAE_S2_04.pdf";
import renduGerS2 from "../../assets/rendus/rendu_SAE_S2_04.pbix";
import sujetConS1 from "../../assets/sujet_SAE_S1_05.pdf";
import renduConS1 from "../../assets/rendus/rendu_SAE_S1_05.zip";
import sujetConS2 from "../../assets/sujet_SAE_S2_05.pdf";
import renduConS2 from "../../assets/rendus/rendu_SAE_S2_05.zip";
import sujetColS1 from "../../assets/sujet_SAE_S1_06.pdf";
import renduColS1 from "../../assets/rendus/rendu_SAE_S1_06.pdf";
import sujetColS2 from "../../assets/sujet_SAE_S2_06.docx";
import renduColS2 from "../../assets/rendus/rendu_SAE_S2_06.jpg";
import './Competences.css';

export default function Types() {
  let clique = "";

  function realiserClick(){
    if(clique !== "realiser"){
      clique = "realiser";
      let realiserDiv = document.getElementById('realiser') as HTMLElement;
      let optimiserDiv = document.getElementById('optimiser') as HTMLElement;
      let administrerDiv = document.getElementById('administrer') as HTMLElement;
      let gererDiv = document.getElementById('gerer') as HTMLElement;
      let conduireDiv = document.getElementById('conduire') as HTMLElement;
      let collaborerDiv = document.getElementById('collaborer') as HTMLElement;
      let listeDiv = [realiserDiv, optimiserDiv, administrerDiv, gererDiv, conduireDiv, collaborerDiv];
      realiserDiv.classList.add("blockCompNoHover");
      realiserDiv.classList.remove("blockComp");
      for(let i = 0; i < listeDiv.length; i++){
        if(listeDiv[i] !== realiserDiv){
          listeDiv[i].classList.add('shrink');
          listeDiv[i].style.transform = "scale(0)";
        }
      }
      setTimeout(() => {
      realiserDiv.classList.add('toRight');

        setTimeout(() => {
          for(let i = 0; i < 3; i++){
            if(listeDiv[i] !== realiserDiv){
              listeDiv[i].style.display = "none";
            }
          }
          realiserDiv.classList.remove('toRight');
          realiserDiv.classList.add('newMasterTopW');

          setTimeout(() => {
            realiserDiv.classList.remove('newMasterTopW');
            realiserDiv.style.width = "65rem";
            realiserDiv.classList.add('newMasterTopH');
            realiserDiv.children[0].classList.add('img1Anim');
            realiserDiv.children[2].classList.add('texte1Anim');

            setTimeout(() => {
              for(let i = 3; i < 6; i++){
                console.log(listeDiv[i]);
                if(listeDiv[i] !== realiserDiv){
                  listeDiv[i].style.display = "none";
                }
              }
              realiserDiv.style.height = "42rem";
              realiserDiv.classList.remove('newMasterTopH');
              realiserDiv.children[0].classList.remove('img1Anim');
              realiserDiv.children[2].classList.remove('texte1Anim');
              let img = realiserDiv.children[0] as HTMLImageElement;
              let txt = realiserDiv.children[2] as HTMLElement;
              let pres = realiserDiv.children[3] as HTMLElement;
              const slider = document.getElementById('slider') as HTMLElement;
              const croix1 = document.getElementById('croix1') as HTMLImageElement;
              img.style.position = "relative";
              img.style.right = "46%";
              img.style.bottom = "4.5%";
              img.style.transform = "scale(0.6)";
              img.style.margin = "0";
              txt.style.position = "relative";
              txt.style.right = "32%";
              txt.style.bottom = "24%";
              pres.classList.add('fonduIn');
              slider.classList.add('fonduIn');
              croix1.classList.add('fonduIn');
              pres.style.display = "block";
              slider.style.display = "block";
              croix1.style.display = "block";
              setTimeout(() => {
                pres.classList.remove('fonduIn');
                slider.classList.remove('fonduIn');
                croix1.classList.remove('fonduIn');
              }, 700);
              let mouseDown = false;
              let startX: number;
              let scrollLeft: number;

              let startDragging = function (e: any) {
                e.preventDefault();
                mouseDown = true;
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
              }

              let stopDragging = function (e: any) {
                e.preventDefault();
                mouseDown = false;
              }

              slider.addEventListener('mousemove', (e) => {
                e.preventDefault();
                if(!mouseDown) return;
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2;
                slider.scrollLeft = scrollLeft - walk;
              });

              slider.addEventListener('mousedown', startDragging);
              slider.addEventListener('mouseup', stopDragging);
              slider.addEventListener('mouseleave', stopDragging);

            }, 700);
          }, 700);
        }, 700);
      }, 600);
  }
  }

  function realiserOut(){
    let realiserDiv = document.getElementById('realiser') as HTMLElement;
    let optimiserDiv = document.getElementById('optimiser') as HTMLElement;
    let administrerDiv = document.getElementById('administrer') as HTMLElement;
    let gererDiv = document.getElementById('gerer') as HTMLElement;
    let conduireDiv = document.getElementById('conduire') as HTMLElement;
    let collaborerDiv = document.getElementById('collaborer') as HTMLElement;
    let listeDiv = [realiserDiv, optimiserDiv, administrerDiv, gererDiv, conduireDiv, collaborerDiv];

    let pres = document.getElementById('realiserP') as HTMLElement;
    const slider = document.getElementById('slider') as HTMLElement;
    const croix1 = document.getElementById('croix1') as HTMLImageElement;
    pres.classList.add('fonduOut');
    slider.classList.add('fonduOut');
    croix1.classList.add('fonduOut');
    setTimeout(() => {
      pres.classList.remove('fonduOut');
      slider.classList.remove('fonduOut');
      croix1.classList.remove('fonduOut');
      pres.style.opacity = "0";
      slider.style.opacity = "0";
      croix1.style.opacity = "0";
    }, 500);
    realiserDiv.children[0].classList.add('img1AnimReverse');
    realiserDiv.children[2].classList.add('texte1AnimReverse');
    setTimeout(() => {
      realiserDiv.children[0].classList.remove('img1AnimReverse');
      realiserDiv.children[2].classList.remove('texte1AnimReverse');
      let img = realiserDiv.children[0] as HTMLImageElement;
      let txt = realiserDiv.children[2] as HTMLElement;
      let pres = realiserDiv.children[3] as HTMLElement;
      img.style.position = "static";
      img.style.right = "0";
      img.style.bottom = "0";
      img.style.transform = "scale(1)";
      txt.style.position = "static";
      txt.style.right = "0";
      txt.style.bottom = "0";
      pres.style.display = "none";
      slider.style.display = "none";
      croix1.style.display = "none";
      pres.style.opacity = "1";
      slider.style.opacity = "1";
      croix1.style.opacity = "1";
      realiserDiv.classList.add('newMasterTopHReverse');
      setTimeout(() => {
        realiserDiv.classList.remove('newMasterTopHReverse');
        realiserDiv.style.height = "15rem";
        realiserDiv.classList.add('newMasterTopWReverse');
        setTimeout(() => {
          realiserDiv.classList.remove('newMasterTopWReverse');
          realiserDiv.style.width = "15rem";
            realiserDiv.classList.add('toLeft');
            realiserDiv.classList.add('toTop');
            setTimeout(() => {
              realiserDiv.classList.remove('toLeft');
              for(let i = 0; i < 3; i++){
                if(listeDiv[i] !== realiserDiv){
                  listeDiv[i].style.opacity = "0";
                  listeDiv[i].style.display = "flex";
                }
              }
              setTimeout(() => {
                for(let i = 3; i < 6; i++){
                  console.log("aaa");
                  if(listeDiv[i] !== realiserDiv){
                    listeDiv[i].style.opacity = "0";
                    listeDiv[i].style.display = "flex";
                  }
                }
                realiserDiv.classList.remove('toTop');
                for(let i = 0; i < 6; i++){
                  console.log("aaaa");
                  if(listeDiv[i] !== realiserDiv){
                    console.log(listeDiv[i]);
                    listeDiv[i].style.opacity = "1";
                    listeDiv[i].style.transform = ""
                    listeDiv[i].classList.remove("shrink");
                    listeDiv[i].classList.add("growth");
                    setTimeout(() => {
                      listeDiv[i].className = "blockComp";
                    }, 700);
                  }
                }
                realiserDiv.classList.remove("blockCompNoHover");
                realiserDiv.classList.add("blockComp");
                clique = "";
                
              }, 700);
            }, 700);
        }, 700);
      }, 700);
    }, 700);
  }





{/**new */}





  function optimiserClick(){
    if(clique !== "optimiser"){
      clique = "optimiser";
      let realiserDiv = document.getElementById('realiser') as HTMLElement;
      let optimiserDiv = document.getElementById('optimiser') as HTMLElement;
      let administrerDiv = document.getElementById('administrer') as HTMLElement;
      let gererDiv = document.getElementById('gerer') as HTMLElement;
      let conduireDiv = document.getElementById('conduire') as HTMLElement;
      let collaborerDiv = document.getElementById('collaborer') as HTMLElement;
      let listeDiv = [realiserDiv, optimiserDiv, administrerDiv, gererDiv, conduireDiv, collaborerDiv];
      optimiserDiv.classList.add("blockCompNoHover");
      optimiserDiv.classList.remove("blockComp");
      for(let i = 0; i < listeDiv.length; i++){
        if(listeDiv[i] !== optimiserDiv){
          listeDiv[i].classList.add('shrink');
          listeDiv[i].style.transform = "scale(0)";
        }
      }

      setTimeout(() => {
        for(let i = 0; i < 3; i++){
          if(listeDiv[i] !== optimiserDiv){
            listeDiv[i].style.display = "none";
          }
        }
        optimiserDiv.classList.add('newMasterTopW');

        setTimeout(() => {
          optimiserDiv.classList.remove('newMasterTopW');
          optimiserDiv.style.width = "65rem";
          optimiserDiv.classList.add('newMasterTopH');
          optimiserDiv.children[0].classList.add('img1Anim');
          optimiserDiv.children[2].classList.add('texte2Anim');

          setTimeout(() => {
            for(let i = 3; i < 6; i++){
              console.log(listeDiv[i]);
              if(listeDiv[i] !== optimiserDiv){
                listeDiv[i].style.display = "none";
              }
            }
            optimiserDiv.style.height = "42rem";
            optimiserDiv.classList.remove('newMasterTopH');
            optimiserDiv.children[0].classList.remove('img1Anim');
            optimiserDiv.children[2].classList.remove('texte2Anim');
            let img = optimiserDiv.children[0] as HTMLImageElement;
            let txt = optimiserDiv.children[2] as HTMLElement;
            let pres = optimiserDiv.children[3] as HTMLElement;
            const slider = document.getElementById('slider2') as HTMLElement;
            const croix1 = document.getElementById('croix2') as HTMLImageElement;
            img.style.position = "relative";
            img.style.right = "46%";
            img.style.bottom = "4.5%";
            img.style.transform = "scale(0.6)";
            img.style.margin = "0";
            txt.style.position = "relative";
            txt.style.right = "30%";
            txt.style.bottom = "26%";
            pres.classList.add('fonduIn');
            slider.classList.add('fonduIn');
            croix1.classList.add('fonduIn');
            pres.style.display = "block";
            slider.style.display = "block";
            croix1.style.display = "block";
            setTimeout(() => {
              pres.classList.remove('fonduIn');
              slider.classList.remove('fonduIn');
              croix1.classList.remove('fonduIn');
            }, 700);
            let mouseDown = false;
            let startX: number;
            let scrollLeft: number;

            let startDragging = function (e: any) {
              e.preventDefault();
              mouseDown = true;
              startX = e.pageX - slider.offsetLeft;
              scrollLeft = slider.scrollLeft;
            }

            let stopDragging = function (e: any) {
              e.preventDefault();
              mouseDown = false;
            }

            slider.addEventListener('mousemove', (e) => {
              e.preventDefault();
              if(!mouseDown) return;
              const x = e.pageX - slider.offsetLeft;
              const walk = (x - startX) * 2;
              slider.scrollLeft = scrollLeft - walk;
            });

            slider.addEventListener('mousedown', startDragging);
            slider.addEventListener('mouseup', stopDragging);
            slider.addEventListener('mouseleave', stopDragging);

          }, 700);
        }, 700);
      }, 700);
    }
  }

  function optimiserOut(){
    let realiserDiv = document.getElementById('realiser') as HTMLElement;
    let optimiserDiv = document.getElementById('optimiser') as HTMLElement;
    let administrerDiv = document.getElementById('administrer') as HTMLElement;
    let gererDiv = document.getElementById('gerer') as HTMLElement;
    let conduireDiv = document.getElementById('conduire') as HTMLElement;
    let collaborerDiv = document.getElementById('collaborer') as HTMLElement;
    let listeDiv = [realiserDiv, optimiserDiv, administrerDiv, gererDiv, conduireDiv, collaborerDiv];

    let pres = document.getElementById('optimiserP') as HTMLElement;
    const slider = document.getElementById('slider2') as HTMLElement;
    const croix1 = document.getElementById('croix2') as HTMLImageElement;
    pres.classList.add('fonduOut');
    slider.classList.add('fonduOut');
    croix1.classList.add('fonduOut');
    setTimeout(() => {
      pres.classList.remove('fonduOut');
      slider.classList.remove('fonduOut');
      croix1.classList.remove('fonduOut');
      pres.style.opacity = "0";
      slider.style.opacity = "0";
      croix1.style.opacity = "0";
    }, 500);
    optimiserDiv.children[0].classList.add('img1AnimReverse');
    optimiserDiv.children[2].classList.add('texte2AnimReverse');
    setTimeout(() => {
      optimiserDiv.children[0].classList.remove('img1AnimReverse');
      optimiserDiv.children[2].classList.remove('texte2AnimReverse');
      let img = optimiserDiv.children[0] as HTMLImageElement;
      let txt = optimiserDiv.children[2] as HTMLElement;
      let pres = optimiserDiv.children[3] as HTMLElement;
      img.style.position = "static";
      img.style.right = "0";
      img.style.bottom = "0";
      img.style.transform = "scale(1)";
      txt.style.position = "static";
      txt.style.right = "0";
      txt.style.bottom = "0";
      pres.style.display = "none";
      slider.style.display = "none";
      croix1.style.display = "none";
      pres.style.opacity = "1";
      slider.style.opacity = "1";
      croix1.style.opacity = "1";
      optimiserDiv.classList.add('newMasterTopHReverse');
      setTimeout(() => {
        optimiserDiv.classList.remove('newMasterTopHReverse');
        optimiserDiv.style.height = "15rem";
        optimiserDiv.classList.add('newMasterTopWReverse');
        setTimeout(() => {
          optimiserDiv.classList.remove('newMasterTopWReverse');
          optimiserDiv.style.width = "15rem";
          optimiserDiv.classList.add('toTop');
              for(let i = 0; i < 3; i++){
                if(listeDiv[i] !== optimiserDiv){
                  listeDiv[i].style.opacity = "0";
                  listeDiv[i].style.display = "flex";
                }
              }
              setTimeout(() => {
                for(let i = 3; i < 6; i++){
                  if(listeDiv[i] !== optimiserDiv){
                    listeDiv[i].style.opacity = "0";
                    listeDiv[i].style.display = "flex";
                  }
                }
                optimiserDiv.classList.remove('toTop');
                for(let i = 0; i < 6; i++){
                  if(listeDiv[i] !== optimiserDiv){
                    console.log(listeDiv[i]);
                    listeDiv[i].style.opacity = "1";
                    listeDiv[i].style.transform = ""
                    listeDiv[i].classList.remove("shrink");
                    listeDiv[i].classList.add("growth");
                    setTimeout(() => {
                      listeDiv[i].className = "blockComp";
                    }, 700);
                  }
                }
                optimiserDiv.classList.remove("blockCompNoHover");
                optimiserDiv.classList.add("blockComp");
                clique = "";
                
              }, 700);
        }, 700);
      }, 700);
    }, 700);
  }

  



{/**new */}




function administrerClick(){
  if(clique !== "administrer"){
    clique = "administrer";
    let realiserDiv = document.getElementById('realiser') as HTMLElement;
    let optimiserDiv = document.getElementById('optimiser') as HTMLElement;
    let administrerDiv = document.getElementById('administrer') as HTMLElement;
    let gererDiv = document.getElementById('gerer') as HTMLElement;
    let conduireDiv = document.getElementById('conduire') as HTMLElement;
    let collaborerDiv = document.getElementById('collaborer') as HTMLElement;
    let listeDiv = [realiserDiv, optimiserDiv, administrerDiv, gererDiv, conduireDiv, collaborerDiv];
    administrerDiv.classList.add("blockCompNoHover");
    administrerDiv.classList.remove("blockComp");
    for(let i = 0; i < listeDiv.length; i++){
      if(listeDiv[i] !== administrerDiv){
        listeDiv[i].classList.add('shrink');
        listeDiv[i].style.transform = "scale(0)";
      }
    }
    setTimeout(() => {
    administrerDiv.classList.add('toLeft');

      setTimeout(() => {
        for(let i = 0; i < 3; i++){
          if(listeDiv[i] !== administrerDiv){
            listeDiv[i].style.display = "none";
          }
        }
        administrerDiv.classList.remove('toLeft');
        administrerDiv.classList.add('newMasterTopW');

        setTimeout(() => {
          administrerDiv.classList.remove('newMasterTopW');
          administrerDiv.style.width = "65rem";
          administrerDiv.classList.add('newMasterTopH');
          administrerDiv.children[0].classList.add('img1Anim');
          administrerDiv.children[2].classList.add('texte3Anim');

          setTimeout(() => {
            for(let i = 3; i < 6; i++){
              console.log(listeDiv[i]);
              if(listeDiv[i] !== administrerDiv){
                listeDiv[i].style.display = "none";
              }
            }
            administrerDiv.style.height = "42rem";
            administrerDiv.classList.remove('newMasterTopH');
            administrerDiv.children[0].classList.remove('img1Anim');
            administrerDiv.children[2].classList.remove('texte3Anim');
            let img = administrerDiv.children[0] as HTMLImageElement;
            let txt = administrerDiv.children[2] as HTMLElement;
            let pres = administrerDiv.children[3] as HTMLElement;
            const slider = document.getElementById('slider3') as HTMLElement;
            const croix1 = document.getElementById('croix3') as HTMLImageElement;
            img.style.position = "relative";
            img.style.right = "46%";
            img.style.bottom = "4.5%";
            img.style.transform = "scale(0.6)";
            img.style.margin = "0";
            txt.style.position = "relative";
            txt.style.right = "28%";
            txt.style.bottom = "28%";
            pres.classList.add('fonduIn');
            slider.classList.add('fonduIn');
            croix1.classList.add('fonduIn');
            pres.style.display = "block";
            slider.style.display = "block";
            croix1.style.display = "block";
            setTimeout(() => {
              pres.classList.remove('fonduIn');
              slider.classList.remove('fonduIn');
              croix1.classList.remove('fonduIn');
            }, 700);
            let mouseDown = false;
            let startX: number;
            let scrollLeft: number;

            let startDragging = function (e: any) {
              e.preventDefault();
              mouseDown = true;
              startX = e.pageX - slider.offsetLeft;
              scrollLeft = slider.scrollLeft;
            }

            let stopDragging = function (e: any) {
              e.preventDefault();
              mouseDown = false;
            }

            slider.addEventListener('mousemove', (e) => {
              e.preventDefault();
              if(!mouseDown) return;
              const x = e.pageX - slider.offsetLeft;
              const walk = (x - startX) * 2;
              slider.scrollLeft = scrollLeft - walk;
            });

            slider.addEventListener('mousedown', startDragging);
            slider.addEventListener('mouseup', stopDragging);
            slider.addEventListener('mouseleave', stopDragging);

          }, 700);
        }, 700);
      }, 700);
    }, 600);
}
}

function administrerOut(){
  let realiserDiv = document.getElementById('realiser') as HTMLElement;
  let optimiserDiv = document.getElementById('optimiser') as HTMLElement;
  let administrerDiv = document.getElementById('administrer') as HTMLElement;
  let gererDiv = document.getElementById('gerer') as HTMLElement;
  let conduireDiv = document.getElementById('conduire') as HTMLElement;
  let collaborerDiv = document.getElementById('collaborer') as HTMLElement;
  let listeDiv = [realiserDiv, optimiserDiv, administrerDiv, gererDiv, conduireDiv, collaborerDiv];

  let pres = document.getElementById('administrerP') as HTMLElement;
  const slider = document.getElementById('slider3') as HTMLElement;
  const croix1 = document.getElementById('croix3') as HTMLImageElement;
  pres.classList.add('fonduOut');
  slider.classList.add('fonduOut');
  croix1.classList.add('fonduOut');
  setTimeout(() => {
    pres.classList.remove('fonduOut');
    slider.classList.remove('fonduOut');
    croix1.classList.remove('fonduOut');
    pres.style.opacity = "0";
    slider.style.opacity = "0";
    croix1.style.opacity = "0";
  }, 500);
  administrerDiv.children[0].classList.add('img1AnimReverse');
  administrerDiv.children[2].classList.add('texte3AnimReverse');
  setTimeout(() => {
    administrerDiv.children[0].classList.remove('img1AnimReverse');
    administrerDiv.children[2].classList.remove('texte3AnimReverse');
    let img = administrerDiv.children[0] as HTMLImageElement;
    let txt = administrerDiv.children[2] as HTMLElement;
    let pres = administrerDiv.children[3] as HTMLElement;
    img.style.position = "static";
    img.style.right = "0";
    img.style.bottom = "0";
    img.style.transform = "scale(1)";
    txt.style.position = "static";
    txt.style.right = "0";
    txt.style.bottom = "0";
    pres.style.display = "none";
    slider.style.display = "none";
    croix1.style.display = "none";
    pres.style.opacity = "1";
    slider.style.opacity = "1";
    croix1.style.opacity = "1";
    administrerDiv.classList.add('newMasterTopHReverse');
    setTimeout(() => {
      administrerDiv.classList.remove('newMasterTopHReverse');
      administrerDiv.style.height = "15rem";
      administrerDiv.classList.add('newMasterTopWReverse');
      setTimeout(() => {
        administrerDiv.classList.remove('newMasterTopWReverse');
        administrerDiv.style.width = "15rem";
        administrerDiv.classList.add('toRight');
        administrerDiv.classList.add('toTop');
          setTimeout(() => {
            administrerDiv.classList.remove('toRight');
            for(let i = 0; i < 3; i++){
              if(listeDiv[i] !== administrerDiv){
                listeDiv[i].style.opacity = "0";
                listeDiv[i].style.display = "flex";
              }
            }
            setTimeout(() => {
              for(let i = 3; i < 6; i++){
                if(listeDiv[i] !== administrerDiv){
                  listeDiv[i].style.opacity = "0";
                  listeDiv[i].style.display = "flex";
                }
              }
              administrerDiv.classList.remove('toTop');
              for(let i = 0; i < 6; i++){
                if(listeDiv[i] !== administrerDiv){
                  console.log(listeDiv[i]);
                  listeDiv[i].style.opacity = "1";
                  listeDiv[i].style.transform = ""
                  listeDiv[i].classList.remove("shrink");
                  listeDiv[i].classList.add("growth");
                  setTimeout(() => {
                    listeDiv[i].className = "blockComp";
                  }, 700);
                }
              }
              administrerDiv.classList.remove("blockCompNoHover");
              administrerDiv.classList.add("blockComp");
              clique = "";
              
            }, 700);
          }, 700);
      }, 700);
    }, 700);
  }, 700);
}


  



{/**new */}




function gererClick(){

  if(clique !== "gerer"){
    clique = "gerer";
    let realiserDiv = document.getElementById('realiser') as HTMLElement;
    let optimiserDiv = document.getElementById('optimiser') as HTMLElement;
    let administrerDiv = document.getElementById('administrer') as HTMLElement;
    let gererDiv = document.getElementById('gerer') as HTMLElement;
    let conduireDiv = document.getElementById('conduire') as HTMLElement;
    let collaborerDiv = document.getElementById('collaborer') as HTMLElement;
    let firstLine = document.getElementById('firstLine') as HTMLElement;
    let listeDiv = [realiserDiv, optimiserDiv, administrerDiv, gererDiv, conduireDiv, collaborerDiv];
    gererDiv.classList.add("blockCompNoHover");
    gererDiv.classList.remove("blockComp");
    for(let i = 0; i < listeDiv.length; i++){
      if(listeDiv[i] !== gererDiv){
        listeDiv[i].classList.add('shrink');
        listeDiv[i].style.transform = "scale(0)";
      }
    }
    setTimeout(() => {
      gererDiv.classList.add('toRight');

      setTimeout(() => {
        for(let i = 3; i < 6; i++){
          if(listeDiv[i] !== gererDiv){
            listeDiv[i].style.display = "none";
          }
        }
        gererDiv.classList.remove('toRight');
        gererDiv.classList.add('toTop2');
        setTimeout(() => {
          firstLine.style.display = "none";
          gererDiv.classList.remove('toTop2');
          gererDiv.style.position = "relative";
          gererDiv.classList.add('newMasterTopW');

          setTimeout(() => {
            gererDiv.classList.remove('newMasterTopW');
            gererDiv.style.width = "65rem";
            gererDiv.classList.add('newMasterTopH');
            gererDiv.children[0].classList.add('img1Anim');
            gererDiv.children[2].classList.add('texte4Anim');

            setTimeout(() => {
              for(let i = 3; i < 6; i++){
                console.log(listeDiv[i]);
                if(listeDiv[i] !== gererDiv){
                  listeDiv[i].style.display = "none";
                }
              }
              gererDiv.style.height = "42rem";
              gererDiv.classList.remove('newMasterTopH');
              gererDiv.children[0].classList.remove('img1Anim');
              gererDiv.children[2].classList.remove('texte4Anim');
              let img = gererDiv.children[0] as HTMLImageElement;
              let txt = gererDiv.children[2] as HTMLElement;
              let pres = gererDiv.children[3] as HTMLElement;
              const slider = document.getElementById('slider4') as HTMLElement;
              const croix1 = document.getElementById('croix4') as HTMLImageElement;
              img.style.position = "relative";
              img.style.right = "46%";
              img.style.bottom = "4.5%";
              img.style.transform = "scale(0.6)";
              img.style.margin = "0";
              txt.style.position = "relative";
              txt.style.right = "34%";
              txt.style.bottom = "27%";
              pres.classList.add('fonduIn');
              slider.classList.add('fonduIn');
              croix1.classList.add('fonduIn');
              pres.style.display = "block";
              slider.style.display = "block";
              croix1.style.display = "block";
              setTimeout(() => {
                pres.classList.remove('fonduIn');
                slider.classList.remove('fonduIn');
                croix1.classList.remove('fonduIn');
              }, 700);
              let mouseDown = false;
              let startX: number;
              let scrollLeft: number;

              let startDragging = function (e: any) {
                e.preventDefault();
                mouseDown = true;
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
              }

              let stopDragging = function (e: any) {
                e.preventDefault();
                mouseDown = false;
              }

              slider.addEventListener('mousemove', (e) => {
                e.preventDefault();
                if(!mouseDown) return;
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2;
                slider.scrollLeft = scrollLeft - walk;
              });

              slider.addEventListener('mousedown', startDragging);
              slider.addEventListener('mouseup', stopDragging);
              slider.addEventListener('mouseleave', stopDragging);

            }, 700);
          }, 700);
        }, 700);
      }, 700);
    }, 600);
}

}

function gererOut(){
  let realiserDiv = document.getElementById('realiser') as HTMLElement;
    let optimiserDiv = document.getElementById('optimiser') as HTMLElement;
    let administrerDiv = document.getElementById('administrer') as HTMLElement;
    let gererDiv = document.getElementById('gerer') as HTMLElement;
    let conduireDiv = document.getElementById('conduire') as HTMLElement;
    let collaborerDiv = document.getElementById('collaborer') as HTMLElement;
    let firstLine = document.getElementById('firstLine') as HTMLElement;
    let listeDiv = [realiserDiv, optimiserDiv, administrerDiv, gererDiv, conduireDiv, collaborerDiv];

    let pres = document.getElementById('gererP') as HTMLElement;
    const slider = document.getElementById('slider4') as HTMLElement;
    const croix1 = document.getElementById('croix4') as HTMLImageElement;
    pres.classList.add('fonduOut');
    slider.classList.add('fonduOut');
    croix1.classList.add('fonduOut');
    setTimeout(() => {
      pres.classList.remove('fonduOut');
      slider.classList.remove('fonduOut');
      croix1.classList.remove('fonduOut');
      pres.style.opacity = "0";
      slider.style.opacity = "0";
      croix1.style.opacity = "0";
    }, 500);
    gererDiv.children[0].classList.add('img1AnimReverse');
    gererDiv.children[2].classList.add('texte4AnimReverse');
    setTimeout(() => {
      gererDiv.children[0].classList.remove('img1AnimReverse');
      gererDiv.children[2].classList.remove('texte4AnimReverse');
      let img = gererDiv.children[0] as HTMLImageElement;
      let txt = gererDiv.children[2] as HTMLElement;
      let pres = gererDiv.children[3] as HTMLElement;
      img.style.position = "static";
      img.style.right = "0";
      img.style.bottom = "0";
      img.style.transform = "scale(1)";
      txt.style.position = "static";
      txt.style.right = "0";
      txt.style.bottom = "0";
      pres.style.display = "none";
      slider.style.display = "none";
      croix1.style.display = "none";
      pres.style.opacity = "1";
      slider.style.opacity = "1";
      croix1.style.opacity = "1";
      gererDiv.classList.add('newMasterTopHReverse');
      setTimeout(() => {
        gererDiv.classList.remove('newMasterTopHReverse');
        gererDiv.style.height = "15rem";
        gererDiv.classList.add('newMasterTopWReverse');
        setTimeout(() => {
          gererDiv.classList.remove('newMasterTopWReverse');
          gererDiv.style.width = "15rem";
          gererDiv.classList.add('toLeft');
            setTimeout(() => {
              gererDiv.classList.remove('toLeft');
              for(let i = 3; i < 6; i++){
                if(listeDiv[i] !== gererDiv){
                  listeDiv[i].style.opacity = "0";
                  listeDiv[i].style.display = "flex";
                }
              }
              gererDiv.classList.add('toBottom');
              setTimeout(() => {
                firstLine.style.display = "flex";
                for(let i = 0; i < 3; i++){
                  console.log("aaa");
                  if(listeDiv[i] !== gererDiv){
                    listeDiv[i].style.opacity = "0";
                    listeDiv[i].style.display = "flex";
                  }
                }
                gererDiv.classList.remove('toBottom');
                for(let i = 0; i < 6; i++){
                  console.log("aaaa");
                  if(listeDiv[i] !== gererDiv){
                    console.log(listeDiv[i]);
                    listeDiv[i].style.opacity = "1";
                    listeDiv[i].style.transform = ""
                    listeDiv[i].classList.remove("shrink");
                    listeDiv[i].classList.add("growth");
                    setTimeout(() => {
                      listeDiv[i].className = "blockComp";
                    }, 700);
                  }
                }
                gererDiv.classList.remove("blockCompNoHover");
                gererDiv.classList.add("blockComp");
                clique = "";
                
              }, 700);
            }, 700);
        }, 700);
      }, 700);
    }, 700);
}








  



{/**new */}




function conduireClick(){

  if(clique !== "gerer"){
    clique = "gerer";
    let realiserDiv = document.getElementById('realiser') as HTMLElement;
    let optimiserDiv = document.getElementById('optimiser') as HTMLElement;
    let administrerDiv = document.getElementById('administrer') as HTMLElement;
    let gererDiv = document.getElementById('gerer') as HTMLElement;
    let conduireDiv = document.getElementById('conduire') as HTMLElement;
    let collaborerDiv = document.getElementById('collaborer') as HTMLElement;
    let firstLine = document.getElementById('firstLine') as HTMLElement;
    let listeDiv = [realiserDiv, optimiserDiv, administrerDiv, gererDiv, conduireDiv, collaborerDiv];
    conduireDiv.classList.add("blockCompNoHover");
    conduireDiv.classList.remove("blockComp");
    for(let i = 0; i < listeDiv.length; i++){
      if(listeDiv[i] !== conduireDiv){
        listeDiv[i].classList.add('shrink');
        listeDiv[i].style.transform = "scale(0)";
      }
    }

    setTimeout(() => {
      for(let i = 3; i < 6; i++){
        if(listeDiv[i] !== conduireDiv){
          listeDiv[i].style.display = "none";
        }
      }
      conduireDiv.classList.add('toTop2');
      setTimeout(() => {
        firstLine.style.display = "none";
        conduireDiv.classList.remove('toTop2');
        conduireDiv.style.position = "relative";
        conduireDiv.classList.add('newMasterTopW');

        setTimeout(() => {
          conduireDiv.classList.remove('newMasterTopW');
          conduireDiv.style.width = "65rem";
          conduireDiv.classList.add('newMasterTopH');
          conduireDiv.children[0].classList.add('img1Anim');
          conduireDiv.children[2].classList.add('texte5Anim');

          setTimeout(() => {
            for(let i = 3; i < 6; i++){
              console.log(listeDiv[i]);
              if(listeDiv[i] !== conduireDiv){
                listeDiv[i].style.display = "none";
              }
            }
            conduireDiv.style.height = "42rem";
            conduireDiv.classList.remove('newMasterTopH');
            conduireDiv.children[0].classList.remove('img1Anim');
            conduireDiv.children[2].classList.remove('texte5Anim');
            let img = conduireDiv.children[0] as HTMLImageElement;
            let txt = conduireDiv.children[2] as HTMLElement;
            let pres = conduireDiv.children[3] as HTMLElement;
            const slider = document.getElementById('slider5') as HTMLElement;
            const croix1 = document.getElementById('croix5') as HTMLImageElement;
            img.style.position = "relative";
            img.style.right = "46%";
            img.style.bottom = "4.5%";
            img.style.transform = "scale(0.6)";
            img.style.margin = "0";
            txt.style.position = "relative";
            txt.style.right = "31%";
            txt.style.bottom = "29%";
            pres.classList.add('fonduIn');
            slider.classList.add('fonduIn');
            croix1.classList.add('fonduIn');
            pres.style.display = "block";
            slider.style.display = "block";
            croix1.style.display = "block";
            setTimeout(() => {
              pres.classList.remove('fonduIn');
              slider.classList.remove('fonduIn');
              croix1.classList.remove('fonduIn');
            }, 700);
            let mouseDown = false;
            let startX: number;
            let scrollLeft: number;

            let startDragging = function (e: any) {
              e.preventDefault();
              mouseDown = true;
              startX = e.pageX - slider.offsetLeft;
              scrollLeft = slider.scrollLeft;
            }

            let stopDragging = function (e: any) {
              e.preventDefault();
              mouseDown = false;
            }

            slider.addEventListener('mousemove', (e) => {
              e.preventDefault();
              if(!mouseDown) return;
              const x = e.pageX - slider.offsetLeft;
              const walk = (x - startX) * 2;
              slider.scrollLeft = scrollLeft - walk;
            });

            slider.addEventListener('mousedown', startDragging);
            slider.addEventListener('mouseup', stopDragging);
            slider.addEventListener('mouseleave', stopDragging);

          }, 700);
        }, 700);
      }, 700);
    }, 700);
}

}

function conduireOut(){
  let realiserDiv = document.getElementById('realiser') as HTMLElement;
    let optimiserDiv = document.getElementById('optimiser') as HTMLElement;
    let administrerDiv = document.getElementById('administrer') as HTMLElement;
    let gererDiv = document.getElementById('gerer') as HTMLElement;
    let conduireDiv = document.getElementById('conduire') as HTMLElement;
    let collaborerDiv = document.getElementById('collaborer') as HTMLElement;
    let firstLine = document.getElementById('firstLine') as HTMLElement;
    let listeDiv = [realiserDiv, optimiserDiv, administrerDiv, gererDiv, conduireDiv, collaborerDiv];

    let pres = document.getElementById('conduireP') as HTMLElement;
    const slider = document.getElementById('slider5') as HTMLElement;
    const croix1 = document.getElementById('croix5') as HTMLImageElement;
    pres.classList.add('fonduOut');
    slider.classList.add('fonduOut');
    croix1.classList.add('fonduOut');
    setTimeout(() => {
      pres.classList.remove('fonduOut');
      slider.classList.remove('fonduOut');
      croix1.classList.remove('fonduOut');
      pres.style.opacity = "0";
      slider.style.opacity = "0";
      croix1.style.opacity = "0";
    }, 500);
    conduireDiv.children[0].classList.add('img1AnimReverse');
    conduireDiv.children[2].classList.add('texte5AnimReverse');
    setTimeout(() => {
      conduireDiv.children[0].classList.remove('img1AnimReverse');
      conduireDiv.children[2].classList.remove('texte5AnimReverse');
      let img = conduireDiv.children[0] as HTMLImageElement;
      let txt = conduireDiv.children[2] as HTMLElement;
      let pres = conduireDiv.children[3] as HTMLElement;
      img.style.position = "static";
      img.style.right = "0";
      img.style.bottom = "0";
      img.style.transform = "scale(1)";
      txt.style.position = "static";
      txt.style.right = "0";
      txt.style.bottom = "0";
      pres.style.display = "none";
      slider.style.display = "none";
      croix1.style.display = "none";
      pres.style.opacity = "1";
      slider.style.opacity = "1";
      croix1.style.opacity = "1";
      conduireDiv.classList.add('newMasterTopHReverse');
      setTimeout(() => {
        conduireDiv.classList.remove('newMasterTopHReverse');
        conduireDiv.style.height = "15rem";
        conduireDiv.classList.add('newMasterTopWReverse');
        setTimeout(() => {
          conduireDiv.classList.remove('newMasterTopWReverse');
          conduireDiv.style.width = "15rem";

            for(let i = 3; i < 6; i++){
              if(listeDiv[i] !== conduireDiv){
                listeDiv[i].style.opacity = "0";
                listeDiv[i].style.display = "flex";
              }
            }
            conduireDiv.classList.add('toBottom');
            setTimeout(() => {
              firstLine.style.display = "flex";
              for(let i = 0; i < 3; i++){
                if(listeDiv[i] !== conduireDiv){
                  listeDiv[i].style.opacity = "0";
                  listeDiv[i].style.display = "flex";
                }
              }
              conduireDiv.classList.remove('toBottom');
              for(let i = 0; i < 6; i++){
                if(listeDiv[i] !== conduireDiv){
                  console.log(listeDiv[i]);
                  listeDiv[i].style.opacity = "1";
                  listeDiv[i].style.transform = ""
                  listeDiv[i].classList.remove("shrink");
                  listeDiv[i].classList.add("growth");
                  setTimeout(() => {
                    listeDiv[i].className = "blockComp";
                  }, 700);
                }
              }
              conduireDiv.classList.remove("blockCompNoHover");
              conduireDiv.classList.add("blockComp");
              clique = "";
              
            }, 700);
        }, 700);
      }, 700);
    }, 700);
}


  



{/**new */}




function collaborerClick(){

  if(clique !== "gerer"){
    clique = "gerer";
    let realiserDiv = document.getElementById('realiser') as HTMLElement;
    let optimiserDiv = document.getElementById('optimiser') as HTMLElement;
    let administrerDiv = document.getElementById('administrer') as HTMLElement;
    let gererDiv = document.getElementById('gerer') as HTMLElement;
    let conduireDiv = document.getElementById('conduire') as HTMLElement;
    let collaborerDiv = document.getElementById('collaborer') as HTMLElement;
    let firstLine = document.getElementById('firstLine') as HTMLElement;
    let listeDiv = [realiserDiv, optimiserDiv, administrerDiv, gererDiv, conduireDiv, collaborerDiv];
    collaborerDiv.classList.add("blockCompNoHover");
    collaborerDiv.classList.remove("blockComp");
    for(let i = 0; i < listeDiv.length; i++){
      if(listeDiv[i] !== collaborerDiv){
        listeDiv[i].classList.add('shrink');
        listeDiv[i].style.transform = "scale(0)";
      }
    }
    setTimeout(() => {
      collaborerDiv.classList.add('toLeft');

      setTimeout(() => {
        for(let i = 3; i < 6; i++){
          if(listeDiv[i] !== collaborerDiv){
            listeDiv[i].style.display = "none";
          }
        }
        collaborerDiv.classList.remove('toLeft');
        collaborerDiv.classList.add('toTop2');
        setTimeout(() => {
          firstLine.style.display = "none";
          collaborerDiv.classList.remove('toTop2');
          collaborerDiv.style.position = "relative";
          collaborerDiv.classList.add('newMasterTopW');

          setTimeout(() => {
            collaborerDiv.classList.remove('newMasterTopW');
            collaborerDiv.style.width = "65rem";
            collaborerDiv.classList.add('newMasterTopH');
            collaborerDiv.children[0].classList.add('img1Anim');
            collaborerDiv.children[2].classList.add('texte6Anim');

            setTimeout(() => {
              for(let i = 3; i < 6; i++){
                console.log(listeDiv[i]);
                if(listeDiv[i] !== collaborerDiv){
                  listeDiv[i].style.display = "none";
                }
              }
              collaborerDiv.style.height = "42rem";
              collaborerDiv.classList.remove('newMasterTopH');
              collaborerDiv.children[0].classList.remove('img1Anim');
              collaborerDiv.children[2].classList.remove('texte6Anim');
              let img = collaborerDiv.children[0] as HTMLImageElement;
              let txt = collaborerDiv.children[2] as HTMLElement;
              let pres = collaborerDiv.children[3] as HTMLElement;
              const slider = document.getElementById('slider6') as HTMLElement;
              const croix1 = document.getElementById('croix6') as HTMLImageElement;
              img.style.position = "relative";
              img.style.right = "46%";
              img.style.bottom = "4.5%";
              img.style.transform = "scale(0.6)";
              img.style.margin = "0";
              txt.style.position = "relative";
              txt.style.right = "30%";
              txt.style.bottom = "27%";
              pres.classList.add('fonduIn');
              slider.classList.add('fonduIn');
              croix1.classList.add('fonduIn');
              pres.style.display = "block";
              slider.style.display = "block";
              croix1.style.display = "block";
              setTimeout(() => {
                pres.classList.remove('fonduIn');
                slider.classList.remove('fonduIn');
                croix1.classList.remove('fonduIn');
              }, 700);
              let mouseDown = false;
              let startX: number;
              let scrollLeft: number;

              let startDragging = function (e: any) {
                e.preventDefault();
                mouseDown = true;
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
              }

              let stopDragging = function (e: any) {
                e.preventDefault();
                mouseDown = false;
              }

              slider.addEventListener('mousemove', (e) => {
                e.preventDefault();
                if(!mouseDown) return;
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2;
                slider.scrollLeft = scrollLeft - walk;
              });

              slider.addEventListener('mousedown', startDragging);
              slider.addEventListener('mouseup', stopDragging);
              slider.addEventListener('mouseleave', stopDragging);

            }, 700);
          }, 700);
        }, 700);
      }, 700);
    }, 600);
}

}

function collaborerOut(){
  let realiserDiv = document.getElementById('realiser') as HTMLElement;
    let optimiserDiv = document.getElementById('optimiser') as HTMLElement;
    let administrerDiv = document.getElementById('administrer') as HTMLElement;
    let gererDiv = document.getElementById('gerer') as HTMLElement;
    let conduireDiv = document.getElementById('conduire') as HTMLElement;
    let collaborerDiv = document.getElementById('collaborer') as HTMLElement;
    let firstLine = document.getElementById('firstLine') as HTMLElement;
    let listeDiv = [realiserDiv, optimiserDiv, administrerDiv, gererDiv, conduireDiv, collaborerDiv];

    let pres = document.getElementById('collaborerP') as HTMLElement;
    const slider = document.getElementById('slider6') as HTMLElement;
    const croix1 = document.getElementById('croix6') as HTMLImageElement;
    pres.classList.add('fonduOut');
    slider.classList.add('fonduOut');
    croix1.classList.add('fonduOut');
    setTimeout(() => {
      pres.classList.remove('fonduOut');
      slider.classList.remove('fonduOut');
      croix1.classList.remove('fonduOut');
      pres.style.opacity = "0";
      slider.style.opacity = "0";
      croix1.style.opacity = "0";
    }, 500);
    collaborerDiv.children[0].classList.add('img1AnimReverse');
    collaborerDiv.children[2].classList.add('texte6AnimReverse');
    setTimeout(() => {
      collaborerDiv.children[0].classList.remove('img1AnimReverse');
      collaborerDiv.children[2].classList.remove('texte6AnimReverse');
      let img = collaborerDiv.children[0] as HTMLImageElement;
      let txt = collaborerDiv.children[2] as HTMLElement;
      let pres = collaborerDiv.children[3] as HTMLElement;
      img.style.position = "static";
      img.style.right = "0";
      img.style.bottom = "0";
      img.style.transform = "scale(1)";
      txt.style.position = "static";
      txt.style.right = "0";
      txt.style.bottom = "0";
      pres.style.display = "none";
      slider.style.display = "none";
      croix1.style.display = "none";
      pres.style.opacity = "1";
      slider.style.opacity = "1";
      croix1.style.opacity = "1";
      collaborerDiv.classList.add('newMasterTopHReverse');
      setTimeout(() => {
        collaborerDiv.classList.remove('newMasterTopHReverse');
        collaborerDiv.style.height = "15rem";
        collaborerDiv.classList.add('newMasterTopWReverse');
        setTimeout(() => {
          collaborerDiv.classList.remove('newMasterTopWReverse');
          collaborerDiv.style.width = "15rem";
          collaborerDiv.classList.add('toRight');
            setTimeout(() => {
              collaborerDiv.classList.remove('toRight');
              for(let i = 3; i < 6; i++){
                if(listeDiv[i] !== collaborerDiv){
                  listeDiv[i].style.opacity = "0";
                  listeDiv[i].style.display = "flex";
                }
              }
              collaborerDiv.classList.add('toBottom');
              setTimeout(() => {
                firstLine.style.display = "flex";
                for(let i = 0; i < 3; i++){
                  console.log("aaa");
                  if(listeDiv[i] !== collaborerDiv){
                    listeDiv[i].style.opacity = "0";
                    listeDiv[i].style.display = "flex";
                  }
                }
                collaborerDiv.classList.remove('toBottom');
                for(let i = 0; i < 6; i++){
                  console.log("aaaa");
                  if(listeDiv[i] !== collaborerDiv){
                    console.log(listeDiv[i]);
                    listeDiv[i].style.opacity = "1";
                    listeDiv[i].style.transform = ""
                    listeDiv[i].classList.remove("shrink");
                    listeDiv[i].classList.add("growth");
                    setTimeout(() => {
                      listeDiv[i].className = "blockComp";
                    }, 700);
                  }
                }
                collaborerDiv.classList.remove("blockCompNoHover");
                collaborerDiv.classList.add("blockComp");
                clique = "";
                
              }, 700);
            }, 700);
        }, 700);
      }, 700);
    }, 700);
}






  
  return (
    <div id="cover2">
      <br /><br />
      <div id="firstLine" className="lines">


        <div id="realiser" className="blockComp" onClick={realiserClick}>

          <Image id="imgRealiser" src={realiser}></Image>
          <img id="croix1" src={croix} onClick={realiserOut}></img>

          <h1>Réaliser</h1>
          <p id="realiserP" className="parag" style={{display:"none"}}>Développer — c'est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client.</p>

          <div id="slider" style={{display:"none"}}>
            <div id="semestres" className="semestres" style={{display:"flex"}}>
            
            <div id="semestre1TotalR" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 1</h2>
            <div id="semestre1R" className="semestre" >
              <a href={sujetRealS1} target="_blank"><button  className="btnSujet">Sujet</button></a>
              <a href={renduRealS1} download><button  className="btnRendu">Rendu</button></a>
              <h3>Acquis !</h3>
            </div>
            </div>

            <div id="semestre2TotalR" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 2</h2>
            <div id="semestre2R" className="semestre">
              <a href={sujetRealS2} target="_blank"><button  className="btnSujet">Sujet</button></a>
              <a href={renduRealS2} download><button  className="btnRendu">Rendu</button></a>
              <h3>Acquis !</h3>
            </div>
            </div>

            <div id="semestre3TotalR" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 3</h2>
            <div id="semestre3R" className="semestre">

              <a href="https://clarolineconnect.univ-lyon1.fr/icap_website/424/76578" target="_blank"><button  className="btnSujet">Sujet</button></a>
              <a href="https://trouvetonplat.alwaysdata.net/" target="_blank"><button  className="btnRendu">Rendu</button></a>
              <h3>Acquis !</h3>
            </div>
            </div>

            <div id="semestre4TotalR" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 4</h2>
            <div id="semestre4R" className="semestre">
              <h2>En cours !</h2>
            </div>
            </div>

            <div id="semestre5TotalR" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 5</h2>
            <div id="semestre5R" className="semestre">
              <h2>Pas encore commencé</h2>            </div>
            </div>

            <div id="semestre6TotalR" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 6</h2>
            <div id="semestre6R" className="semestre">
              <h2>Pas encore commencé</h2>
            </div>
            </div>
            </div>
          </div>

        </div>





        <div id="optimiser" className="blockComp" onClick={optimiserClick}>
          <Image id="imgOptimiser" src={optimiser}></Image>
         <img id="croix2" src={croix} onClick={optimiserOut}></img> 

          <h1>Optimiser</h1>
          <p id="optimiserP" className="parag" style={{display:"none"}}>Proposer des applications informatiques optimisées en 
          fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources..</p>

          <div id="slider2" style={{display:"none"}}>
            <div id="semestres2" className="semestres" style={{display:"flex"}}>
            
            <div id="semestre1TotalO" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 1</h2>
            <div id="semestre1O" className="semestre" >
              <a href={sujetRealS1} target="_blank"><button  className="btnSujet">Sujet</button></a>
              <a href={renduRealS1} download><button  className="btnRendu">Sujet</button></a>

              <h3>Acquis !</h3>
            </div>
            </div>

            <div id="semestre2TotalO" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 2</h2>
            <div id="semestre2O" className="semestre">
              <a href={sujetRealS2} target="_blank"><button  className="btnSujet">Sujet</button></a>
              <a href={renduRealS2} download><button  className="btnRendu">Sujet</button></a>
              <h3>Acquis !</h3>
            </div>
            </div>

            <div id="semestre3TotalO" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 3</h2>
            <div id="semestre3O" className="semestre">

              <a href="https://clarolineconnect.univ-lyon1.fr/icap_website/424/76578" target="_blank"><button  className="btnSujet">Sujet</button></a>
              <a href="https://trouvetonplat.alwaysdata.net/" target="_blank"><button  className="btnRendu">Rendu</button></a>
              <h3>Acquis !</h3>
            </div>
            </div>

            <div id="semestre4TotalO" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 4</h2>
            <div id="semestre4O" className="semestre">
              <h2>En cours !</h2>
            </div>
            </div>

            <div id="semestre5TotalO" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 5</h2>
            <div id="semestre5O" className="semestre">
              <h2>Pas encore commencé</h2>            </div>
            </div>

            <div id="semestre6TotalO" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 6</h2>
            <div id="semestre6O" className="semestre">
              <h2>Pas encore commencé</h2>
            </div>
            </div>
            </div>
          </div>

        </div>





        <div id="administrer" className="blockComp" onClick={administrerClick}>
          <Image id="imgAdministrer" src={administrer}></Image>
          <img id="croix3" src={croix} onClick={administrerOut}></img> 

          <h1>Administrer</h1>
          <p id="administrerP" className="parag" style={{display:"none"}}>Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles 
          des in-frastructures, des services et des réseaux et optimiser le système informatique d'une organisation</p>


          <div id="slider3" style={{display:"none"}}>
            <div id="semestres3" className="semestres" style={{display:"flex"}}>
            
            <div id="semestre1TotalA" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 1</h2>
            <div id="semestre1A" className="semestre" >
              <a href={sujetAdmS1} target="_blank"><button  className="btnSujet"  >Sujet</button></a>
              <a href={renduAdmS1} target="_blank"><button  className="btnRendu">Rendu</button></a>
              <h3>Acquis !</h3>
            </div>
            </div>

            <div id="semestre2TotalA" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 2</h2>
            <div id="semestre2O" className="semestre">
              <a href={sujetAdmS2} target="_blank"><button  className="btnSujet" >Sujet</button></a>
              <a href={renduAdmS2} target="_blank"><button  className="btnRendu">Rendu</button></a>
              <h3>Acquis !</h3>
            </div>
            </div>

            <div id="semestre3TotalA" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 3</h2>
            <div id="semestre3A" className="semestre">

              <a href="https://clarolineconnect.univ-lyon1.fr/icap_website/424/76578" target="_blank"><button  className="btnSujet">Sujet</button></a>
              <a href="https://trouvetonplat.alwaysdata.net/" target="_blank"><button  className="btnRendu">Rendu</button></a>
              <h3>Acquis !</h3>
            </div>
            </div>

            <div id="semestre4TotalA" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 4</h2>
            <div id="semestre4A" className="semestre">
              <h2>En cours !</h2>
            </div>
            </div>

            <div id="semestre5TotalA" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 5</h2>
            <div id="semestre5A" className="semestre">
              <h2>Pas encore commencé</h2>            </div>
            </div>

            <div id="semestre6TotalA" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 6</h2>
            <div id="semestre6A" className="semestre">
              <h2>Pas encore commencé</h2>
            </div>
            </div>
            </div>
          </div>



        </div>
        </div>






        <div id="secondLine" className="lines">
        <div id="gerer" className="blockComp" onClick={gererClick}>
          <Image id="imgGerer" src={gerer}></Image>
          <img id="croix4" src={croix} onClick={gererOut}></img>

          <h1>Gérer</h1>
          <p id="gererP" className="parag" style={{display:"none"}}> Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les 
          informations pour un bon pilotage de l'entreprise</p>

          
          <div id="slider4" style={{display:"none"}}>
            <div id="semestres4" className="semestres" style={{display:"flex"}}>
            
            <div id="semestre1TotalG" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 1</h2>
            <div id="semestre1G" className="semestre" >
              <a href={sujetGerS1} target="_blank"><button  className="btnSujet" >Sujet</button></a>
              <a href={renduGerS1} target="_blank"><button  className="btnRendu">Rendu</button></a>
              <h3>Acquis !</h3>
            </div>
            </div>

            <div id="semestre2TotalG" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 2</h2>
            <div id="semestre2G" className="semestre">
              <a href={sujetGerS2} target="_blank"><button  className="btnSujet">Sujet</button></a>
              <a href={renduGerS2} target="_blank"><button  className="btnRendu">Rendu</button></a>
              <h3>Acquis !</h3>
            </div>
            </div>

            <div id="semestre3TotalG" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 3</h2>
            <div id="semestre3G" className="semestre">
              <a href="https://clarolineconnect.univ-lyon1.fr/icap_website/424/76578" target="_blank"><button  className="btnSujet">Sujet</button></a>
              <a href="https://trouvetonplat.alwaysdata.net/" target="_blank"><button  className="btnRendu">Rendu</button></a>
              <h3>Acquis !</h3>
            </div>
            </div>

            <div id="semestre4TotalG" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 4</h2>
            <div id="semestre4G" className="semestre">
              <h2>En cours !</h2>
            </div>
            </div>

            <div id="semestre5TotalG" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 5</h2>
            <div id="semestre5G" className="semestre">
              <h2>Pas encore commencé</h2>
            </div>
            </div>

            <div id="semestre6TotalG" className="semestreTotal">
            <h2 style={{margin : 0}}>Semestre 6</h2>
            <div id="semestre6G" className="semestre">
            <h2>Pas encore commencé</h2>
                  </div>
                  </div>
                </div>

</div>
            </div>
       






        <div id="conduire" className="blockComp" onClick={conduireClick}>

        <Image id="imgConduire" src={conduire}></Image>
        <img id="croix5" src={croix} onClick={conduireOut}></img>

        <h1>Conduire</h1>
        <p id="conduireP" className="parag" style={{display:"none"}}>Satisfaire les besoins des utilisateurs au 
        regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles</p>

        <div id="slider5" style={{display:"none"}}>
          <div id="semestres5" className="semestres" style={{display:"flex"}}>

            <div id="semestre1TotalC" className="semestreTotal">
              <h2 style={{margin : 0}}>Semestre 1</h2>
              <div id="semestre1C" className="semestre">
                <a href={sujetConS1} target="_blank"><button className="btnSujet">Sujet</button></a>
                <a href={renduConS1} target="_blank"><button  className="btnRendu">Rendu</button></a>
                <h3>Acquis !</h3>
              </div>
            </div>

            <div id="semestre2TotalC" className="semestreTotal">
              <h2 style={{margin : 0}}>Semestre 2</h2>
              <div id="semestre2C" className="semestre">
                <a href={sujetRealS2} target="_blank"><button  className="btnSujet">Sujet</button></a>
                <a href={renduRealS2} target="_blank"><button  className="btnRendu">Rendu</button></a>
                <h3>Acquis !</h3>
              </div>
            </div>

            <div id="semestre3TotalC" className="semestreTotal">
              <h2 style={{margin : 0}}>Semestre 3</h2>
              <div id="semestre3C" className="semestre">
                <a href="https://clarolineconnect.univ-lyon1.fr/icap_website/424/76579" target="_blank"><button  className="btnSujet">Sujet</button></a>
                <a href="https://trouvetonplat.alwaysdata.net/" target="_blank"><button  className="btnRendu">Rendu</button></a>
                <h3>Acquis !</h3>
              </div>
            </div>

            <div id="semestre4TotalC" className="semestreTotal">
              <h2 style={{margin : 0}}>Semestre 4</h2>
              <div id="semestre4C" className="semestre">
                <h2>En cours !</h2>
              </div>
            </div>

            <div id="semestre5TotalC" className="semestreTotal">
              <h2 style={{margin : 0}}>Semestre 5</h2>
              <div id="semestre5C" className="semestre">
                <h2>Pas encore commencé</h2>            
              </div>
            </div>

            <div id="semestre6TotalC" className="semestreTotal">
                  <h2 style={{margin : 0}}>Semestre 6</h2>
                  <div id="semestre6G" className="semestre">
                  <h2>Pas encore commencé</h2>
                        </div>
                        </div>
                      </div>
                      </div>
                  </div>





      <div id="collaborer" className="blockComp" onClick={collaborerClick}>
      <Image id="imgCollaborer" src={collaborer}></Image>
      <img id="croix6" src={croix} onClick={collaborerOut}></img>

      <h1>Collaborer</h1>
      <p id="collaborerP" className="parag" style={{display:"none"}}>Travailler avec des individus ou des groupes d'individus de manière coordonnée et 
      coopérative en mettant en commun des compétences et des ressources pour atteindre un objectif commun.</p>


      <div id="slider6" style={{display:"none"}}>
        <div id="semestres6" className="semestres" style={{display:"flex"}}>
        
        <div id="semestre1TotalCo" className="semestreTotal">
        <h2 style={{margin : 0}}>Semestre 1</h2>
        <div id="semestre1Co" className="semestre">
          <a href={sujetColS1} target="_blank"><button  className="btnSujet">Sujet</button></a>
          <a href={renduColS1} target="_blank"><button  className="btnRendu">Rendu</button></a>
          <h3>Acquis !</h3>
        </div>
        </div>

        <div id="semestre2TotalCo" className="semestreTotal">
        <h2 style={{margin : 0}}>Semestre 2</h2>
        <div id="semestre2Co" className="semestre">
          <a href={sujetColS2} target="_blank"><button  className="btnSujet">Sujet</button></a>
          <a href={renduColS2} target="_blank"><button  className="btnRendu">Rendu</button></a>
          <h3>Acquis !</h3>
        </div>
        </div>

        <div id="semestre3TotalCo" className="semestreTotal">
        <h2 style={{margin : 0}}>Semestre 3</h2>
        <div id="semestre3Co" className="semestre">

          <a href="https://clarolineconnect.univ-lyon1.fr/icap_website/424/76579" target="_blank"><button  className="btnSujet">Sujet</button></a>
          <a href="https://trouvetonplat.alwaysdata.net/" target="_blank"><button  className="btnRendu">Rendu</button></a>
          <h3>Acquis !</h3>
        </div>
        </div>

        <div id="semestre4TotalCo" className="semestreTotal">
        <h2 style={{margin : 0}}>Semestre 4</h2>
        <div id="semestre4Co" className="semestre">
          <h2>En cours !</h2>
        </div>
        </div>

        <div id="semestre5TotalCo" className="semestreTotal">
        <h2 style={{margin : 0}}>Semestre 5</h2>
        <div id="semestre5Co" className="semestre">
          <h2>Pas encore commencé</h2>            </div>
        </div>

        <div id="semestre6TotalCo" className="semestreTotal">
        <h2 style={{margin : 0}}>Semestre 6</h2>
        <div id="semestre6Co" className="semestre">
          <h2>Pas encore commencé</h2>
        </div>
        </div>
        </div>
      
      </div>
      

      </div>
        </div>
        </div>
  )
}