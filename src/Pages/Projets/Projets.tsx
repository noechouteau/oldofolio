import React, { createElement } from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import pacmanFull from "../../assets/mini/pacmanFull.png";
import pacmanEmpty from "../../assets/mini/pacmanEmpty.png";
import pokeballFull from "../../assets/mini/pokeballFull.png";
import pokeballEmpty from "../../assets/mini/pokeballEmpty.png";
import platFull from "../../assets/mini/platFull.png";
import platEmpty from "../../assets/mini/platEmpty.png";
import annuaireFull from "../../assets/mini/annuaireFull.png";
import annuaireEmpty from "../../assets/mini/annuaireEmpty.png";
import courseFull from "../../assets/mini/listeFull.png";
import courseEmpty from "../../assets/mini/listeEmpty.png";
import mapFull from "../../assets/mini/mapFull.png";
import mapEmpty from "../../assets/mini/mapEmpty.png";
import portfolioFull from "../../assets/mini/portfolioFull.png";
import portfolioEmpty from "../../assets/mini/portfolioEmpty.png";
import siteFull from "../../assets/mini/siteFull.png";
import siteEmpty from "../../assets/mini/siteEmpty.png";
import html from "../../assets/badges/html.png";
import css from "../../assets/badges/css.png";
import c from "../../assets/badges/c.png";
import figma from "../../assets/badges/figma.png";
import firebase from "../../assets/badges/firebase.png";
import kotlin from "../../assets/badges/kotlin.png";
import java from "../../assets/badges/java.png";
import javascript from "../../assets/badges/javascript.png";
import php from "../../assets/badges/php.png";
import react from "../../assets/badges/react.png";
import symfony from "../../assets/badges/symfony.png";
import git from "../../assets/badges/git.png";
import pokemonFile from "../../assets/app-release.apk";
import pkmS1 from "../../assets/screen/pkmS1.jpg";
import pkmS2 from "../../assets/screen/pkmS2.jpg";
import pkmS3 from "../../assets/screen/pkmS3.jpg";
import pkmS4 from "../../assets/screen/pkmS4.jpg";
import mapFile from "../../assets/mapFile.zip";
import mapS1 from "../../assets/screen/mapS1.png";
import siteFile from "../../assets/site.zip";
import sae_c from "../../assets/sae_c.zip"
import './Projets.css';
import { createLessThan } from 'typescript';


