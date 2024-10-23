import React from 'react';
import './web3d.css'; // Fichier CSS pour les styles
import tp1Image from './chaise.png'; // Assurez-vous que l'image est dans le bon dossier
import tp1File from './chaise.blend'; // Lien vers le fichier Blender

const Web3D = () => {
    return ( <
        div className = "web3d-container" >
        <
        h1 > Module Web 3 D < /h1> <
        h2 > TP1: Création d 'une scène avec Blender</h2> <
        p >
        L 'objectif de ce TP est de créer une scène avec Blender. 
        Voici ma réalisation:
        <
        /p> <
        img src = { tp1Image }
        alt = "Scène créée avec Blender"
        className = "tp-image" / >
        <
        div className = "file-download" >
        <
        p > Télécharger le fichier Blender: < /p> <
        a href = { tp1File }
        download className = "download-link" > Télécharger chaise.blend < /a> <
        /div> <
        /div>
    );
};

export default Web3D;