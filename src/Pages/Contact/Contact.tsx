import React, { useEffect } from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import axios from "axios";
import cv from "../../assets/CV_Noe_CHOUTEAU.pdf";
import CV_general from "../../assets/CV_general.pdf";
import './Contact.css';

export default function Types() {
  
  return (
    <div id="cover">
      <div id="toutes">
        <div id="ligneUno">
          <div id="cubeMail" className = "cube"><h1>Mail :</h1><a href="mailto:noe@chouteau.org"><p className ="pClickable">noe@chouteau.org</p></a></div>
          <div id="cubeLinkedin" className = "cube"><h1>Linkedin :</h1><a href="https://www.linkedin.com/in/no%C3%A9-chouteau-422b2b222/"><p className ="pClickable">Noé Chouteau</p></a></div>
          <div id="cubeTel" className = "cube"><h1>Téléphone :</h1><p>06 85 ** ** **</p></div>
          <div id="cubeGit" className = "cube"><h1>Git :</h1>
          <a href="https://forge.univ-lyon1.fr/p2102056"><p className ="pClickable">Gitlab</p></a>
          <a href="https://github.com/noechouteau"><p className ="pClickable">GitHub</p></a>
          </div>
          <div id="cubeCv" className = "cube"><h1>CV :</h1>
          <a href={cv}><p className ="pClickable">CV Informatique</p></a>
          <a href={CV_general}><p className ="pClickable">CV général</p></a>
          </div>
        </div>
        <div id="ligneDos">
          
          <div id="cubeMessage" className = "cube">
            <div id="LIGNEU">
            <input type="text" name="name" placeholder="Nom" ></input>
            <input type="text" name="email" placeholder="Email"></input>
            </div>
            <textarea name="message" id="" placeholder="Un message ?"></textarea>
            </div>
            <a href="https://noe.chouteau.org"><button id="formsend" >Envoyer</button></a>
        </div>
      </div>
        
    </div>
  )
}