export default function Projets() {

    let added = false;
    let clikouz = "";

    function addListeners(){
        if(added == false){

            const slider = document.querySelector('#vertiSlider') as HTMLElement;
            
            let mouseDown = false;
            let startY: number;
            let scrollTop: number;

            let startDragging = function (e: any) {
            e.preventDefault();
            mouseDown = true;
            startY = e.pageY - slider.offsetTop;
            scrollTop = slider.scrollTop;
            }

            let stopDragging = function (e: any) {
            e.preventDefault();
            mouseDown = false;
            }

            slider.addEventListener('mousemove', (e) => {
            e.preventDefault();
            if(!mouseDown) return;
                const y = e.pageY - slider.offsetTop;
                const walk = (y - startY) * 2;
                slider.scrollTop = scrollTop - walk;
            });

            slider.addEventListener('mousedown', startDragging);
            slider.addEventListener('mouseup', stopDragging);
            slider.addEventListener('mouseleave', stopDragging);
            added = true;
            console.log(slider);
        }
    }

    function entered (e: any){
        e.target.parentElement.children[1].style.opacity = "0";
        e.target.parentElement.children[0].style.opacity = "1";
    }

    function left (e: any){
        e.target.parentElement.children[0].style.opacity = "0";
        e.target.parentElement.children[1].style.opacity = "1";
    }

    function pacmanClicked(){
        let asupr = document.querySelector("#pasdispo") as HTMLElement;
        if(asupr != null){
            asupr.remove();
        }
        if(clikouz != "pacman"){

            if(clikouz != ""){
                let rem = document.querySelector(".cliquedd") as HTMLElement;
                rem.classList.remove("cliquedd");
                rem.style.opacity = "";
                let pacmanFull = document.querySelector('#pacmanFull') as HTMLImageElement;
                let pokeballFull = document.querySelector('#pokeballFull') as HTMLImageElement;
                let mapFull = document.querySelector('#mapFull') as HTMLImageElement;
                if(rem != pacmanFull && rem != pokeballFull && rem != mapFull){
                    rem.style.opacity = "0";
                    rem.onmouseenter = entered;
                    rem.onmouseleave = left;
                    let parent = rem.parentElement as HTMLDivElement;
                    let children = parent.children[1] as HTMLImageElement;
                    children.style.opacity = "1";
                }
                let projetVu = document.querySelector('#projetVu') as HTMLImageElement;
                let langages = document.querySelector('#langages') as HTMLElement;
                let titre = document.querySelector('#titre') as HTMLElement;
                let details = document.querySelector('#details') as HTMLElement;
                let description = document.querySelector('#description') as HTMLElement;
                let fonctionnement = document.querySelector('#fonctionnement') as HTMLElement;
                let accès = document.querySelector('#accès') as HTMLElement;
                accès.style.display = "flex";
                let maquettes = document.querySelector('#maquettes') as HTMLElement;
                let TMAQ = document.querySelector('#TMAQ') as HTMLElement;
                TMAQ.style.display = "none";
                let tdesc = document.querySelector('#TDESC') as HTMLElement;
                let hidden = document.querySelector('#hidden') as HTMLElement;
                let descAA = document.querySelector('#descAA') as HTMLElement;
                pacmanFull.style.opacity = "1";
                pacmanFull.classList.add("cliquedd");
                hidden.style.opacity = "0";
                if(maquettes.children[0] != undefined){
                    maquettes.children[0].remove();
                }
                let screens = document.querySelector('#screens') as HTMLElement;
                while(screens.childElementCount > 0){
                    screens.children[0].remove();
                }
                langages.style.opacity = "0";
                projetVu.style.opacity = "0";
                hidden.style.display = "none";
                let site = document.querySelector('#siteLien') as HTMLElement;
                let tele = document.querySelector('#teleLien') as HTMLElement;
                site.setAttribute("href", "");
                site.setAttribute("target", "_blank");
                site.style.display = "block";
                tele.style.display = "block";
                titre.classList.add("toLEFT"); 
    
                setTimeout(function(){
                    titre.style.left = "18rem";
                    titre.style.position = "relative";
                    projetVu.style.display = "none";
                    langages.style.display = "none";
                    titre.classList.remove("toLEFT");
                    
                }, 500);
                setTimeout(function(){
                    
                    for(let i = 1; i < langages.children.length+1; i++){
                        let child = langages.children[langages.children.length-i] as HTMLElement;
                        langages.removeChild(child);
                    }
                    for(let i = 1; i < langages.children.length+1; i++){
                        let child = langages.children[langages.children.length-i] as HTMLElement;
                        langages.removeChild(child);
                    }
                    for(let i = 1; i < langages.children.length+1; i++){
                        let child = langages.children[langages.children.length-i] as HTMLElement;
                        langages.removeChild(child);
                    }
                    langages.style.opacity = "1";
                    clikouz = "pacman";
                    pacmanFull.style.opacity = "1";
                    titre.classList.add("toTOP");
                    descAA.classList.add("toTOP");
                    tdesc.classList.add("toTOP");
                    setTimeout(function(){
                        titre.innerHTML = "PAC-MAN";
                        description.innerHTML = "Ce projet consiste en un site web vous permettant de jouer au jeu 'Pacman' en ligne. Vous pouvez jouer avec les flèches directionnelles du clavier ou les lettres ! Ce projet est un projet fait en binôme, et ma mission a été de créer un menu intéresant et attirant. Je vous laisse tester en cliquant plus bas !";
                        titre.classList.add("fromBtoT");
                        tdesc.classList.add("fromBtoT");
                        descAA.classList.add("fromBtoT");
                    },300);

                    setTimeout(function(){
                        fonctionnement.innerHTML = "Pour le menu, j'ai créé diverses animations en combinant CSS et Javascript. J'ai également utilisé Figma pour créer divers assets/maquettes. Nous avons utilisé un système de 'cookie' pour stocker les scores des joueurs et nous avons utilisé un algorithme pour l'I.A. du jeu. Enfin, pour les déplacements du joueur, nous avons utilisé un tableau de booléens (imposé par le professeur).";
                        projetVu.style.display = "block";
                        projetVu.style.opacity = "0";
                        langages.style.display = "block";
                        let site = document.querySelector('#siteLien') as HTMLElement;
                        let tele = document.querySelector('#teleLien') as HTMLElement;
                        site.setAttribute("href", "http://p2102056.pages.univ-lyon1.fr/site-pacman/main.html");
                        tele.style.display = "none";

                            titre.classList.remove("toTOP");
                            tdesc.classList.remove("toTOP");
                            descAA.classList.remove("toTOP");
                            titre.classList.remove("fromBtoT");
                            tdesc.classList.remove("fromBtoT");
                            descAA.classList.remove("fromBtoT");
                            titre.style.position = "relative";
                            titre.classList.add("toRIGHT");
                            setTimeout(function(){
                                titre.style.left = "18rem";
                                titre.classList.remove("toRIGHT");
                            }, 1000);
                            setTimeout(function(){
                                projetVu.style.opacity = "1";
                                titre.style.position = "static";
                                titre.style.left = "";
                                projetVu.src = pacmanFull.src;
                                let htmlBadge = document.createElement("img");
                                let cssBadge = document.createElement("img");
                                let jsBadge = document.createElement("img");
                                let gitBadge = document.createElement("img");
                                htmlBadge.style.opacity = "0";
                                TMAQ.style.display = "block";
                                cssBadge.style.opacity = "0";
                                jsBadge.style.opacity = "0";
                                gitBadge.style.opacity = "0";
                                htmlBadge.src = html;
                                cssBadge.src = css;
                                jsBadge.src = javascript;
                                gitBadge.src = git;
                                htmlBadge.id = "htmlBadge";
                                cssBadge.id = "cssBadge";
                                jsBadge.id = "jsBadge";
                                gitBadge.id = "gitBadge";
                                langages.appendChild(htmlBadge);
                                langages.appendChild(cssBadge);
                                langages.appendChild(jsBadge);
                                langages.appendChild(gitBadge);
                                setTimeout(function(){
                                    htmlBadge.style.opacity = "1";
                                    cssBadge.style.opacity = "1";
                                    jsBadge.style.opacity = "1";
                                    gitBadge.style.opacity = "1";
                                }, 100);
                                details.style.overflowY = "scroll";
                                let iframe = document.createElement("iframe");
                                iframe.id = "iframeFigma";
                                iframe.src = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2aGIc2opwNMfj2MXydArJn%2FUntitled%3Fnode-id%3D0%253A1%26t%3DdOtiFVPQZdM73Avp-1";
                                iframe.width = "800";
                                iframe.height = "450";
                                iframe.allowFullscreen = true;
                                maquettes.appendChild(iframe);
                                hidden.style.opacity = "0";
                                hidden.style.display = "block";
                                setTimeout(function(){
                                    hidden.style.opacity = "1";
                                }, 100);
                            }, 700);

                    }, 700);
                }, 500);
            }else{

            clikouz = "pacman";
            let pacmanFull = document.querySelector('#pacmanFull') as HTMLImageElement;
            let projetVu = document.querySelector('#projetVu') as HTMLImageElement;
            let langages = document.querySelector('#langages') as HTMLElement;
            let titre = document.querySelector('#titre') as HTMLElement;
            let details = document.querySelector('#details') as HTMLElement;
            let description = document.querySelector('#description') as HTMLElement;
            let fonctionnement = document.querySelector('#fonctionnement') as HTMLElement;
            let accès = document.querySelector('#accès') as HTMLElement;
            let maquettes = document.querySelector('#maquettes') as HTMLElement;
            accès.style.display = "flex";
            let tdesc = document.querySelector('#TDESC') as HTMLElement;
            let hidden = document.querySelector('#hidden') as HTMLElement;
            let descAA = document.querySelector('#descAA') as HTMLElement;
            

            pacmanFull.style.opacity = "1";
            pacmanFull.classList.add("cliquedd");
            titre.classList.add("toTOP");
            descAA.classList.add("toTOP");
            let site = document.querySelector('#siteLien') as HTMLElement;
                let tele = document.querySelector('#teleLien') as HTMLElement;
                site.style.display = "block";
                tele.style.display = "block";
                site.setAttribute("href", "http://p2102056.pages.univ-lyon1.fr/site-pacman/main.html");
                site.setAttribute("target", "_blank");
                tele.style.display = "none";
            tdesc.classList.add("toTOP");
            
            setTimeout(function(){
                titre.innerHTML = "PAC-MAN";
                description.innerHTML = "Ce projet consiste en un site web vous permettant de jouer au jeu 'Pacman' en ligne. Vous pouvez jouer avec les flèches directionnelles du clavier ou les lettres ! Ce projet est un projet fait en binôme, et ma mission a été de créer un menu intéresant et attirant. Je vous laisse tester en cliquant plus bas !";
                fonctionnement.innerHTML = "Pour le menu, j'ai créé diverses animations en combinant CSS et Javascript. J'ai également utilisé Figma pour créer divers assets/maquettes. Nous avons utilisé un système de 'cookie' pour stocker les scores des joueurs et nous avons utilisé un algorithme pour l'I.A. du jeu. Enfin, pour les déplacements du joueur, nous avons utilisé un tableau de booléens (imposé par le professeur).";
                projetVu.style.display = "block";
                projetVu.style.opacity = "0";
                langages.style.display = "block";
                titre.classList.add("fromBtoT");
                tdesc.classList.add("fromBtoT");
                descAA.classList.add("fromBtoT");
                setTimeout(function(){
                    titre.classList.remove("toTOP");
                    tdesc.classList.remove("toTOP");
                    descAA.classList.remove("toTOP");
                    titre.classList.remove("fromBtoT");
                    tdesc.classList.remove("fromBtoT");
                    descAA.classList.remove("fromBtoT");
                    titre.style.position = "relative";
                    titre.classList.add("toRIGHT");
                    setTimeout(function(){
                        titre.style.left = "18rem";
                        titre.classList.remove("toRIGHT");
                    }, 1000);
                    setTimeout(function(){
                        projetVu.style.opacity = "1";
                        titre.style.position = "static";
                        titre.style.left = "";
                        projetVu.src = pacmanFull.src;
                        let htmlBadge = document.createElement("img");
                        let cssBadge = document.createElement("img");
                        let jsBadge = document.createElement("img");
                        let gitBadge = document.createElement("img");
                        htmlBadge.style.opacity = "0";
                        cssBadge.style.opacity = "0";
                        jsBadge.style.opacity = "0";
                        gitBadge.style.opacity = "0";
                        htmlBadge.src = html;
                        cssBadge.src = css;
                        let TMAQ = document.querySelector('#TMAQ') as HTMLElement;
                        TMAQ.style.display = "block";
                        jsBadge.src = javascript;
                        gitBadge.src = git;
                        htmlBadge.id = "htmlBadge";
                        cssBadge.id = "cssBadge";
                        jsBadge.id = "jsBadge";
                        gitBadge.id = "gitBadge";
                        langages.appendChild(htmlBadge);
                        langages.appendChild(cssBadge);
                        langages.appendChild(jsBadge);
                        langages.appendChild(gitBadge);
                        setTimeout(function(){
                            htmlBadge.style.opacity = "1";
                            cssBadge.style.opacity = "1";
                            jsBadge.style.opacity = "1";
                            gitBadge.style.opacity = "1";
                        }, 100);
                        details.style.overflowY = "scroll";
                        let iframe = document.createElement("iframe");
                        iframe.id = "iframeFigma";
                        iframe.src = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2aGIc2opwNMfj2MXydArJn%2FUntitled%3Fnode-id%3D0%253A1%26t%3DdOtiFVPQZdM73Avp-1";
                        iframe.width = "800";
                        iframe.height = "450";
                        iframe.allowFullscreen = true;
                        maquettes.appendChild(iframe);
                        hidden.style.opacity = "0";
                        hidden.style.display = "block";
                        setTimeout(function(){
                            hidden.style.opacity = "1";
                        }, 100);
                    }, 700);
                }, 500);
            }, 300);
    }}
}






























function pokeballClicked(){
    let asupr = document.querySelector("#pasdispo") as HTMLElement;
        if(asupr != null){
            asupr.remove();
        }
    if(clikouz != "pokeball"){

        if(clikouz != ""){
            let rem = document.querySelector(".cliquedd") as HTMLElement;
            
                rem.classList.remove("cliquedd");
                rem.style.opacity = "";
                let pacmanFull = document.querySelector('#pacmanFull') as HTMLImageElement;
                let pokeballFull = document.querySelector('#pokeballFull') as HTMLImageElement;
                let mapFull = document.querySelector('#mapFull') as HTMLImageElement;
                if(rem != pacmanFull && rem != pokeballFull && rem != mapFull){
                    rem.style.opacity = "0";
                    rem.onmouseenter = entered;
                    rem.onmouseleave = left;
                    let parent = rem.parentElement as HTMLDivElement;
                    let children = parent.children[1] as HTMLImageElement;
                    children.style.opacity = "1";
                }
            let projetVu = document.querySelector('#projetVu') as HTMLImageElement;
            let langages = document.querySelector('#langages') as HTMLElement;
            let titre = document.querySelector('#titre') as HTMLElement;
            let details = document.querySelector('#details') as HTMLElement;
            let description = document.querySelector('#description') as HTMLElement;
            let fonctionnement = document.querySelector('#fonctionnement') as HTMLElement;
            let accès = document.querySelector('#accès') as HTMLElement;
            accès.style.display = "flex";
            let maquettes = document.querySelector('#maquettes') as HTMLElement;
            let TMAQ = document.querySelector('#TMAQ') as HTMLElement;
            TMAQ.style.display = "none";
            let tdesc = document.querySelector('#TDESC') as HTMLElement;
            let hidden = document.querySelector('#hidden') as HTMLElement;
            let descAA = document.querySelector('#descAA') as HTMLElement;
            pokeballFull.style.opacity = "1";
            pokeballFull.classList.add("cliquedd");
            hidden.style.opacity = "0";
            if(maquettes.children[0] != undefined){
                maquettes.children[0].remove();
            }
            let screens = document.querySelector('#screens') as HTMLElement;
                while(screens.childElementCount > 0){
                    screens.children[0].remove();
                }
            langages.style.opacity = "0";
            projetVu.style.opacity = "0";
            hidden.style.display = "none";
            let site = document.querySelector('#siteLien') as HTMLElement;
            let tele = document.querySelector('#teleLien') as HTMLElement;
            tele.setAttribute("href", pokemonFile);
            site.setAttribute("target", "_blank");
            TMAQ.style.display = "block";
            site.style.display = "block";
            tele.style.display = "block";
            titre.classList.add("toLEFT"); 

            setTimeout(function(){
                titre.style.left = "18rem";
                titre.style.position = "relative";
                projetVu.style.display = "none";
                langages.style.display = "none";
                titre.classList.remove("toLEFT");
                
            }, 500);
            setTimeout(function(){
                
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                langages.style.opacity = "1";
                clikouz = "pokeball";
                pokeballFull.style.opacity = "1";
                titre.classList.add("toTOP");
                descAA.classList.add("toTOP");
                tdesc.classList.add("toTOP");
                setTimeout(function(){
                    titre.innerHTML = "PokeFusion";
                    description.innerHTML = "Ce projet est une application mobile qui permet de créer des pokémons en en fusionnant deux existants. L'utilisateur peut également acheter toutes sortes d'oeufs pour obtenir des pokémons de différentes raretés. Il peut également acheter des objets pour améliorer ses pokémons. Enfin, en se connectant avec un ami, il peut fusionner ses pokémons avec ceux de ce dernier !";
                    titre.classList.add("fromBtoT");
                    tdesc.classList.add("fromBtoT");
                    descAA.classList.add("fromBtoT");
                },300);

                setTimeout(function(){
                    let screens = document.querySelector('#screens') as HTMLElement;
                    let pkmS1im = document.createElement("img") as HTMLImageElement;
                    let pkmS2im = document.createElement("img") as HTMLImageElement;
                    let pkmS3im = document.createElement("img") as HTMLImageElement;
                    let pkmS4im = document.createElement("img") as HTMLImageElement;
                    let a1 = document.createElement("a") as HTMLAnchorElement;
                    let a2 = document.createElement("a") as HTMLAnchorElement;
                    let a3 = document.createElement("a") as HTMLAnchorElement;
                    let a4 = document.createElement("a") as HTMLAnchorElement;
                    a1.href = pkmS1;
                    a2.href = pkmS2;
                    a3.href = pkmS3;
                    a4.href = pkmS4;
                    a1.target = "_blank";
                    a2.target = "_blank";
                    a3.target = "_blank";
                    a4.target = "_blank";
                    pkmS1im.src = pkmS1;
                    pkmS2im.src = pkmS2;
                    pkmS3im.src = pkmS3;
                    pkmS4im.src = pkmS4;
                    pkmS1im.setAttribute("href",pkmS1);
                    a1.appendChild(pkmS1im);
                    a2.appendChild(pkmS2im);
                    a3.appendChild(pkmS3im);
                    a4.appendChild(pkmS4im);
                    screens.appendChild(a1);
                    screens.appendChild(a2);
                    screens.appendChild(a3);
                    screens.appendChild(a4);
                    fonctionnement.innerHTML = "L'application a été développée en Kotlin sur Android Studio. Pour les données des pokémons, nous avons utilisé 'pokéAPI'. Nous avons également créé notre propre API pour les images des fusions. Le stockage des données est fait sur Firebase, et la connexion avec un ami est faite via Bluetooth et réseau local. Enfin, nous avons utilisé OpenAI pour générer des noms de pokémons fusionnés.";
                    projetVu.style.display = "block";
                    projetVu.style.opacity = "0";
                    langages.style.display = "block";
                    let site = document.querySelector('#siteLien') as HTMLElement;
                    let tele = document.querySelector('#teleLien') as HTMLElement;
                    site.style.display = "none";
                    tele.setAttribute("href", pokemonFile);
                    tele.setAttribute("target", "_blank");

                        titre.classList.remove("toTOP");
                        tdesc.classList.remove("toTOP");
                        descAA.classList.remove("toTOP");
                        titre.classList.remove("fromBtoT");
                        tdesc.classList.remove("fromBtoT");
                        descAA.classList.remove("fromBtoT");
                        titre.style.position = "relative";
                        titre.classList.add("toRIGHT2");
                        setTimeout(function(){
                            titre.style.left = "18rem";
                            titre.classList.remove("toRIGHT2");
                        }, 1000);
                        setTimeout(function(){
                            projetVu.style.opacity = "1";
                            titre.style.position = "static";
                            titre.style.left = "";
                            projetVu.src = pokeballFull.src;
                            let kotlinBadge = document.createElement("img");
                            let firebaseBadge = document.createElement("img");
                            let gitBadge = document.createElement("img");
                            kotlinBadge.style.opacity = "0";
                            firebaseBadge.style.opacity = "0";
                            gitBadge.style.opacity = "0";
                            kotlinBadge.src = kotlin;
                            firebaseBadge.src = firebase;
                            gitBadge.src = git;
                            kotlinBadge.id = "kotlinBadge";
                            firebaseBadge.id = "firebaseBadge";
                            gitBadge.id = "gitBadge";
                            langages.appendChild(kotlinBadge);
                            langages.appendChild(firebaseBadge);
                            langages.appendChild(gitBadge);
                            setTimeout(function(){
                                kotlinBadge.style.opacity = "1";
                                firebaseBadge.style.opacity = "1";
                                gitBadge.style.opacity = "1";
                            }, 100);
                            details.style.overflowY = "scroll";
                            let iframe = document.createElement("iframe");
                            iframe.id = "iframeFigma";
                            iframe.src = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F331N5reCRhxjdphOAToHWx%2FUntitled%3Fnode-id%3D0%253A1%26t%3DICehA0lokYdNerxk-1";
                            iframe.width = "800";
                            iframe.height = "450";
                            iframe.allowFullscreen = true;
                            maquettes.appendChild(iframe);
                            hidden.style.opacity = "0";
                            hidden.style.display = "block";
                            setTimeout(function(){
                                hidden.style.opacity = "1";
                            }, 100);
                        }, 700);

                }, 700);
            }, 500);
        }else{

        clikouz = "pokeball";
        let pokeballFull = document.querySelector('#pokeballFull') as HTMLImageElement;
        let projetVu = document.querySelector('#projetVu') as HTMLImageElement;
        let langages = document.querySelector('#langages') as HTMLElement;
        let titre = document.querySelector('#titre') as HTMLElement;
        let details = document.querySelector('#details') as HTMLElement;
        let description = document.querySelector('#description') as HTMLElement;
        let fonctionnement = document.querySelector('#fonctionnement') as HTMLElement;
        let accès = document.querySelector('#accès') as HTMLElement;
        let maquettes = document.querySelector('#maquettes') as HTMLElement;
        let tdesc = document.querySelector('#TDESC') as HTMLElement;
        accès.style.display = "flex";
        let hidden = document.querySelector('#hidden') as HTMLElement;
        let descAA = document.querySelector('#descAA') as HTMLElement;
        let screens = document.querySelector('#screens') as HTMLElement;
        let pkmS1im = document.createElement("img") as HTMLImageElement;
        let pkmS2im = document.createElement("img") as HTMLImageElement;
        let pkmS3im = document.createElement("img") as HTMLImageElement;
        let pkmS4im = document.createElement("img") as HTMLImageElement;
        let a1 = document.createElement("a") as HTMLAnchorElement;
        let a2 = document.createElement("a") as HTMLAnchorElement;
        let a3 = document.createElement("a") as HTMLAnchorElement;
        let a4 = document.createElement("a") as HTMLAnchorElement;
        a1.href = pkmS1;
        a2.href = pkmS2;
        a3.href = pkmS3;
        a4.href = pkmS4;
        a1.target = "_blank";
        a2.target = "_blank";
        a3.target = "_blank";
        a4.target = "_blank";
        pkmS1im.src = pkmS1;
        pkmS2im.src = pkmS2;
        pkmS3im.src = pkmS3;
        pkmS4im.src = pkmS4;
        pkmS1im.setAttribute("href",pkmS1);
        a1.appendChild(pkmS1im);
        a2.appendChild(pkmS2im);
        a3.appendChild(pkmS3im);
        a4.appendChild(pkmS4im);
        screens.appendChild(a1);
        screens.appendChild(a2);
        screens.appendChild(a3);
        screens.appendChild(a4);
        pokeballFull.style.opacity = "1";
        pokeballFull.classList.add("cliquedd");
        titre.classList.add("toTOP");
        descAA.classList.add("toTOP");
        let site = document.querySelector('#siteLien') as HTMLElement;
            let tele = document.querySelector('#teleLien') as HTMLElement;
            tele.setAttribute("href", pokemonFile);
            tele.setAttribute("target", "_blank");
            tele.style.display = "block";
            site.style.display = "none";
        tdesc.classList.add("toTOP");
        
        setTimeout(function(){
            titre.innerHTML = "PokeFusion";
            description.innerHTML = "Ce projet est une application mobile qui permet de créer des pokémons en en fusionnant deux existants. L'utilisateur peut également acheter toutes sortes d'oeufs pour obtenir des pokémons de différentes raretés. Il peut également acheter des objets pour améliorer ses pokémons. Enfin, en se connectant avec un ami, il peut fusionner ses pokémons avec ceux de ce dernier !";
            fonctionnement.innerHTML = "L'application a été développée en Kotlin sur Android Studio. Pour les données des pokémons, nous avons utilisé 'pokéAPI'. Nous avons également créé notre propre API pour les images des fusions. Le stockage des données est fait sur Firebase, et la connexion avec un ami est faite via Bluetooth et réseau local. Enfin, nous avons utilisé OpenAI pour générer des noms de pokémons fusionnés.";
            projetVu.style.display = "block";
            projetVu.style.opacity = "0";
            langages.style.display = "block";
            titre.classList.add("fromBtoT");
            tdesc.classList.add("fromBtoT");
            descAA.classList.add("fromBtoT");
            setTimeout(function(){
                titre.innerHTML = "PokeFusion";
                projetVu.style.display = "block";
                projetVu.style.opacity = "0";
                langages.style.display = "block";
                let site = document.querySelector('#siteLien') as HTMLElement;
                let tele = document.querySelector('#teleLien') as HTMLElement;
                site.style.display = "none";
                tele.setAttribute("href", pokemonFile);
                tele.setAttribute("target", "_blank");

                    titre.classList.remove("toTOP");
                    tdesc.classList.remove("toTOP");
                    descAA.classList.remove("toTOP");
                    titre.classList.remove("fromBtoT");
                    tdesc.classList.remove("fromBtoT");
                    descAA.classList.remove("fromBtoT");
                    titre.style.position = "relative";
                    titre.classList.add("toRIGHT2");
                    setTimeout(function(){
                        titre.style.left = "18rem";
                        titre.classList.remove("toRIGHT2");
                    }, 1000);
                    setTimeout(function(){
                        projetVu.style.opacity = "1";
                        titre.style.position = "static";
                        titre.style.left = "";
                        projetVu.src = pokeballFull.src;
                        let kotlinBadge = document.createElement("img");
                        let firebaseBadge = document.createElement("img");
                        let gitBadge = document.createElement("img");
                        kotlinBadge.style.opacity = "0";
                        firebaseBadge.style.opacity = "0";
                        gitBadge.style.opacity = "0";
                        kotlinBadge.src = kotlin;
                        firebaseBadge.src = firebase;
                        gitBadge.src = git;
                        let TMAQ = document.querySelector('#TMAQ') as HTMLElement;
                        TMAQ.style.display = "block";
                        kotlinBadge.id = "kotlinBadge";
                        firebaseBadge.id = "firebaseBadge";
                        gitBadge.id = "gitBadge";
                        langages.appendChild(kotlinBadge);
                        langages.appendChild(firebaseBadge);
                        langages.appendChild(gitBadge);
                        setTimeout(function(){
                            kotlinBadge.style.opacity = "1";
                            firebaseBadge.style.opacity = "1";
                            gitBadge.style.opacity = "1";
                        }, 100);
                        details.style.overflowY = "scroll";
                        let iframe = document.createElement("iframe");
                        iframe.id = "iframeFigma";
                        iframe.src = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F331N5reCRhxjdphOAToHWx%2FUntitled%3Fnode-id%3D0%253A1%26t%3DICehA0lokYdNerxk-1";
                        iframe.width = "800";
                        iframe.height = "450";
                        iframe.allowFullscreen = true;
                        maquettes.appendChild(iframe);
                        hidden.style.opacity = "0";
                        hidden.style.display = "block";
                        setTimeout(function(){
                            hidden.style.opacity = "1";
                        }, 100);
                    }, 700);

            }, 500);
        }, 300);
}}
}




























function platClicked(){
    let asupr = document.querySelector("#pasdispo") as HTMLElement;
        if(asupr != null){
            asupr.remove();
        }
    if(clikouz != "plat"){

        if(clikouz != ""){
            let rem = document.querySelector(".cliquedd") as HTMLElement;
            let under = document.querySelector("#platEmpty") as HTMLImageElement;
            rem.classList.remove("cliquedd");
            rem.style.opacity = "";
            let pacmanFull = document.querySelector('#pacmanFull') as HTMLImageElement;
                let pokeballFull = document.querySelector('#pokeballFull') as HTMLImageElement;
                let mapFull = document.querySelector('#mapFull') as HTMLImageElement;
                if(rem != pacmanFull && rem != pokeballFull && rem != mapFull){
                    rem.style.opacity = "0";
                    rem.onmouseenter = entered;
                    rem.onmouseleave = left;
                    let parent = rem.parentElement as HTMLDivElement;
                    let children = parent.children[1] as HTMLImageElement;
                    children.style.opacity = "1";
                }
            let platFull = document.querySelector('#platFull') as HTMLImageElement;
            platFull.onmouseenter = function(){};
            platFull.onmouseleave = function(){
                platFull.style.opacity = "1";
                under.style.opacity = "0";
            };
            under.style.opacity = "0";
            let projetVu = document.querySelector('#projetVu') as HTMLImageElement;
            let langages = document.querySelector('#langages') as HTMLElement;
            let titre = document.querySelector('#titre') as HTMLElement;
            let details = document.querySelector('#details') as HTMLElement;
            let description = document.querySelector('#description') as HTMLElement;
            let fonctionnement = document.querySelector('#fonctionnement') as HTMLElement;
            let accès = document.querySelector('#accès') as HTMLElement;
            let maquettes = document.querySelector('#maquettes') as HTMLElement;
            let TMAQ = document.querySelector('#TMAQ') as HTMLElement;
            accès.style.display = "flex";
            TMAQ.style.display = "none";
            let tdesc = document.querySelector('#TDESC') as HTMLElement;
            let hidden = document.querySelector('#hidden') as HTMLElement;
            let descAA = document.querySelector('#descAA') as HTMLElement;
            platFull.style.opacity = "1";
            platFull.classList.add("cliquedd");
            hidden.style.opacity = "0";
            if(maquettes.children[0] != undefined){
                maquettes.children[0].remove();
            }
            let screens = document.querySelector('#screens') as HTMLElement;
                while(screens.childElementCount > 0){
                    screens.children[0].remove();
                }
            langages.style.opacity = "0";
            projetVu.style.opacity = "0";
            hidden.style.display = "none";
            let site = document.querySelector('#siteLien') as HTMLElement;
            let tele = document.querySelector('#teleLien') as HTMLElement;
            site.setAttribute("href", "");
            site.setAttribute("target", "_blank");
            site.style.display = "block";
            tele.style.display = "block";
            titre.classList.add("toLEFT"); 

            setTimeout(function(){
                titre.style.left = "18rem";
                titre.style.position = "relative";
                projetVu.style.display = "none";
                langages.style.display = "none";
                titre.classList.remove("toLEFT");
                
            }, 500);
            setTimeout(function(){
                
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                langages.style.opacity = "1";
                clikouz = "plat";
                platFull.style.opacity = "1";
                titre.classList.add("toTOP");
                descAA.classList.add("toTOP");
                tdesc.classList.add("toTOP");
                setTimeout(function(){
                    titre.innerHTML = "TrouveTonPlat";
                    description.innerHTML = "Avec Trouve Ton Plat, vous pouvez trouver des recettes de plats en fonction de vos ingrédients. En plus, si vous vous inscrivez, vous pouvez sauvegarder vos recettes préférées et les partager avec vos amis ! Vous pouvez également créer vos propres recettes et les partager avec la communauté, qui pourra alors les noter.";
                    titre.classList.add("fromBtoT");
                    tdesc.classList.add("fromBtoT");
                    descAA.classList.add("fromBtoT");
                },300);

                setTimeout(function(){
                    fonctionnement.innerHTML = "Nous avons utilisé une base de données always data pour stocker les recettes, ingrédients ou encore les utilisateurs et leurs informations. Nous avons cependant créé chaque recette une par une, en utilisant un script PHP qui nous permettait de créer une recette en fonction de ses ingrédients.";
                    projetVu.style.display = "block";
                    projetVu.style.opacity = "0";
                    langages.style.display = "block";
                    let site = document.querySelector('#siteLien') as HTMLElement;
                    let tele = document.querySelector('#teleLien') as HTMLElement;
                    site.setAttribute("href", "https://trouvetonplat.alwaysdata.net/");
                    tele.style.display = "none";

                        titre.classList.remove("toTOP");
                        tdesc.classList.remove("toTOP");
                        descAA.classList.remove("toTOP");
                        titre.classList.remove("fromBtoT");
                        tdesc.classList.remove("fromBtoT");
                        descAA.classList.remove("fromBtoT");
                        titre.style.position = "relative";
                        titre.classList.add("toRIGHT3");
                        setTimeout(function(){
                            titre.style.left = "18rem";
                            titre.classList.remove("toRIGHT3");
                        }, 1000);
                        setTimeout(function(){
                            projetVu.style.opacity = "1";
                            titre.style.position = "static";
                            titre.style.left = "";
                            projetVu.src = platFull.src;
                            let htmlBadge = document.createElement("img");
                            let cssBadge = document.createElement("img");
                            let jsBadge = document.createElement("img");
                            let gitBadge = document.createElement("img");
                            let phpBadge = document.createElement("img");
                            htmlBadge.style.opacity = "0";
                            cssBadge.style.opacity = "0";
                            jsBadge.style.opacity = "0";
                            gitBadge.style.opacity = "0";
                            phpBadge.style.opacity = "0";
                            htmlBadge.src = html;
                            cssBadge.src = css;
                            jsBadge.src = javascript;
                            gitBadge.src = git;
                            phpBadge.src = php;
                            htmlBadge.id = "htmlBadge";
                            cssBadge.id = "cssBadge";
                            jsBadge.id = "jsBadge";
                            gitBadge.id = "gitBadge";
                            phpBadge.id = "phpBadge";
                            langages.appendChild(htmlBadge);
                            langages.appendChild(cssBadge);
                            langages.appendChild(jsBadge);
                            langages.appendChild(gitBadge);
                            langages.appendChild(phpBadge);
                            setTimeout(function(){
                                htmlBadge.style.opacity = "1";
                                cssBadge.style.opacity = "1";
                                jsBadge.style.opacity = "1";
                                gitBadge.style.opacity = "1";
                            }, 100);
                            details.style.overflowY = "scroll";
                            hidden.style.opacity = "0";
                            hidden.style.display = "block";
                            setTimeout(function(){
                                hidden.style.opacity = "1";
                            }, 100);
                        }, 700);

                }, 700);
            }, 500);
        }else{

        clikouz = "plat";
        let under = document.querySelector("#platEmpty") as HTMLImageElement;
        let platFull = document.querySelector('#platFull') as HTMLImageElement;
        platFull.onmouseenter = function(){};
        platFull.onmouseleave = function(){
            platFull.style.opacity = "1";
            under.style.opacity = "0";
        };
        under.style.opacity = "0";
        let projetVu = document.querySelector('#projetVu') as HTMLImageElement;
        let langages = document.querySelector('#langages') as HTMLElement;
        let titre = document.querySelector('#titre') as HTMLElement;
        let details = document.querySelector('#details') as HTMLElement;
        let description = document.querySelector('#description') as HTMLElement;
        let fonctionnement = document.querySelector('#fonctionnement') as HTMLElement;
        let accès = document.querySelector('#accès') as HTMLElement;
        let maquettes = document.querySelector('#maquettes') as HTMLElement;
        accès.style.display = "flex";
        let TMAQ = document.querySelector('#TMAQ') as HTMLElement;
            TMAQ.style.display = "none";
        let tdesc = document.querySelector('#TDESC') as HTMLElement;
        let hidden = document.querySelector('#hidden') as HTMLElement;
        let descAA = document.querySelector('#descAA') as HTMLElement;
        

        platFull.style.opacity = "1";
        platFull.classList.add("cliquedd");
        titre.classList.add("toTOP");
        descAA.classList.add("toTOP");
        let site = document.querySelector('#siteLien') as HTMLElement;
            let tele = document.querySelector('#teleLien') as HTMLElement;
            site.style.display = "block";
            tele.style.display = "block";
            site.setAttribute("href", "https://trouvetonplat.alwaysdata.net");
            site.setAttribute("target", "_blank");
            tele.style.display = "none";
        tdesc.classList.add("toTOP");
        
        setTimeout(function(){
            titre.innerHTML = "TrouveTonPlat";
            description.innerHTML = "Avec Trouve Ton Plat, vous pouvez trouver des recettes de plats en fonction de vos ingrédients. En plus, si vous vous inscrivez, vous pouvez sauvegarder vos recettes préférées et les partager avec vos amis ! Vous pouvez également créer vos propres recettes et les partager avec la communauté, qui pourra alors les noter.";
            fonctionnement.innerHTML = "Nous avons utilisé une base de données always data pour stocker les recettes, ingrédients ou encore les utilisateurs et leurs informations. Nous avons cependant créé chaque recette une par une, en utilisant un script PHP qui nous permettait de créer une recette en fonction de ses ingrédients.";
            projetVu.style.display = "block";
            projetVu.style.opacity = "0";
            langages.style.display = "block";
            titre.classList.add("fromBtoT");
            tdesc.classList.add("fromBtoT");
            descAA.classList.add("fromBtoT");
            setTimeout(function(){
                titre.classList.remove("toTOP");
                tdesc.classList.remove("toTOP");
                descAA.classList.remove("toTOP");
                titre.classList.remove("fromBtoT");
                tdesc.classList.remove("fromBtoT");
                descAA.classList.remove("fromBtoT");
                titre.style.position = "relative";
                titre.classList.add("toRIGHT3");
                setTimeout(function(){
                    titre.style.left = "18rem";
                    titre.classList.remove("toRIGHT3");
                }, 1000);
                setTimeout(function(){
                    projetVu.style.opacity = "1";
                    titre.style.position = "static";
                    titre.style.left = "";
                    projetVu.src = platFull.src;
                    let htmlBadge = document.createElement("img");
                    let cssBadge = document.createElement("img");
                    let jsBadge = document.createElement("img");
                    let gitBadge = document.createElement("img");
                    let phpBadge = document.createElement("img");
                    htmlBadge.style.opacity = "0";
                    cssBadge.style.opacity = "0";
                    jsBadge.style.opacity = "0";
                    gitBadge.style.opacity = "0";
                    phpBadge.style.opacity = "0";
                    htmlBadge.src = html;
                    cssBadge.src = css;
                    jsBadge.src = javascript;
                    gitBadge.src = git;
                    phpBadge.src = php;
                    htmlBadge.id = "htmlBadge";
                    cssBadge.id = "cssBadge";
                    jsBadge.id = "jsBadge";
                    gitBadge.id = "gitBadge";
                    phpBadge.id = "phpBadge";
                    langages.appendChild(htmlBadge);
                    langages.appendChild(cssBadge);
                    maquettes.style.display = "none";
                    langages.appendChild(jsBadge);
                    langages.appendChild(gitBadge);
                    langages.appendChild(phpBadge);
                    setTimeout(function(){
                        htmlBadge.style.opacity = "1";
                        cssBadge.style.opacity = "1";
                        jsBadge.style.opacity = "1";
                        gitBadge.style.opacity = "1";
                        phpBadge.style.opacity = "1";
                    }, 100);
                    details.style.overflowY = "scroll";
                    hidden.style.opacity = "0";
                    hidden.style.display = "block";
                    setTimeout(function(){
                        hidden.style.opacity = "1";
                    }, 100);
                }, 700);
            }, 500);
        }, 300);
}}
}


























function mapClicked(){
    let asupr = document.querySelector("#pasdispo") as HTMLElement;
        if(asupr != null){
            asupr.remove();
        }
    if(clikouz != "map"){

        if(clikouz != ""){
            let rem = document.querySelector(".cliquedd") as HTMLElement;
            
                rem.classList.remove("cliquedd");
                rem.style.opacity = "";
                let pacmanFull = document.querySelector('#pacmanFull') as HTMLImageElement;
                let pokeballFull = document.querySelector('#pokeballFull') as HTMLImageElement;
                let mapFull = document.querySelector('#mapFull') as HTMLImageElement;
                if(rem != pacmanFull && rem != pokeballFull && rem != mapFull){
                    rem.style.opacity = "0";
                    rem.onmouseenter = entered;
                    rem.onmouseleave = left;
                    let parent = rem.parentElement as HTMLDivElement;
                    let children = parent.children[1] as HTMLImageElement;
                    children.style.opacity = "1";
                }
            let projetVu = document.querySelector('#projetVu') as HTMLImageElement;
            let langages = document.querySelector('#langages') as HTMLElement;
            let titre = document.querySelector('#titre') as HTMLElement;
            let details = document.querySelector('#details') as HTMLElement;
            let description = document.querySelector('#description') as HTMLElement;
            let fonctionnement = document.querySelector('#fonctionnement') as HTMLElement;
            let accès = document.querySelector('#accès') as HTMLElement;
            accès.style.display = "flex";
            let maquettes = document.querySelector('#maquettes') as HTMLElement;
            let TMAQ = document.querySelector('#TMAQ') as HTMLElement;
            TMAQ.style.display = "none";
            let tdesc = document.querySelector('#TDESC') as HTMLElement;
            let hidden = document.querySelector('#hidden') as HTMLElement;
            let descAA = document.querySelector('#descAA') as HTMLElement;
            mapFull.style.opacity = "1";
            mapFull.classList.add("cliquedd");
            hidden.style.opacity = "0";
            if(maquettes.children[0] != undefined){
                maquettes.children[0].remove();
            }
            let screens = document.querySelector('#screens') as HTMLElement;
                while(screens.childElementCount > 0){
                    screens.children[0].remove();
                }
            langages.style.opacity = "0";
            projetVu.style.opacity = "0";
            hidden.style.display = "none";
            let site = document.querySelector('#siteLien') as HTMLElement;
            let tele = document.querySelector('#teleLien') as HTMLElement;
            tele.setAttribute("href", mapFile);
            site.setAttribute("target", "_blank");
            TMAQ.style.display = "block";
            site.style.display = "block";
            tele.style.display = "block";
            titre.classList.add("toLEFT"); 

            setTimeout(function(){
                titre.style.left = "18rem";
                titre.style.position = "relative";
                projetVu.style.display = "none";
                langages.style.display = "none";
                titre.classList.remove("toLEFT");
                
            }, 500);
            setTimeout(function(){
                
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                langages.style.opacity = "1";
                clikouz = "map";
                mapFull.style.opacity = "1";
                titre.classList.add("toTOP");
                descAA.classList.add("toTOP");
                tdesc.classList.add("toTOP");
                setTimeout(function(){
                    titre.innerHTML = "Graphe-map";
                    description.innerHTML = "Graphe-map est un programme qui permet la création de graphes possédant des éléments définis à partir d'un CSV. Ainsi, une fois votre CSV importé, vous pourrez obtenir diverses informations dessus, en plus d'une visualisation. Le graphe est également personnalisable.";
                    titre.classList.add("fromBtoT");
                    tdesc.classList.add("fromBtoT");
                    descAA.classList.add("fromBtoT");
                },300);

                setTimeout(function(){
                    let screens = document.querySelector('#screens') as HTMLElement;
                    let pkmS1im = document.createElement("img") as HTMLImageElement;
                    let a1 = document.createElement("a") as HTMLAnchorElement;
                    a1.href = mapS1;
                    a1.target = "_blank";
                    pkmS1im.src = mapS1;
                    pkmS1im.style.width = "58rem";
                    pkmS1im.setAttribute("href",mapS1);
                    a1.appendChild(pkmS1im);
                    screens.appendChild(a1);
                    fonctionnement.innerHTML = "Ce programme a été réalisé entièremment en Java, en utilisant l'aide IHM de NetBeans. Le programme va parser le document CSV, créer des éléments en fonctions des informations (types, voisins) et définir des positions en focntion des positions déjà définies.";
                    projetVu.style.display = "block";
                    projetVu.style.opacity = "0";
                    langages.style.display = "block";
                    let site = document.querySelector('#siteLien') as HTMLElement;
                    let tele = document.querySelector('#teleLien') as HTMLElement;
                    site.style.display = "none";
                    tele.setAttribute("href", mapFile);
                    tele.setAttribute("target", "_blank");

                        titre.classList.remove("toTOP");
                        tdesc.classList.remove("toTOP");
                        descAA.classList.remove("toTOP");
                        titre.classList.remove("fromBtoT");
                        tdesc.classList.remove("fromBtoT");
                        descAA.classList.remove("fromBtoT");
                        titre.style.position = "relative";
                        titre.classList.add("toRIGHT4");
                        setTimeout(function(){
                            titre.style.left = "18rem";
                            titre.classList.remove("toRIGHT4");
                        }, 1000);
                        setTimeout(function(){
                            projetVu.style.opacity = "1";
                            titre.style.position = "static";
                            titre.style.left = "";
                            projetVu.src = mapFull.src;
                            let javaBadge = document.createElement("img");
                            let javaBadge2 = document.createElement("img");
                            let javaBadge3 = document.createElement("img");
                            javaBadge.style.opacity = "0";
                            javaBadge2.style.opacity = "0";
                            javaBadge3.style.opacity = "0";
                            javaBadge.src = java;
                            javaBadge2.src = java;
                            javaBadge3.src = java;
                            javaBadge.id = "javaBadge";
                            javaBadge2.id = "javaBadge";
                            javaBadge3.id = "javaBadge";
                            langages.appendChild(javaBadge);
                            langages.appendChild(javaBadge2);
                            langages.appendChild(javaBadge3);
                            setTimeout(function(){
                                javaBadge3.style.opacity = "1";
                            }, 100);
                            details.style.overflowY = "scroll";
                            let TMAQ = document.querySelector("#TMAQ") as HTMLElement;
                            TMAQ.style.display = "none";
                            hidden.style.opacity = "0";
                            hidden.style.display = "block";
                            setTimeout(function(){
                                hidden.style.opacity = "1";
                            }, 100);
                        }, 700);

                }, 700);
            }, 500);
        }else{

        clikouz = "map";
        let mapFull = document.querySelector('#mapFull') as HTMLImageElement;
        let projetVu = document.querySelector('#projetVu') as HTMLImageElement;
        let langages = document.querySelector('#langages') as HTMLElement;
        let titre = document.querySelector('#titre') as HTMLElement;
        let details = document.querySelector('#details') as HTMLElement;
        let description = document.querySelector('#description') as HTMLElement;
        let fonctionnement = document.querySelector('#fonctionnement') as HTMLElement;
        let accès = document.querySelector('#accès') as HTMLElement;
        accès.style.display = "flex";
        let maquettes = document.querySelector('#maquettes') as HTMLElement;
        let tdesc = document.querySelector('#TDESC') as HTMLElement;
        let hidden = document.querySelector('#hidden') as HTMLElement;
        let descAA = document.querySelector('#descAA') as HTMLElement;
        let screens = document.querySelector('#screens') as HTMLElement;
        let pkmS1im = document.createElement("img") as HTMLImageElement;
        let a1 = document.createElement("a") as HTMLAnchorElement;
        a1.href = mapS1;
        a1.target = "_blank";
        pkmS1im.src = mapS1;
        pkmS1im.setAttribute("href",mapS1);
        pkmS1im.style.width = "58rem";
        a1.appendChild(pkmS1im);
        screens.appendChild(a1);
        mapFull.style.opacity = "1";
        mapFull.classList.add("cliquedd");
        titre.classList.add("toTOP");
        descAA.classList.add("toTOP");
        let site = document.querySelector('#siteLien') as HTMLElement;
            let tele = document.querySelector('#teleLien') as HTMLElement;
            tele.setAttribute("href", mapFile);
            tele.setAttribute("target", "_blank");
            tele.style.display = "block";
            site.style.display = "none";
        tdesc.classList.add("toTOP");
        
        setTimeout(function(){
            titre.innerHTML = "Graphe-map";
            description.innerHTML = "Graphe-map est un programme qui permet la création de graphes possédant des éléments définis à partir d'un CSV. Ainsi, une fois votre CSV importé, vous pourrez obtenir diverses informations dessus, en plus d'une visualisation. Le graphe est également personnalisable.";
            fonctionnement.innerHTML = "Ce programme a été réalisé entièremment en Java, en utilisant l'aide IHM de NetBeans. Le programme va parser le document CSV, créer des éléments en fonctions des informations (types, voisins) et définir des positions en focntion des positions déjà définies.";
            projetVu.style.display = "block";
            projetVu.style.opacity = "0";
            langages.style.display = "block";
            titre.classList.add("fromBtoT");
            tdesc.classList.add("fromBtoT");
            descAA.classList.add("fromBtoT");
            setTimeout(function(){
                projetVu.style.display = "block";
                projetVu.style.opacity = "0";
                langages.style.display = "block";
                let site = document.querySelector('#siteLien') as HTMLElement;
                let tele = document.querySelector('#teleLien') as HTMLElement;
                site.style.display = "none";
                tele.setAttribute("href", mapFile);
                tele.setAttribute("target", "_blank");

                    titre.classList.remove("toTOP");
                    tdesc.classList.remove("toTOP");
                    descAA.classList.remove("toTOP");
                    titre.classList.remove("fromBtoT");
                    let TMAQ = document.querySelector("#TMAQ") as HTMLElement;
                    TMAQ.style.display = "none";
                    tdesc.classList.remove("fromBtoT");
                    descAA.classList.remove("fromBtoT");
                    titre.style.position = "relative";
                    titre.classList.add("toRIGHT4");
                    setTimeout(function(){
                        titre.style.left = "18rem";
                        titre.classList.remove("toRIGHT4");
                    }, 1000);
                    setTimeout(function(){
                        projetVu.style.opacity = "1";
                        titre.style.position = "static";
                        titre.style.left = "";
                        projetVu.src = mapFull.src;
                        let javaBadge = document.createElement("img");
                        let javaBadge2 = document.createElement("img");
                        let javaBadge3 = document.createElement("img");
                        javaBadge.style.opacity = "0";
                        javaBadge2.style.opacity = "0";
                        javaBadge3.style.opacity = "0";
                        javaBadge.src = java;
                        javaBadge2.src = java;
                        javaBadge3.src = java;
                        javaBadge.id = "javaBadge";
                        javaBadge2.id = "javaBadge";
                        javaBadge3.id = "javaBadge";
                        langages.appendChild(javaBadge);
                        langages.appendChild(javaBadge2);
                        langages.appendChild(javaBadge3);
                        setTimeout(function(){
                            javaBadge3.style.opacity = "1";
                        }, 100);
                        details.style.overflowY = "scroll";
                        hidden.style.opacity = "0";
                        hidden.style.display = "block";
                        setTimeout(function(){
                            hidden.style.opacity = "1";
                        }, 100);
                    }, 700);

            }, 500);
        }, 300);
}}
}





























function courseClicked(){
    if(clikouz != "course"){

        if(clikouz != ""){
            let rem = document.querySelector(".cliquedd") as HTMLElement;
            let under = document.querySelector("#courseEmpty") as HTMLImageElement;
            rem.classList.remove("cliquedd");
            rem.style.opacity = "";
            let pacmanFull = document.querySelector('#pacmanFull') as HTMLImageElement;
                let pokeballFull = document.querySelector('#pokeballFull') as HTMLImageElement;
                let mapFull = document.querySelector('#mapFull') as HTMLImageElement;
                if(rem != pacmanFull && rem != pokeballFull && rem != mapFull){
                    rem.style.opacity = "0";
                    rem.onmouseenter = entered;
                    rem.onmouseleave = left;
                    let parent = rem.parentElement as HTMLDivElement;
                    let children = parent.children[1] as HTMLImageElement;
                    children.style.opacity = "1";
                }
            let courseFull = document.querySelector('#courseFull') as HTMLImageElement;
            courseFull.onmouseenter = function(){};
            courseFull.onmouseleave = function(){
                courseFull.style.opacity = "1";
                under.style.opacity = "0";
            };
            under.style.opacity = "0";
            let projetVu = document.querySelector('#projetVu') as HTMLImageElement;
            let langages = document.querySelector('#langages') as HTMLElement;
            let titre = document.querySelector('#titre') as HTMLElement;
            let details = document.querySelector('#details') as HTMLElement;
            let description = document.querySelector('#description') as HTMLElement;
            let fonctionnement = document.querySelector('#fonctionnement') as HTMLElement;
            let accès = document.querySelector('#accès') as HTMLElement;
            accès.style.display = "none";
            let maquettes = document.querySelector('#maquettes') as HTMLElement;
            let TMAQ = document.querySelector('#TMAQ') as HTMLElement;
            TMAQ.style.display = "flex";
            let tdesc = document.querySelector('#TDESC') as HTMLElement;
            let hidden = document.querySelector('#hidden') as HTMLElement;
            let descAA = document.querySelector('#descAA') as HTMLElement;
            courseFull.style.opacity = "1";
            courseFull.classList.add("cliquedd");
            hidden.style.opacity = "0";
            if(maquettes.children[0] != undefined){
                maquettes.children[0].remove();
            }
            let screens = document.querySelector('#screens') as HTMLElement;
                while(screens.childElementCount > 0){
                    screens.children[0].remove();
                }
            langages.style.opacity = "0";
            projetVu.style.opacity = "0";
            hidden.style.display = "none";
            let site = document.querySelector('#siteLien') as HTMLElement;
            let tele = document.querySelector('#teleLien') as HTMLElement;
            site.setAttribute("href", "");
            site.setAttribute("target", "_blank");
            site.style.display = "block";
            tele.style.display = "block";
            titre.classList.add("toLEFT"); 

            setTimeout(function(){
                titre.style.left = "18rem";
                titre.style.position = "relative";
                projetVu.style.display = "none";
                langages.style.display = "none";
                titre.classList.remove("toLEFT");
                
            }, 500);
            setTimeout(function(){
                
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                langages.style.opacity = "1";
                clikouz = "course";
                courseFull.style.opacity = "1";
                titre.classList.add("toTOP");
                descAA.classList.add("toTOP");
                tdesc.classList.add("toTOP");
                setTimeout(function(){
                    titre.innerHTML = "Liste de  <br /> courses";
                    description.innerHTML = "Ce site développé à l'aide du framework Symfony permet de créer des listes de courses, de les modifier et de les supprimer. Les ingrédients sont définis et stockés dans une base de données et peuvent être notés comme achetés. Les utilisateurs peuvent également accéder à diverses statistiques concernant leurs habitudes ";
                    titre.classList.add("fromBtoT");
                    tdesc.classList.add("fromBtoT");
                    descAA.classList.add("fromBtoT");
                },300);

                setTimeout(function(){
                    fonctionnement.innerHTML = "Nous avons utilisé MAMP et les bases en localhost pour créer ce site web. Nous avons utilisé le framework Symfony pour créer les différentes pages et les liens entre elles. Le site demande d'ailleurs une authentification avec un pseudo et un mot de passe, stockant ainsi les comptes dans la base précedemment définie";
                    projetVu.style.display = "block";
                    projetVu.style.opacity = "0";
                    langages.style.display = "block";
                    let site = document.querySelector('#siteLien') as HTMLElement;
                    let tele = document.querySelector('#teleLien') as HTMLElement;
                    site.style.display = "none";
                    tele.style.display = "none";
                    let msg = document.createElement("h2")
                    msg.innerHTML = "Ce projet n'est pas encore disponible en ligne !";
                    msg.style.textAlign = "center";
                    msg.id= "pasdispo";
                    let pa = site.parentElement as HTMLElement;
                    pa.appendChild(msg);

                        titre.classList.remove("toTOP");
                        tdesc.classList.remove("toTOP");
                        descAA.classList.remove("toTOP");
                        titre.classList.remove("fromBtoT");
                        tdesc.classList.remove("fromBtoT");
                        descAA.classList.remove("fromBtoT");
                        titre.style.position = "relative";
                        titre.classList.add("toRIGHT5");
                        setTimeout(function(){
                            titre.style.left = "18rem";
                            titre.classList.remove("toRIGHT5");
                        }, 1000);
                        setTimeout(function(){
                            projetVu.style.opacity = "1";
                            titre.style.position = "static";
                            titre.style.left = "";
                            projetVu.src = courseFull.src;
                            let htmlBadge = document.createElement("img");
                            let cssBadge = document.createElement("img");
                            let jsBadge = document.createElement("img");
                            let gitBadge = document.createElement("img");
                            let symfonyBadge = document.createElement("img");

                            htmlBadge.style.opacity = "0";
                            cssBadge.style.opacity = "0";
                            jsBadge.style.opacity = "0";
                            gitBadge.style.opacity = "0";
                            symfonyBadge.style.opacity = "0";
                            htmlBadge.src = html;
                            cssBadge.src = css;
                            jsBadge.src = javascript;
                            gitBadge.src = git;
                            symfonyBadge.src = symfony;
                            htmlBadge.id = "htmlBadge";
                            cssBadge.id = "cssBadge";
                            jsBadge.id = "jsBadge";
                            gitBadge.id = "gitBadge";
                            symfonyBadge.id = "symfonyBadge";
                            langages.appendChild(htmlBadge);
                            langages.appendChild(cssBadge);
                            langages.appendChild(jsBadge);
                            langages.appendChild(gitBadge);
                            langages.appendChild(symfonyBadge);
                            setTimeout(function(){
                                htmlBadge.style.opacity = "1";
                                cssBadge.style.opacity = "1";
                                jsBadge.style.opacity = "1";
                                gitBadge.style.opacity = "1";
                                symfonyBadge.style.opacity = "1";
                            }, 100);
                            details.style.overflowY = "scroll";
                            let iframe = document.createElement("iframe");
                            iframe.id = "iframeFigma";
                            iframe.src = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FzIXDvStZR7pnADGhw4BPLG%2FUntitled%3Fnode-id%3D0%253A1%26t%3DD1fThqGkDZSGbXZV-1";
                            iframe.width = "800";
                            iframe.height = "450";
                            iframe.allowFullscreen = true;
                            maquettes.appendChild(iframe);
                            hidden.style.opacity = "0";
                            hidden.style.display = "block";
                            setTimeout(function(){
                                hidden.style.opacity = "1";
                            }, 100);
                        }, 700);

                }, 700);
            }, 500);




        }else{


        

            clikouz = "course";
            let under = document.querySelector("#courseEmpty") as HTMLImageElement;
            let courseFull = document.querySelector('#courseFull') as HTMLImageElement;
            courseFull.onmouseenter = function(){};
            courseFull.onmouseleave = function(){
                courseFull.style.opacity = "1";
                under.style.opacity = "0";
            };
            under.style.opacity = "0";
            let projetVu = document.querySelector('#projetVu') as HTMLImageElement;
            let langages = document.querySelector('#langages') as HTMLElement;
            let titre = document.querySelector('#titre') as HTMLElement;
            let details = document.querySelector('#details') as HTMLElement;
            let description = document.querySelector('#description') as HTMLElement;
            let fonctionnement = document.querySelector('#fonctionnement') as HTMLElement;
            let accès = document.querySelector('#accès') as HTMLElement;
            accès.style.display = "none";
            let maquettes = document.querySelector('#maquettes') as HTMLElement;
            let TMAQ = document.querySelector('#TMAQ') as HTMLElement;
                TMAQ.style.display = "flex";
            let tdesc = document.querySelector('#TDESC') as HTMLElement;
            let hidden = document.querySelector('#hidden') as HTMLElement;
            let descAA = document.querySelector('#descAA') as HTMLElement;
            
    
            courseFull.style.opacity = "1";
            courseFull.classList.add("cliquedd");
            titre.classList.add("toTOP");
            descAA.classList.add("toTOP");
            let site = document.querySelector('#siteLien') as HTMLElement;
                let tele = document.querySelector('#teleLien') as HTMLElement;
                site.style.display = "none";
                tele.style.display = "none";
            tdesc.classList.add("toTOP");
            
            setTimeout(function(){
                titre.innerHTML = "Liste de <br /> courses";
                description.innerHTML = "Ce site développé à l'aide du framework Symfony permet de créer des listes de courses, de les modifier et de les supprimer. Les ingrédients sont définis et stockés dans une base de données et peuvent être notés comme achetés. Les utilisateurs peuvent également accéder à diverses statistiques concernant leurs habitudes ";
                fonctionnement.innerHTML = "Nous avons utilisé MAMP et les bases en localhost pour créer ce site web. Nous avons utilisé le framework Symfony pour créer les différentes pages et les liens entre elles. Le site demande d'ailleurs une authentification avec un pseudo et un mot de passe, stockant ainsi les comptes dans la base précedemment définie";
                projetVu.style.display = "block";
                projetVu.style.opacity = "0";
                langages.style.display = "block";
                titre.classList.add("fromBtoT");
                tdesc.classList.add("fromBtoT");
                descAA.classList.add("fromBtoT");
                setTimeout(function(){
                    titre.classList.remove("toTOP");
                    tdesc.classList.remove("toTOP");
                    descAA.classList.remove("toTOP");
                    titre.classList.remove("fromBtoT");
                    tdesc.classList.remove("fromBtoT");
                    descAA.classList.remove("fromBtoT");
                    titre.style.position = "relative";
                    titre.classList.add("toRIGHT5");
                    setTimeout(function(){
                        titre.style.left = "18rem";
                        titre.classList.remove("toRIGHT5");
                    }, 1000);
                    setTimeout(function(){
                        projetVu.style.opacity = "1";
                        titre.style.position = "static";
                        titre.style.left = "";
                        projetVu.src = courseFull.src;
                        let htmlBadge = document.createElement("img");
                        let cssBadge = document.createElement("img");
                        let jsBadge = document.createElement("img");
                        let gitBadge = document.createElement("img");
                        let symfonyBadge = document.createElement("img");
                        htmlBadge.style.opacity = "0";
                        cssBadge.style.opacity = "0";
                        jsBadge.style.opacity = "0";
                        gitBadge.style.opacity = "0";
                        symfonyBadge.style.opacity = "0";
                        htmlBadge.src = html;
                        cssBadge.src = css;
                        jsBadge.src = javascript;
                        gitBadge.src = git;
                        symfonyBadge.src = symfony;
                        htmlBadge.id = "htmlBadge";
                        cssBadge.id = "cssBadge";
                        jsBadge.id = "jsBadge";
                        gitBadge.id = "gitBadge";
                        symfonyBadge.id = "symfonyBadge";
                        langages.appendChild(htmlBadge);
                        langages.appendChild(cssBadge);
                        maquettes.style.display = "flex";
                        langages.appendChild(jsBadge);
                        langages.appendChild(gitBadge);
                        langages.appendChild(symfonyBadge);
                        let msg = document.createElement("h2")
                        msg.id = "pasdispo"
                        msg.innerHTML = "Ce projet n'est pas encore disponible en ligne !";
                        msg.style.textAlign = "center";
                        let pa = site.parentElement as HTMLElement;
                        pa.appendChild(msg);
                        setTimeout(function(){
                            htmlBadge.style.opacity = "1";
                            cssBadge.style.opacity = "1";
                            jsBadge.style.opacity = "1";
                            gitBadge.style.opacity = "1";
                            symfonyBadge.style.opacity = "1";
                        }, 100);
                        details.style.overflowY = "scroll";
                        let iframe = document.createElement("iframe");
                            iframe.id = "iframeFigma";
                            iframe.src = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FzIXDvStZR7pnADGhw4BPLG%2FUntitled%3Fnode-id%3D0%253A1%26t%3DD1fThqGkDZSGbXZV-1";
                            iframe.width = "800";
                            iframe.height = "450";
                            iframe.allowFullscreen = true;
                            maquettes.appendChild(iframe);
                        hidden.style.opacity = "0";
                        hidden.style.display = "block";
                        setTimeout(function(){
                            hidden.style.opacity = "1";
                        }, 100);
                    }, 700);
                }, 500);
            }, 300);
}}
}





function siteClicked(){
    let asupr = document.querySelector("#pasdispo") as HTMLElement;
        if(asupr != null){
            asupr.remove();
        }
    if(clikouz != "site"){

        if(clikouz != ""){
            let rem = document.querySelector(".cliquedd") as HTMLElement;
            let under = document.querySelector("#siteEmpty") as HTMLImageElement;
            rem.classList.remove("cliquedd");
            rem.style.opacity = "";
            let pacmanFull = document.querySelector('#pacmanFull') as HTMLImageElement;
                let pokeballFull = document.querySelector('#pokeballFull') as HTMLImageElement;
                let mapFull = document.querySelector('#mapFull') as HTMLImageElement;
                if(rem != pacmanFull && rem != pokeballFull && rem != mapFull){
                    rem.style.opacity = "0";
                    rem.onmouseenter = entered;
                    rem.onmouseleave = left;
                    let parent = rem.parentElement as HTMLDivElement;
                    let children = parent.children[1] as HTMLImageElement;
                    children.style.opacity = "1";
                }
            let siteFull = document.querySelector('#siteFull') as HTMLImageElement;
            siteFull.onmouseenter = function(){};
            siteFull.onmouseleave = function(){
                siteFull.style.opacity = "1";
                under.style.opacity = "0";
            };
            under.style.opacity = "0";
            let projetVu = document.querySelector('#projetVu') as HTMLImageElement;
            let langages = document.querySelector('#langages') as HTMLElement;
            let titre = document.querySelector('#titre') as HTMLElement;
            let details = document.querySelector('#details') as HTMLElement;
            let description = document.querySelector('#description') as HTMLElement;
            let fonctionnement = document.querySelector('#fonctionnement') as HTMLElement;
            let accès = document.querySelector('#accès') as HTMLElement;
            accès.style.display = "flex";
            let maquettes = document.querySelector('#maquettes') as HTMLElement;
            let TMAQ = document.querySelector('#TMAQ') as HTMLElement;
            TMAQ.style.display = "none";
            let tdesc = document.querySelector('#TDESC') as HTMLElement;
            let hidden = document.querySelector('#hidden') as HTMLElement;
            let descAA = document.querySelector('#descAA') as HTMLElement;
            siteFull.style.opacity = "1";
            siteFull.classList.add("cliquedd");
            hidden.style.opacity = "0";
            if(maquettes.children[0] != undefined){
                maquettes.children[0].remove();
            }
            let screens = document.querySelector('#screens') as HTMLElement;
                while(screens.childElementCount > 0){
                    screens.children[0].remove();
                }
            langages.style.opacity = "0";
            projetVu.style.opacity = "0";
            hidden.style.display = "none";
            let site = document.querySelector('#siteLien') as HTMLElement;
            let tele = document.querySelector('#teleLien') as HTMLElement;
            tele.setAttribute("href", siteFile);
            site.setAttribute("target", "_blank");
            site.style.display = "block";
            tele.style.display = "block";
            titre.classList.add("toLEFT"); 

            setTimeout(function(){
                titre.style.left = "18rem";
                titre.style.position = "relative";
                projetVu.style.display = "none";
                langages.style.display = "none";
                titre.classList.remove("toLEFT");
                
            }, 500);
            setTimeout(function(){
                
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                langages.style.opacity = "1";
                clikouz = "site";
                siteFull.style.opacity = "1";
                titre.classList.add("toTOP");
                descAA.classList.add("toTOP");
                tdesc.classList.add("toTOP");
                setTimeout(function(){
                    titre.innerHTML = "Site IUT";
                    description.innerHTML = "Ce site a été réalisé dans le cadre d'un projet de groupe. Il a pour but de présenter les différents aspects de l'IUT Lyon 1. Il a été réalisé en HTML, CSS et PHP. Ce site n'est pas hébergé, mais vous pouvez le consulter en cliquant sur le bouton ci-dessous.";
                    titre.classList.add("fromBtoT");
                    tdesc.classList.add("fromBtoT");
                    descAA.classList.add("fromBtoT");
                },300);

                setTimeout(function(){
                    fonctionnement.innerHTML = "Étant le premier site jamais rélaisé par le groupe, nous n'avons pas suivi de méthodologie précise. De plus, l'HTML et le CSS étaient nos seuls outils lors de la création. Nous avons ensuite réalisé les différentes pages, puis nous avons fait les liens entre les pages.";
                    projetVu.style.display = "block";
                    projetVu.style.opacity = "0";
                    langages.style.display = "block";
                    let site = document.querySelector('#siteLien') as HTMLElement;
                    let tele = document.querySelector('#teleLien') as HTMLElement;
                    tele.setAttribute("href", siteFile);
                    site.style.display = "none";

                        titre.classList.remove("toTOP");
                        tdesc.classList.remove("toTOP");
                        descAA.classList.remove("toTOP");
                        titre.classList.remove("fromBtoT");
                        tdesc.classList.remove("fromBtoT");
                        descAA.classList.remove("fromBtoT");
                        titre.style.position = "relative";
                        titre.classList.add("toRIGHT3");
                        setTimeout(function(){
                            titre.style.left = "18rem";
                            titre.classList.remove("toRIGHT3");
                        }, 1000);
                        setTimeout(function(){
                            projetVu.style.opacity = "1";
                            titre.style.position = "static";
                            titre.style.left = "";
                            projetVu.src = siteFull.src;
                            let htmlBadge = document.createElement("img");
                            let htmlBadge3 = document.createElement("img");
                            let cssBadge = document.createElement("img");
                            let htmlBadge2 = document.createElement("img");
                            htmlBadge.style.opacity = "0";
                            cssBadge.style.opacity = "0";
                            htmlBadge3.style.opacity = "0";
                            htmlBadge2.style.opacity = "0";
                            htmlBadge.src = html;
                            htmlBadge3.src = html
                            cssBadge.src = css;
                            htmlBadge2.src = html;
                            htmlBadge.id = "htmlBadge";
                            htmlBadge3.id = "htmlBadge";
                            cssBadge.id = "cssBadge";
                            htmlBadge2.id = "htmlBadge";
                            langages.appendChild(htmlBadge);
                            langages.appendChild(htmlBadge3);
                            langages.appendChild(cssBadge);
                            langages.appendChild(htmlBadge2);
                            setTimeout(function(){
                                cssBadge.style.opacity = "1";
                                htmlBadge2.style.opacity = "1";
                            }, 100);
                            details.style.overflowY = "scroll";
                            hidden.style.opacity = "0";
                            hidden.style.display = "block";
                            setTimeout(function(){
                                hidden.style.opacity = "1";
                            }, 100);
                        }, 700);

                }, 700);
            }, 500);
        }else{

        clikouz = "site";
        let under = document.querySelector("#siteEmpty") as HTMLImageElement;
        let siteFull = document.querySelector('#siteFull') as HTMLImageElement;
        siteFull.onmouseenter = function(){};
        siteFull.onmouseleave = function(){
            siteFull.style.opacity = "1";
            under.style.opacity = "0";
        };
        under.style.opacity = "0";
        let projetVu = document.querySelector('#projetVu') as HTMLImageElement;
        let langages = document.querySelector('#langages') as HTMLElement;
        let titre = document.querySelector('#titre') as HTMLElement;
        let details = document.querySelector('#details') as HTMLElement;
        let description = document.querySelector('#description') as HTMLElement;
        let fonctionnement = document.querySelector('#fonctionnement') as HTMLElement;
        let accès = document.querySelector('#accès') as HTMLElement;
        accès.style.display = "flex";
        let maquettes = document.querySelector('#maquettes') as HTMLElement;
        let TMAQ = document.querySelector('#TMAQ') as HTMLElement;
            TMAQ.style.display = "none";
        let tdesc = document.querySelector('#TDESC') as HTMLElement;
        let hidden = document.querySelector('#hidden') as HTMLElement;
        let descAA = document.querySelector('#descAA') as HTMLElement;
        

        siteFull.style.opacity = "1";
        siteFull.classList.add("cliquedd");
        titre.classList.add("toTOP");
        descAA.classList.add("toTOP");
        let site = document.querySelector('#siteLien') as HTMLElement;
            let tele = document.querySelector('#teleLien') as HTMLElement;
            site.style.display = "block";
            tele.style.display = "block";
            tele.setAttribute("href", siteFile);
            tele.setAttribute("target", "_blank");
            site.style.display = "none";
        tdesc.classList.add("toTOP");
        
        setTimeout(function(){
            titre.innerHTML = "Site IUT";
            description.innerHTML = "Ce site a été réalisé dans le cadre d'un projet de groupe. Il a pour but de présenter les différents aspects de l'IUT Lyon 1. Il a été réalisé en HTML, CSS et PHP. Ce site n'est pas hébergé, mais vous pouvez le consulter en cliquant sur le bouton ci-dessous.";
            fonctionnement.innerHTML = "Étant le premier site jamais rélaisé par le groupe, nous n'avons pas suivi de méthodologie précise. De plus, l'HTML et le CSS étaient nos seuls outils lors de la création. Nous avons ensuite réalisé les différentes pages, puis nous avons fait les liens entre les pages.";
            projetVu.style.display = "block";
            projetVu.style.opacity = "0";
            langages.style.display = "block";
            titre.classList.add("fromBtoT");
            tdesc.classList.add("fromBtoT");
            descAA.classList.add("fromBtoT");
            setTimeout(function(){
                titre.classList.remove("toTOP");
                tdesc.classList.remove("toTOP");
                descAA.classList.remove("toTOP");
                titre.classList.remove("fromBtoT");
                tdesc.classList.remove("fromBtoT");
                descAA.classList.remove("fromBtoT");
                titre.style.position = "relative";
                titre.classList.add("toRIGHT3");
                setTimeout(function(){
                    titre.style.left = "18rem";
                    titre.classList.remove("toRIGHT3");
                }, 1000);
                setTimeout(function(){
                    projetVu.style.opacity = "1";
                    titre.style.position = "static";
                    titre.style.left = "";
                    projetVu.style.opacity = "1";
                            titre.style.position = "static";
                            titre.style.left = "";
                            projetVu.src = siteFull.src;
                            let htmlBadge = document.createElement("img");
                            let htmlBadge3 = document.createElement("img");
                            let cssBadge = document.createElement("img");
                            let htmlBadge2 = document.createElement("img");
                            htmlBadge.style.opacity = "0";
                            cssBadge.style.opacity = "0";
                            htmlBadge3.style.opacity = "0";
                            htmlBadge2.style.opacity = "0";
                            htmlBadge.src = html;
                            htmlBadge3.src = html
                            cssBadge.src = css;
                            htmlBadge2.src = html;
                            htmlBadge.id = "htmlBadge";
                            htmlBadge3.id = "htmlBadge";
                            cssBadge.id = "cssBadge";
                            htmlBadge2.id = "htmlBadge";
                            langages.appendChild(htmlBadge);
                            langages.appendChild(htmlBadge3)
                            langages.appendChild(cssBadge);
                            langages.appendChild(htmlBadge2);
                            setTimeout(function(){
                                cssBadge.style.opacity = "1";
                                htmlBadge2.style.opacity = "1";
                            }, 100);
                    details.style.overflowY = "scroll";
                    hidden.style.opacity = "0";
                    hidden.style.display = "block";
                    setTimeout(function(){
                        hidden.style.opacity = "1";
                    }, 100);
                }, 700);
            }, 500);
        }, 300);
}}
}









function portfolioClicked(){
    if(clikouz != "portfolio"){

        if(clikouz != ""){
            let rem = document.querySelector(".cliquedd") as HTMLElement;
            let under = document.querySelector("#portfolioEmpty") as HTMLImageElement;
            rem.classList.remove("cliquedd");
            rem.style.opacity = "";
            let pacmanFull = document.querySelector('#pacmanFull') as HTMLImageElement;
                let pokeballFull = document.querySelector('#pokeballFull') as HTMLImageElement;
                let mapFull = document.querySelector('#mapFull') as HTMLImageElement;
                if(rem != pacmanFull && rem != pokeballFull && rem != mapFull){
                    rem.style.opacity = "0";
                    rem.onmouseenter = entered;
                    rem.onmouseleave = left;
                    let parent = rem.parentElement as HTMLDivElement;
                    let children = parent.children[1] as HTMLImageElement;
                    children.style.opacity = "1";
                }
            let portfolioFull = document.querySelector('#portfolioFull') as HTMLImageElement;
            portfolioFull.onmouseenter = function(){};
            portfolioFull.onmouseleave = function(){
                portfolioFull.style.opacity = "1";
                under.style.opacity = "0";
            };
            under.style.opacity = "0";
            let projetVu = document.querySelector('#projetVu') as HTMLImageElement;
            let langages = document.querySelector('#langages') as HTMLElement;
            let titre = document.querySelector('#titre') as HTMLElement;
            let details = document.querySelector('#details') as HTMLElement;
            let description = document.querySelector('#description') as HTMLElement;
            let fonctionnement = document.querySelector('#fonctionnement') as HTMLElement;
            let accès = document.querySelector('#accès') as HTMLElement;
            accès.style.display = "none";
            let maquettes = document.querySelector('#maquettes') as HTMLElement;
            let TMAQ = document.querySelector('#TMAQ') as HTMLElement;
            TMAQ.style.display = "block";
            let tdesc = document.querySelector('#TDESC') as HTMLElement;
            let hidden = document.querySelector('#hidden') as HTMLElement;
            let descAA = document.querySelector('#descAA') as HTMLElement;
            portfolioFull.style.opacity = "1";
            portfolioFull.classList.add("cliquedd");
            hidden.style.opacity = "0";
            if(maquettes.children[0] != undefined){
                maquettes.children[0].remove();
            }
            let screens = document.querySelector('#screens') as HTMLElement;
                while(screens.childElementCount > 0){
                    screens.children[0].remove();
                }
            langages.style.opacity = "0";
            projetVu.style.opacity = "0";
            hidden.style.display = "none";
            let site = document.querySelector('#siteLien') as HTMLElement;
            let tele = document.querySelector('#teleLien') as HTMLElement;
            site.setAttribute("href", "");
            site.setAttribute("target", "_blank");
            site.style.display = "block";
            tele.style.display = "block";
            titre.classList.add("toLEFT"); 

            setTimeout(function(){
                titre.style.left = "18rem";
                titre.style.position = "relative";
                projetVu.style.display = "none";
                langages.style.display = "none";
                titre.classList.remove("toLEFT");
                
            }, 500);
            setTimeout(function(){
                
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                langages.style.opacity = "1";
                clikouz = "portfolio";
                portfolioFull.style.opacity = "1";
                titre.classList.add("toTOP");
                descAA.classList.add("toTOP");
                tdesc.classList.add("toTOP");
                setTimeout(function(){
                    titre.innerHTML = "Portfolio";
                    description.innerHTML = "Le site sur lequel vous vous trouvez actuellement ! Vous pouvez y retrouver mes projets, mes compétences et mes informations de contact. Ce portfolio a été créé dans le cadre d'un devoir de communication, et m'a permi de m'entraîner à utiliser le framework ReactJS. Il est cependant temporaire, et sera remplacé par un site plus complet et plus professionnel dans le futur.";
                    titre.classList.add("fromBtoT");
                    tdesc.classList.add("fromBtoT");
                    descAA.classList.add("fromBtoT");
                },300);

                setTimeout(function(){
                    fonctionnement.innerHTML = "Réalisé en ReactJS, HTML et CSS, ce portfolio est un site statique. Il est hébergé sur un le domaine .chouteau.org, et donc accessible via n'importe quel navigateur , à tout moment. Il n'est composé que d'une seule page, et utilise des animations CSS pour créer une expérience utilisateur fluide. Je n'ai utilisé aucun template, et ai donc réalisé tout le design du site moi-même.";
                    projetVu.style.display = "block";
                    projetVu.style.opacity = "0";
                    langages.style.display = "block";
                    let site = document.querySelector('#siteLien') as HTMLElement;
                    let tele = document.querySelector('#teleLien') as HTMLElement;
                    site.style.display = "none";
                    tele.style.display = "none";

                        titre.classList.remove("toTOP");
                        tdesc.classList.remove("toTOP");
                        descAA.classList.remove("toTOP");
                        titre.classList.remove("fromBtoT");
                        tdesc.classList.remove("fromBtoT");
                        descAA.classList.remove("fromBtoT");
                        titre.style.position = "relative";
                        titre.classList.add("toRIGHT5");
                        setTimeout(function(){
                            titre.style.left = "18rem";
                            titre.classList.remove("toRIGHT5");
                        }, 1000);
                        setTimeout(function(){
                            projetVu.style.opacity = "1";
                            titre.style.position = "static";
                            titre.style.left = "";
                            projetVu.src = portfolioFull.src;
                            let htmlBadge = document.createElement("img");
                            let cssBadge = document.createElement("img");
                            let jsBadge = document.createElement("img");
                            let reactBadge = document.createElement("img");

                            htmlBadge.style.opacity = "0";
                            cssBadge.style.opacity = "0";
                            jsBadge.style.opacity = "0";
                            reactBadge.style.opacity = "0";
                            htmlBadge.src = html;
                            cssBadge.src = css;
                            jsBadge.src = javascript;
                            reactBadge.src = react;
                            htmlBadge.id = "htmlBadge";
                            cssBadge.id = "cssBadge";
                            jsBadge.id = "jsBadge";
                            reactBadge.id = "reactBadge"
                            langages.appendChild(htmlBadge);
                            langages.appendChild(cssBadge);
                            langages.appendChild(jsBadge);
                            langages.appendChild(reactBadge);
                            setTimeout(function(){
                                htmlBadge.style.opacity = "1";
                                cssBadge.style.opacity = "1";
                                jsBadge.style.opacity = "1";
                                reactBadge.style.opacity = "1";
                            }, 100);
                            details.style.overflowY = "scroll";
                            let iframe = document.createElement("iframe");
                            iframe.id = "iframeFigma";
                            iframe.src = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fsbr6LEp77Uo5lo0sLvrzgy%2FUntitled%3Fnode-id%3D0%253A1%26t%3Ds9o80pD7SuIIpPPA-1";
                            iframe.width = "800";
                            iframe.height = "450";
                            iframe.allowFullscreen = true;
                            maquettes.appendChild(iframe);
                            hidden.style.opacity = "0";
                            hidden.style.display = "block";
                            setTimeout(function(){
                                hidden.style.opacity = "1";
                            }, 100);
                        }, 700);

                }, 700);
            }, 500);




        }else{


        

            clikouz = "portfolio";
            let under = document.querySelector("#portfolioEmpty") as HTMLImageElement;
            let portfolioFull = document.querySelector('#portfolioFull') as HTMLImageElement;
            portfolioFull.onmouseenter = function(){};
            portfolioFull.onmouseleave = function(){
                portfolioFull.style.opacity = "1";
                under.style.opacity = "0";
            };
            under.style.opacity = "0";
            let projetVu = document.querySelector('#projetVu') as HTMLImageElement;
            let langages = document.querySelector('#langages') as HTMLElement;
            let titre = document.querySelector('#titre') as HTMLElement;
            let details = document.querySelector('#details') as HTMLElement;
            let description = document.querySelector('#description') as HTMLElement;
            let fonctionnement = document.querySelector('#fonctionnement') as HTMLElement;
            let accès = document.querySelector('#accès') as HTMLElement;
            accès.style.display = "none";
            let maquettes = document.querySelector('#maquettes') as HTMLElement;
            let TMAQ = document.querySelector('#TMAQ') as HTMLElement;
                TMAQ.style.display = "block";
            let tdesc = document.querySelector('#TDESC') as HTMLElement;
            let hidden = document.querySelector('#hidden') as HTMLElement;
            let descAA = document.querySelector('#descAA') as HTMLElement;
            
    
            portfolioFull.style.opacity = "1";
            portfolioFull.classList.add("cliquedd");
            titre.classList.add("toTOP");
            descAA.classList.add("toTOP");
            let site = document.querySelector('#siteLien') as HTMLElement;
                let tele = document.querySelector('#teleLien') as HTMLElement;
                site.style.display = "none";
                tele.style.display = "none";
            tdesc.classList.add("toTOP");
            
            setTimeout(function(){
                titre.innerHTML = "Portfolio";
                description.innerHTML = "Le site sur lequel vous vous trouvez actuellement ! Vous pouvez y retrouver mes projets, mes compétences et mes informations de contact. Ce portfolio a été créé dans le cadre d'un devoir de communication, et m'a permi de m'entraîner à utiliser le framework ReactJS. Il est cependant temporaire, et sera remplacé par un site plus complet et plus professionnel dans le futur.";
                fonctionnement.innerHTML = "Réalisé en ReactJS, HTML et CSS, ce portfolio est un site statique. Il est hébergé sur un le domaine .chouteau.org, et donc accessible via n'importe quel navigateur , à tout moment. Il n'est composé que d'une seule page, et utilise des animations CSS pour créer une expérience utilisateur fluide. Je n'ai utilisé aucun template, et ai donc réalisé tout le design du site moi-même.";
                projetVu.style.display = "block";
                projetVu.style.opacity = "0";
                langages.style.display = "block";
                titre.classList.add("fromBtoT");
                tdesc.classList.add("fromBtoT");
                descAA.classList.add("fromBtoT");
                setTimeout(function(){
                    titre.classList.remove("toTOP");
                    tdesc.classList.remove("toTOP");
                    descAA.classList.remove("toTOP");
                    titre.classList.remove("fromBtoT");
                    tdesc.classList.remove("fromBtoT");
                    descAA.classList.remove("fromBtoT");
                    titre.style.position = "relative";
                    titre.classList.add("toRIGHT5");
                    setTimeout(function(){
                        titre.style.left = "18rem";
                        titre.classList.remove("toRIGHT5");
                    }, 1000);
                    setTimeout(function(){
                        projetVu.style.opacity = "1";
                            titre.style.position = "static";
                            titre.style.left = "";
                            projetVu.src = portfolioFull.src;
                            let htmlBadge = document.createElement("img");
                            let cssBadge = document.createElement("img");
                            let jsBadge = document.createElement("img");
                            let reactBadge = document.createElement("img");

                            htmlBadge.style.opacity = "0";
                            cssBadge.style.opacity = "0";
                            jsBadge.style.opacity = "0";
                            reactBadge.style.opacity = "0";
                            htmlBadge.src = html;
                            cssBadge.src = css;
                            jsBadge.src = javascript;
                            reactBadge.src = react;
                            htmlBadge.id = "htmlBadge";
                            cssBadge.id = "cssBadge";
                            jsBadge.id = "jsBadge";
                            reactBadge.id = "reactBadge"
                            langages.appendChild(htmlBadge);
                            langages.appendChild(cssBadge);
                            langages.appendChild(jsBadge);
                            langages.appendChild(reactBadge);
                            setTimeout(function(){
                                htmlBadge.style.opacity = "1";
                                cssBadge.style.opacity = "1";
                                jsBadge.style.opacity = "1";
                                reactBadge.style.opacity = "1";
                            }, 100);
                        details.style.overflowY = "scroll";
                        let iframe = document.createElement("iframe");
                            iframe.id = "iframeFigma";
                            iframe.src = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fsbr6LEp77Uo5lo0sLvrzgy%2FUntitled%3Fnode-id%3D0%253A1%26t%3Ds9o80pD7SuIIpPPA-1";
                            iframe.width = "800";
                            iframe.height = "450";
                            iframe.allowFullscreen = true;
                            maquettes.appendChild(iframe);
                        hidden.style.opacity = "0";
                        hidden.style.display = "block";
                        setTimeout(function(){
                            hidden.style.opacity = "1";
                        }, 100);
                    }, 700);
                }, 500);
            }, 300);
}}
}













function annuaireClicked(){
    let asupr = document.querySelector("#pasdispo") as HTMLElement;
        if(asupr != null){
            asupr.remove();
        }
    if(clikouz != "annuaire"){

        if(clikouz != ""){
            let rem = document.querySelector(".cliquedd") as HTMLElement;
            let under = document.querySelector("#annuaireEmpty") as HTMLImageElement;
            rem.classList.remove("cliquedd");
            rem.style.opacity = "";
            let pacmanFull = document.querySelector('#pacmanFull') as HTMLImageElement;
                let pokeballFull = document.querySelector('#pokeballFull') as HTMLImageElement;
                let mapFull = document.querySelector('#mapFull') as HTMLImageElement;
                if(rem != pacmanFull && rem != pokeballFull && rem != mapFull){
                    rem.style.opacity = "0";
                    rem.onmouseenter = entered;
                    rem.onmouseleave = left;
                    let parent = rem.parentElement as HTMLDivElement;
                    let children = parent.children[1] as HTMLImageElement;
                    children.style.opacity = "1";
                }
            let annuaireFull = document.querySelector('#annuaireFull') as HTMLImageElement;
            annuaireFull.onmouseenter = function(){};
            annuaireFull.onmouseleave = function(){
                annuaireFull.style.opacity = "1";
                under.style.opacity = "0";
            };
            under.style.opacity = "0";
            let projetVu = document.querySelector('#projetVu') as HTMLImageElement;
            let langages = document.querySelector('#langages') as HTMLElement;
            let titre = document.querySelector('#titre') as HTMLElement;
            let details = document.querySelector('#details') as HTMLElement;
            let description = document.querySelector('#description') as HTMLElement;
            let fonctionnement = document.querySelector('#fonctionnement') as HTMLElement;
            let accès = document.querySelector('#accès') as HTMLElement;
            accès.style.display = "flex";
            let maquettes = document.querySelector('#maquettes') as HTMLElement;
            let TMAQ = document.querySelector('#TMAQ') as HTMLElement;
            TMAQ.style.display = "none";
            let tdesc = document.querySelector('#TDESC') as HTMLElement;
            let hidden = document.querySelector('#hidden') as HTMLElement;
            let descAA = document.querySelector('#descAA') as HTMLElement;
            annuaireFull.style.opacity = "1";
            annuaireFull.classList.add("cliquedd");
            hidden.style.opacity = "0";
            if(maquettes.children[0] != undefined){
                maquettes.children[0].remove();
            }
            let screens = document.querySelector('#screens') as HTMLElement;
                while(screens.childElementCount > 0){
                    screens.children[0].remove();
                }
            langages.style.opacity = "0";
            projetVu.style.opacity = "0";
            hidden.style.display = "none";
            let site = document.querySelector('#siteLien') as HTMLElement;
            let tele = document.querySelector('#teleLien') as HTMLElement;
            tele.setAttribute("href", sae_c);
            site.setAttribute("target", "_blank");
            site.style.display = "block";
            tele.style.display = "block";
            titre.classList.add("toLEFT"); 

            setTimeout(function(){
                titre.style.left = "18rem";
                titre.style.position = "relative";
                projetVu.style.display = "none";
                langages.style.display = "none";
                titre.classList.remove("toLEFT");
                
            }, 500);
            setTimeout(function(){
                
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                for(let i = 1; i < langages.children.length+1; i++){
                    let child = langages.children[langages.children.length-i] as HTMLElement;
                    langages.removeChild(child);
                }
                langages.style.opacity = "1";
                clikouz = "site";
                annuaireFull.style.opacity = "1";
                titre.classList.add("toTOP");
                descAA.classList.add("toTOP");
                tdesc.classList.add("toTOP");
                setTimeout(function(){
                    titre.innerHTML = "Annuaire en C";
                    description.innerHTML = "Ce projet a été réalisé en C, dans le cadre d'un projet de première année de BUT informatique. Il s'agit d'un annuaire de contacts, qui permet de créer, modifier, supprimer ou encore rechercher des contacts. Il est possible de sauvegarder les contacts dans un fichier texte, ou de les charger.";
                    titre.classList.add("fromBtoT");
                    tdesc.classList.add("fromBtoT");
                    descAA.classList.add("fromBtoT");
                },300);

                setTimeout(function(){
                    fonctionnement.innerHTML = "Le programme est composé de 3 fichiers : <br> - Le fichier principal, qui contient le main et les fonctions principales du programme. <br> - Le fichier des fonctions, qui contient les fonctions secondaires du programme. <br> - Le fichier des structures, qui contient les structures de données utilisées dans le programme.";
                    projetVu.style.display = "block";
                    projetVu.style.opacity = "0";
                    langages.style.display = "block";
                    let site = document.querySelector('#siteLien') as HTMLElement;
                    let tele = document.querySelector('#teleLien') as HTMLElement;
                    tele.setAttribute("href", siteFile);
                    site.style.display = "none";

                        titre.classList.remove("toTOP");
                        tdesc.classList.remove("toTOP");
                        descAA.classList.remove("toTOP");
                        titre.classList.remove("fromBtoT");
                        tdesc.classList.remove("fromBtoT");
                        descAA.classList.remove("fromBtoT");
                        titre.style.position = "relative";
                        titre.classList.add("toRIGHT3");
                        setTimeout(function(){
                            titre.style.left = "18rem";
                            titre.classList.remove("toRIGHT3");
                        }, 1000);
                        setTimeout(function(){
                            projetVu.style.opacity = "1";
                            titre.style.position = "static";
                            titre.style.left = "";
                            projetVu.src = annuaireFull.src;
                            let htmlBadge = document.createElement("img");
                            let htmlBadge3 = document.createElement("img");
                            let cssBadge = document.createElement("img");
                            let cBadge = document.createElement("img");
                            htmlBadge.style.opacity = "0";
                            cssBadge.style.opacity = "0";
                            htmlBadge3.style.opacity = "0";
                            cBadge.style.opacity = "0";
                            htmlBadge.src = html;
                            htmlBadge3.src = html
                            cssBadge.src = css;
                            cBadge.src = c;
                            htmlBadge.id = "htmlBadge";
                            htmlBadge3.id = "htmlBadge";
                            cssBadge.id = "cssBadge";
                            cBadge.id = "cBadge";
                            langages.appendChild(htmlBadge);
                            langages.appendChild(htmlBadge3);
                            langages.appendChild(cssBadge);
                            langages.appendChild(cBadge);
                            setTimeout(function(){
                                cBadge.style.opacity = "1";
                            }, 100);
                            details.style.overflowY = "scroll";
                            hidden.style.opacity = "0";
                            hidden.style.display = "block";
                            setTimeout(function(){
                                hidden.style.opacity = "1";
                            }, 100);
                        }, 700);

                }, 700);
            }, 500);
        }else{

        clikouz = "annuaire";
        let under = document.querySelector("#annuaireEmpty") as HTMLImageElement;
        let annuaireFull = document.querySelector('#annuaireFull') as HTMLImageElement;
        annuaireFull.onmouseenter = function(){};
        annuaireFull.onmouseleave = function(){
            annuaireFull.style.opacity = "1";
            under.style.opacity = "0";
        };
        under.style.opacity = "0";
        let projetVu = document.querySelector('#projetVu') as HTMLImageElement;
        let langages = document.querySelector('#langages') as HTMLElement;
        let titre = document.querySelector('#titre') as HTMLElement;
        let details = document.querySelector('#details') as HTMLElement;
        let description = document.querySelector('#description') as HTMLElement;
        let fonctionnement = document.querySelector('#fonctionnement') as HTMLElement;
        let accès = document.querySelector('#accès') as HTMLElement;
        accès.style.display = "flex";
        let maquettes = document.querySelector('#maquettes') as HTMLElement;
        let TMAQ = document.querySelector('#TMAQ') as HTMLElement;
            TMAQ.style.display = "none";
        let tdesc = document.querySelector('#TDESC') as HTMLElement;
        let hidden = document.querySelector('#hidden') as HTMLElement;
        let descAA = document.querySelector('#descAA') as HTMLElement;
        

        annuaireFull.style.opacity = "1";
        annuaireFull.classList.add("cliquedd");
        titre.classList.add("toTOP");
        descAA.classList.add("toTOP");
        let site = document.querySelector('#siteLien') as HTMLElement;
            let tele = document.querySelector('#teleLien') as HTMLElement;
            site.style.display = "block";
            tele.style.display = "block";
            tele.setAttribute("href", siteFile);
            tele.setAttribute("target", "_blank");
            site.style.display = "none";
        tdesc.classList.add("toTOP");
        
        setTimeout(function(){
            titre.innerHTML = "Annuaire C";
            description.innerHTML = "Ce projet a été réalisé en C, dans le cadre d'un projet de première année de BUT informatique. Il s'agit d'un annuaire de contacts, qui permet de créer, modifier, supprimer ou encore rechercher des contacts. Il est possible de sauvegarder les contacts dans un fichier texte, ou de les charger.";
            fonctionnement.innerHTML = "Le programme est composé de 3 fichiers : <br> - Le fichier principal, qui contient le main et les fonctions principales du programme. <br> - Le fichier des fonctions, qui contient les fonctions secondaires du programme. <br> - Le fichier des structures, qui contient les structures de données utilisées dans le programme.";
            projetVu.style.display = "block";
            projetVu.style.opacity = "0";
            langages.style.display = "block";
            titre.classList.add("fromBtoT");
            tdesc.classList.add("fromBtoT");
            descAA.classList.add("fromBtoT");
            setTimeout(function(){
                titre.classList.remove("toTOP");
                tdesc.classList.remove("toTOP");
                descAA.classList.remove("toTOP");
                titre.classList.remove("fromBtoT");
                tdesc.classList.remove("fromBtoT");
                descAA.classList.remove("fromBtoT");
                titre.style.position = "relative";
                titre.classList.add("toRIGHT3");
                setTimeout(function(){
                    titre.style.left = "18rem";
                    titre.classList.remove("toRIGHT3");
                }, 1000);
                setTimeout(function(){
                        projetVu.style.opacity = "1";
                        titre.style.position = "static";
                        titre.style.left = "";
                        projetVu.style.opacity = "1";
                        projetVu.style.opacity = "1";
                        titre.style.position = "static";
                        titre.style.left = "";
                        projetVu.src = annuaireFull.src;
                        let htmlBadge = document.createElement("img");
                        let htmlBadge3 = document.createElement("img");
                        let cssBadge = document.createElement("img");
                        let cBadge = document.createElement("img");
                        htmlBadge.style.opacity = "0";
                        cssBadge.style.opacity = "0";
                        htmlBadge3.style.opacity = "0";
                        cBadge.style.opacity = "0";
                        htmlBadge.src = html;
                        htmlBadge3.src = html
                        cssBadge.src = css;
                        cBadge.src = c;
                        htmlBadge.id = "htmlBadge";
                        htmlBadge3.id = "htmlBadge";
                        cssBadge.id = "cssBadge";
                        cBadge.id = "cBadge";
                        langages.appendChild(htmlBadge);
                        langages.appendChild(htmlBadge3);
                        langages.appendChild(cssBadge);
                        langages.appendChild(cBadge);
                        setTimeout(function(){
                            cBadge.style.opacity = "1";
                        }, 100);
                    details.style.overflowY = "scroll";
                    hidden.style.opacity = "0";
                    hidden.style.display = "block";
                    setTimeout(function(){
                        hidden.style.opacity = "1";
                    }, 100);
                }, 700);
            }, 500);
        }, 300);
}}
}















    

    return(
        <div id="cover">
             <br /> <br />

            <div id="container" onMouseEnter={addListeners}>
                <div id="bazar">
                    <div id="topp"></div>
                    <div id="vertiSlider">
                        <div id="projets">

                            <div id="pacman">
                                <img id="pacmanFull" className="onTop" src={pacmanFull} onClick={pacmanClicked}></img>
                                <img id="pacmanEmpty" src={pacmanEmpty}></img>
                            </div>

                            <div id="pokeball">
                                <img id="pokeballFull" className="onTop" src={pokeballFull} onClick={pokeballClicked}></img>
                                <img id="pokeballEmpty" src={pokeballEmpty}></img>
                            </div>
                            
                            <div id="plat">
                                <img id="platFull" className="onTop" onMouseEnter={entered} onMouseLeave={left} src={platFull} onClick={platClicked}></img>
                                <img id="platEmpty" className="under" src={platEmpty}></img>
                            </div>

                            <div id="map">
                                <img id="mapFull" className="onTop" src={mapFull} onClick={mapClicked}></img>
                                <img id="mapEmpty" src={mapEmpty}></img>
                            </div>

                            <div id="course">
                                <img id="courseFull" className="onTop" src={courseFull} onMouseEnter={entered} onMouseLeave={left} onClick={courseClicked}></img>
                                <img id="courseEmpty" src={courseEmpty}></img>
                            </div>

                            <div id="site">
                                <img id="siteFull" className="onTop" src={siteFull} onMouseEnter={entered} onMouseLeave={left} onClick={siteClicked}></img>
                                <img id="siteEmpty" src={siteEmpty}></img>
                            </div>

                            <div id="portfolio">
                                <img id="portfolioFull" className="onTop" src={portfolioFull} onMouseEnter={entered} onMouseLeave={left} onClick={portfolioClicked}></img>
                                <img id="portfolioEmpty" src={portfolioEmpty}></img>
                            </div>

                            <div id="annuaire">
                                <img id="annuaireFull" className="onTop" src={annuaireFull} onMouseEnter={entered} onMouseLeave={left} onClick={annuaireClicked}></img>
                                <img id="annuaireEmpty" src={annuaireEmpty}></img>
                            </div>

                        </div>
                    </div>
                    <div id="bottomm"></div>
                </div>
                <div id="details">
                    <div id="hautt">
                        <div id="langages"></div>
                        <h1 id="titre">Ici, vous pouvez retrouver l'ensemble de mes projets !</h1>
                        <img id="projetVu" style={{display:"none"}}></img>
                    </div>
                    <h2 id="TDESC">Description</h2>
                    <div id="descAA" className="texteContainer"><p id="description">
                        N'hésitez pas à descendre dans le menu à gauche pour voir l'ensemble des projets. Cliquez sur une icône pour en savoir plus ! </p>
                    </div>
                    <div id="hidden">
                        <h2 id="TFONC">Fonctionnement</h2>
                        <div className="texteContainer"><p id="fonctionnement"></p></div>
                        <br />
                        <div id="screens"> </div>
                        <div id="accès"><a id="siteLien"><button className="btnAcces" id="Site">Site</button></a>
                                        <a id="teleLien"><button className="btnAcces" id="Télécharger">Télécharger</button></a>
                        </div>
                        <h2 id="TMAQ">Maquette</h2>
                        <div id="maquettes"></div>
                    </div>
                    <br />
                </div>
            </div>

            <br />

        </div>

        
    )
}